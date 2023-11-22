import {
  CITY_ABBREVIATION_NAME,
  CITY_FULL_NAME,
  WARD_LIST,
} from '@/constants/administrativeDistrict';
import { DANCE_GENRE } from '@/constants/constants';
import { createClass, getClassDraft } from '@/lib/apis/classApi';
import {
  deleteImage,
  postMultipleImage,
  postSingleImage,
} from '@/lib/apis/imageApi';
import { IprocessedDraft, classCreateData } from '@/types/class';

export const uploadImageFiles = async (
  profileImageUrls: {
    file: File;
    imageUrl: string;
  }[],
  mode: 'lecturers' | 'lectures',
) => {
  const imgFileList = profileImageUrls.map(({ file }) => file);
  return await postMultipleImage(imgFileList, mode);
};

export const uploadImageFilesWithFallback = async (
  profileImageUrls: {
    file?: File;
    imageUrl: string;
  }[],
  mode: 'lecturers' | 'lectures',
) => {
  const updatedUrls = await Promise.all(
    profileImageUrls.map(async ({ file, imageUrl }) => {
      if (file) {
        const newUrl = await postSingleImage(file, mode);
        return newUrl;
      } else {
        return imageUrl;
      }
    }),
  );

  return updatedUrls;
};

export const constructEmail = (emailFront: string, emailBack: string) => {
  return emailFront + '@' + emailBack;
};

export const categorizeGenres = (genres: string[]) => {
  return genres.reduce(
    (acc, genre) => {
      if (DANCE_GENRE.includes(genre)) {
        acc.newGenres.push(genre);
      } else {
        acc.etcGenres.push(genre);
      }
      return acc;
    },
    { newGenres: [] as string[], etcGenres: [] as string[] },
  );
};

export const reqRegions = (regions: { [key: string]: string[] }) => {
  return Object.entries(regions).flatMap(([key, value]) => {
    const valArray = value as string[];
    if (key === '온라인' || key === '세종') {
      return [key === '세종' ? '세종특별자치시' : '온라인'];
    } else if (valArray.length === WARD_LIST[key].length) {
      return [`${CITY_FULL_NAME[key]} 전 지역`];
    } else {
      return valArray.map((val) => `${CITY_FULL_NAME[key]} ${val}`);
    }
  });
};

export const resRegions = (
  regions: {
    administrativeDistrict: string;
    district: string | null;
  }[],
) => {
  const result: { [key: string]: string[] } = {};

  regions.forEach(({ administrativeDistrict, district }) => {
    const abbreviation = CITY_ABBREVIATION_NAME[administrativeDistrict];

    if (!abbreviation) return;

    if (!result[abbreviation]) {
      result[abbreviation] = [];
    }

    const newEntries =
      district === null || district === '전 지역'
        ? abbreviation === '온라인'
          ? ['온라인']
          : WARD_LIST[abbreviation]
        : [district];

    result[abbreviation] = [
      ...new Set([...result[abbreviation], ...newEntries]),
    ];
  });

  return result;
};

export const formatDate = (dateString: string | undefined) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

export const classOutputDataProcess = async (
  data: classCreateData,
  step: number,
  setProcessedClassDataHandler: (data: IprocessedDraft) => void,
) => {
  switch (step) {
    case 0:
      const {
        title,
        difficultyLevel,
        genres,
        lectureMethod,
        lessonType,
        min,
        max,
      } = data;

      const images = await uploadImageFilesWithFallback(
        data.images,
        'lectures',
      );

      const classLevel =
        difficultyLevel === '상급'
          ? '상'
          : difficultyLevel === '중급'
          ? '중'
          : '하';

      const newLectureMethod =
        lectureMethod === '원데이 레슨' ? '원데이' : '정기';

      const isGroup = lessonType === '그룹레슨';

      const minCapacity = isGroup ? min.value : undefined;

      const maxCapacity = isGroup ? max.value : undefined;

      const { newGenres, etcGenres } = categorizeGenres(genres);

      setProcessedClassDataHandler({
        isGroup,
        min: min.value,
        max: max.value,
      });

      return {
        images,
        title,
        genres: newGenres,
        etcGenres,
        difficultyLevel: classLevel,
        lectureMethod: newLectureMethod,
        isGroup,
        minCapacity,
        maxCapacity,
      };

    case 1:
      const { notification, introduction, curriculum } = data;

      curriculum.deletedImages.forEach(
        async ({ src }) => await deleteImage({ imageUrl: src }),
      );

      if (curriculum.clear && curriculum.deletedImages.length > 0) {
        curriculum.clear();
      }

      return {
        notification,
        introduction,
        curriculum: curriculum.content,
      };
    case 2:
      const {
        holidays,
        classRange,
        duration,
        schedules,
        reservationComment,
        reservationDeadline,
      } = data;

      return {
        holidays,
        startDate: classRange.startDate,
        endDate: classRange.endDate,
        duration,
        schedules,
        reservationComment,
        reservationDeadline,
      };
    case 3:
      const {
        detail,
        address,
        locationConsultative,
        regions,
        locationDescription,
      } = data;

      const location = {
        detailAddress: detail,
        address: address?.roadAddr,
        buildingName: address?.bdNm,
      };

      if (locationConsultative) {
        return {
          regions: reqRegions(regions),
          locationDescription,
          location: null,
        };
      }

      return {
        location,
        locationDescription,
        regions: [],
      };

    case 4:
      const { classPrice, max: priceMax } = data;

      return {
        maxCapacity: priceMax.value,
        price: classPrice,
      };
  }
};

export const classCreate = async (id: number) => {
  const { location, temporaryLecture, schedules } = await getClassDraft(id);

  const {
    temporaryLectureToRegion,
    lectureMethod,
    isGroup,
    startDate,
    endDate,
    temporaryLecturenotification,
    temporaryLectureToDanceGenre,
    temporaryLectureImage,
    title,
    introduction,
    curriculum,
    duration,
    difficultyLevel,
    maxCapacity,
    minCapacity,
    reservationDeadline,
    reservationComment,
    price,
    temporaryLectureHoliday,
    locationDescription,
    temporaryLectureCouponTarget,
  } = temporaryLecture;

  const isLocationConfirmed = temporaryLectureToRegion.length > 0;

  const { newGenres, etcGenres } = categorizeGenres(
    temporaryLectureToDanceGenre.map(
      ({ danceCategory }) => danceCategory.genre,
    ),
  );

  const images = temporaryLectureImage.map(({ imageUrl }) => imageUrl);

  const data = {
    regions: isLocationConfirmed
      ? temporaryLectureToRegion.map(
          ({ region }) => region.administrativeDistrict + ' ' + region.district,
        )
      : [],
    location: isLocationConfirmed
      ? {}
      : {
          address: location?.address,
          detailAddress: location?.detailAddress,
          buildingName: location?.buildingName,
        },
    lectureType: 'dance',
    lectureMethod: lectureMethod?.name,
    isGroup,
    startDate,
    endDate,
    notification: temporaryLecturenotification.notification,
    genres: newGenres,
    etcGenres,
    images,
    title,
    introduction,
    curriculum,
    duration,
    difficultyLevel,
    maxCapacity,
    minCapacity,
    reservationDeadline,
    reservationComment,
    price,
    locationDescription,
    holidays: temporaryLectureHoliday.map(({ holiday }) => holiday),
    coupons: temporaryLectureCouponTarget.map(
      ({ lectureCouponId }) => lectureCouponId,
    ),
    schedules: schedules?.map((schedule) => {
      if ('date' in schedule) {
        return {
          ...schedule,
          date: new Date(schedule.date),
        };
      }
      return schedule;
    }),
  };

  await createClass(data);
}; //스프레드 안쓰고 일단 꺼냈음
