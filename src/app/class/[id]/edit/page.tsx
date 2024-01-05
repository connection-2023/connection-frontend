'use client';
import { parse, format, parseISO } from 'date-fns';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  ANNOUNCEMENT,
  CLASS_OPERATION_PLAN,
  QUILL_DEFAULT_VALUE,
} from '@/constants/constants';
import {
  LocationSVG,
  TimeSVG,
  GroupSVG,
  LevelSVG,
  GenreSVG,
} from '@/icons/svg';
import { getOriginalClassInfo, updateClassData } from '@/lib/apis/classApis';
import { deleteImage } from '@/lib/apis/imageApi';
import { accessTokenReissuance } from '@/lib/apis/userApi';
import { useUserStore } from '@/store/userStore';
import { uploadImageFilesWithFallback } from '@/utils/apiDataProcessor';
import createOptions from '@/utils/generateStudentCountOptions';
import {
  formatLocationToString,
  formatGenreToString,
} from '@/utils/parseUtils';
import EditClassRange from './_components/EditClassRange';
import EditDayoff from './_components/EditDayoff';
import SideNavbar from './_components/SideNavbar';
import NumberSelect from '../../create/_components/NumberSelect';
import ScheduleView from '@/components/ScheduleView/ScheduleView';
import CustomEditor from '@/components/TextArea/CustomEditor';
import TextAreaSection from '@/components/TextArea/TextAreaSection';
import UploadImage from '@/components/UploadImage/UploadImage';
import ValidationMessage from '@/components/ValidationMessage/ValidationMessage';
import {
  IClassEditData,
  IClassEditFormData,
  IClassEditRequest,
} from '@/types/class';
import { ErrorMessage, FetchError } from '@/types/types';

const borderStyle = 'border-b border-solid border-gray-700';
const h2Style = 'mb-4 flex items-center text-lg font-bold';
const h3Style = 'flex gap-1.5 text-sm';

const ClassEditPage = () => {
  const [initData, setInitData] = useState<IClassEditData | undefined>();
  const [invalidData, setInvalidData] = useState<null | ErrorMessage[]>(null);
  const path = usePathname();
  const postId = path.split('/')[2];
  const formMethods = useForm<IClassEditFormData>();
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const watchClassRange = watch('classRange');
  const authUser = useUserStore((state) => state.authUser);
  const userType = useUserStore((state) => state.userType);

  useEffect(() => {
    const classOriginalData = async () => {
      const data = await getOriginalClassInfo(postId);
      console.log(data);
      setInitData(data);
    };
    classOriginalData();
  }, [postId]);

  if (!initData) return null;
  //   강사 id랑 글 강사 Id 확인하기
  //   if (userType !== 'lecturer' && authUser?.id !== initData.lecturer.id)
  //     return null;

  const closeValidationMessage = () => {
    setInvalidData(null);
  };

  const onSubmit = async (data: IClassEditFormData) => {
    let reqData: IClassEditRequest;
    try {
      const { images, curriculum, maxCapacity } = data;

      curriculum.deletedImages.forEach(
        async ({ src }) => await deleteImage({ imageUrl: src }),
      );

      reqData = {
        //...data,
        images: await uploadImageFilesWithFallback(images, 'lectures'),
        curriculum: curriculum.content,
        // maxCapacity: maxCapacity.value, 백엔드 500 오류 수정되면 주석 해제
      };

      await updateClassData(postId, reqData);

      toast.success('수정 완료');
    } catch (error) {
      if (error instanceof Error) {
        const fetchError = error as FetchError;
        if (fetchError.status === 401) {
          try {
            await accessTokenReissuance();
            await updateClassData(postId, reqData!);
          } catch (error) {
            console.error(error);
          }
        } else {
          toast.error('잘못된 요청입니다!');
        }
      }
    }
  };

  const invalid = (data: Record<string, any>) => {
    const invalidList = Object.entries(data).map(([key, value]) => ({
      key,
      ...value,
    }));

    setInvalidData(invalidList);
  };

  const {
    title,
    difficultyLevel,
    isGroup,
    duration,
    price,
    maxCapacity,
    introduction,
    curriculum,
    startDate,
    endDate,
    locationDescription,
    lectureToRegion,
    reservationDeadline,
    lectureToDanceGenre,
    lectureNotification,
    lectureImage,
    reservationComment,
  } = initData?.lecture;
  const { notification } = lectureNotification;
  const dateRange = {
    startDate: format(parseISO(startDate), 'yyyy-MM-dd'),
    endDate: format(parseISO(endDate), 'yyyy-MM-dd'),
  };

  const formatSchedules = () => {
    // 전체 기간에 맞게 클래스 일정 조정 예정
    return initData?.schedule;
  };

  return (
    <main className="border-box mx-auto mt-[1.38rem] box-border grid grid-cols-1 gap-x-12 px-4 md:grid-cols-[1fr_3fr] md:gap-x-5 xl:grid-cols-[1fr_2fr_1fr] xl:px-0">
      <section className="mb-4 flex w-full flex-col items-center border-b border-solid border-gray-500 md:col-span-2 xl:col-span-3">
        {/* 클래스 이미지 */}
        <div
          id="images"
          className="mb-5 flex h-[18rem] w-full justify-center px-10"
        >
          <Controller
            name="images"
            control={control}
            defaultValue={lectureImage}
            rules={{
              required: '이미지',
            }}
            render={({ field }) => (
              <UploadImage
                onChange={field.onChange}
                defaultImg={field.value}
                errors={errors.images}
              />
            )}
          />
        </div>

        <h1 className="relative flex w-full max-w-[40rem] px-4 text-lg font-bold md:justify-center">
          <p className="w-11/12 md:text-center">{title}</p>
        </h1>

        <hr className="mb-4 h-1 w-full max-w-[40rem] md:mb-6" />

        {/* 수정 불가 클래스 기본 정보 */}
        <div className="mb-4 grid w-full max-w-[40rem] grid-cols-2 gap-y-3.5 px-4 md:mb-7 md:flex md:flex-wrap md:justify-items-center md:gap-x-10 md:whitespace-nowrap">
          <h3 className={h3Style}>
            <LocationSVG />
            <span className="w-fit break-keep">
              {formatLocationToString(lectureToRegion)}
            </span>
          </h3>
          <h3 className={h3Style}>
            <GenreSVG />
            <span className="w-fit break-keep">
              {formatGenreToString(lectureToDanceGenre)}
            </span>
          </h3>

          <h3 className={h3Style}>
            <TimeSVG /> {duration}분
          </h3>
          <h3 className={h3Style}>
            <GroupSVG />
            {isGroup ? `그룹레슨 (${maxCapacity}인)` : '개인레슨'}
          </h3>
          <h3 className={h3Style}>
            <LevelSVG /> {difficultyLevel}
          </h3>
        </div>
      </section>

      {/* navbar */}
      <SideNavbar onClick={handleSubmit(onSubmit, invalid)} />

      <div>
        <FormProvider {...formMethods}>
          <div className="flex flex-col gap-8 py-12">
            {/* 공지사항 */}
            <TextAreaSection
              maxLength={200}
              dataName="notification"
              placeholder={ANNOUNCEMENT}
              defaultValue={notification}
              title="중요 공지사항을 입력해주세요"
            />

            {/* 운영계획 */}
            <TextAreaSection
              maxLength={500}
              dataName="introduction"
              defaultValue={introduction}
              placeholder={CLASS_OPERATION_PLAN}
              title="어떤 클래스를 운영할 계획 인가요?"
              height="h-40"
            />

            {/* 커리큘럼 */}
            <CustomEditor
              title="커리큘럼"
              dataName="curriculum"
              defaultValue={curriculum}
              height="652px"
              maxLength={3000}
              minLength={200}
              requiredMark={false}
            />
          </div>

          {/* 클래스 일정 및 시간 */}
          <section id="plan">
            <Controller
              name="classRange"
              control={control}
              defaultValue={dateRange}
              rules={{
                required: '전체 클래스 기간',
                validate: ({ startDate, endDate }) => {
                  const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
                  const isValidStartDate = dateFormat.test(startDate);
                  const isValidEndDate = dateFormat.test(endDate);

                  const parsedStartDate = parse(
                    startDate,
                    'yyyy-MM-dd',
                    new Date(),
                  );
                  const parsedEndDate = parse(
                    endDate,
                    'yyyy-MM-dd',
                    new Date(),
                  );

                  if (
                    !isValidStartDate ||
                    !isValidEndDate ||
                    !format(parsedStartDate, 'yyyy-MM-dd') === startDate ||
                    !format(parsedEndDate, 'yyyy-MM-dd') === endDate
                  ) {
                    return '올바른 클래스 기간';
                  }

                  return true;
                },
              }}
              render={({ field }) => (
                <div className={`${borderStyle} py-6`}>
                  <h2
                    id="classRange"
                    className={`${h2Style} ${
                      errors.classRange && 'animate-vibration text-main-color'
                    }`}
                  >
                    전체 클래스 기간을 설정해주세요
                  </h2>
                  <div className="flex gap-x-4">
                    <EditClassRange
                      defaultValue={field.value}
                      onChange={field.onChange}
                    />
                    <p className="flex items-center gap-x-2">
                      <TimeSVG /> {duration}분
                    </p>
                  </div>

                  {/* 추후 데이터 변경 필요 */}
                  <p className="mt-4 flex items-center gap-1.5 text-base">
                    <span className="h-[7px] w-[7px] rounded-full bg-sub-color1" />
                    월,수,금 15:00-16:00
                  </p>

                  {/* <div className="max-w-[37.4rem]">
                  <ScheduleView
                  maxCapacity={maxCapacity}
                  duration={duration}
                  lectureSchedule={formatSchedules()}
                  />
                </div> */}
                </div>
              )}
            />

            {/* 휴무일 */}
            <Controller
              name="holidays"
              control={control}
              defaultValue={{
                schedules: initData?.schedule,
                holidays: initData?.holidayArr,
              }}
              render={({ field }) => (
                <div className={`${borderStyle} py-6`}>
                  <h2 className={h2Style}>휴무일이 있나요?</h2>

                  <EditDayoff
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                </div>
              )}
            />

            {/* 신청 마감 시간 */}
            <Controller
              name="reservationDeadline"
              control={control}
              defaultValue={reservationDeadline}
              rules={{
                required: '신청 마감 시간',
                min: { value: 1, message: '올바른 마감 시간' },
              }}
              render={({ field }) => (
                <div className={`${borderStyle} py-6`}>
                  <h2
                    id="reservationDeadline"
                    className={`${h2Style} ${
                      errors.reservationDeadline &&
                      'animate-vibration text-main-color'
                    }`}
                  >
                    신청 마감 시간을 설정해주세요
                  </h2>
                  <div className="ml-[0.38rem] text-sm font-medium text-gray-100">
                    <span>수업 시작</span>
                    <input
                      type="number"
                      defaultValue={field.value}
                      onChange={(e) => {
                        field.onChange(Number(e.target.value));
                      }}
                      className="ml-[1.38rem] mr-[0.38rem] h-8 w-12 rounded-md border border-solid border-gray-500 px-[0.81rem] py-1 focus:outline-sub-color1"
                    />
                    <span>시간 전</span>
                  </div>
                </div>
              )}
            />

            {/* 예약시 유의사항 */}
            <Controller
              name="reservationComment"
              control={control}
              defaultValue={reservationComment}
              rules={{
                required: '예약 시 유의사항',
              }}
              render={({ field }) => (
                <div className={`${borderStyle} py-6`}>
                  <h2
                    id="reservationComment"
                    className={`${h2Style} ${
                      errors.reservationComment &&
                      'animate-vibration text-main-color'
                    }`}
                  >
                    예약시 유의사항
                  </h2>
                  <textarea
                    defaultValue={field.value}
                    onChange={field.onChange}
                    placeholder={`수강생이 클래스 신청시 예약 화면에서 보여지는 사항입니다. \n클래스를 시작하기 전 숙지해야 할 사항을 적어주세요`}
                    className="h-32 w-full resize-none whitespace-pre-wrap break-keep rounded-md border border-solid border-gray-700 p-2"
                  />
                </div>
              )}
            />

            {/* 진행 장소 설명 */}
            <div className="felx flex-col py-6">
              <Controller
                name="locationDescription"
                control={control}
                defaultValue={locationDescription}
                render={({ field }) => (
                  <TextAreaSection
                    placeholder="수업장소까지 가는 방법, 추천 교통편, 주차시설 유무 등에 대한 정보를 입력해주세요."
                    maxLength={500}
                    dataName="locationDescription"
                    defaultValue={field.value}
                    title="진행 장소 추가 설명"
                  />
                )}
              />
            </div>
          </section>

          {/* 가격 설정 */}
          <section
            id="price"
            className="whitespace-nowrap text-lg font-semibold"
          >
            <div className={`flex ${borderStyle} py-4`}>
              <p className="mr-10 w-28">총 클래스 횟수</p>
              <p>{initData.schedule.length}회</p>
            </div>

            <div className={`flex ${borderStyle} items-center py-4`}>
              <p className="mr-10 w-28">1회 최대 수강생</p>
              <Controller
                name="maxCapacity"
                control={control}
                defaultValue={{ value: maxCapacity, label: maxCapacity }}
                rules={{
                  required: '최대 수강생',
                }}
                render={({ field }) => (
                  <NumberSelect
                    instanceId="maxCapacity"
                    defaultValue={field.value}
                    onChange={field.onChange}
                    options={createOptions(maxCapacity, 100)}
                  />
                )}
              />
              <div className="ml-1">명</div>
            </div>

            <div className="mb-10 flex py-4">
              <p
                id="price"
                className={`mr-10 w-28 ${
                  errors.price && 'animate-vibration text-main-color'
                }`}
              >
                가격 설정
              </p>

              <Controller
                name="price"
                control={control}
                defaultValue={price}
                rules={{
                  required: '가격',
                  min: { value: 1, message: '올바른 가격' },
                }}
                render={({ field }) => (
                  <div className="ml-[0.38rem] text-gray-100">
                    <span>1회당</span>
                    <input
                      type="number"
                      className="ml-7 mr-1 h-8 w-24 rounded-md border border-solid border-gray-700 px-2 text-right focus:outline-sub-color1"
                      defaultValue={field.value}
                      onChange={field.onChange}
                    />
                    <span>원</span>
                  </div>
                )}
              />
            </div>
          </section>
        </FormProvider>
      </div>

      {/* 유효성 토스트 메세지 */}
      <ValidationMessage
        title="하기 값(들)을 확인해 주세요."
        closeModal={closeValidationMessage}
        invalidData={invalidData}
      />
    </main>
  );
};

export default ClassEditPage;