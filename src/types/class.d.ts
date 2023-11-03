export interface ClassCardType {
  status: '모집중' | '마감임박' | '마감';
  date: string;
  title: string;
  imgURL: string[];
  location: string[];
  genre: string[];
  type: string[];
  time: string[];
  review?: { average: number; count: number };
  price: string;
  profile: { src?: string; nickname: string };
  selectedDates: Date[];
}

export interface Space {
  current: number;
  total: number;
}

export interface DateTime {
  date: string;
  space: Space;
  count: number;
}

export interface DayTimeList {
  day: string[];
  timeSlots: string[];
}

export interface IGetClassDrafts {
  id: string;
  updatedAt: string;
  title: null | string;
  step: null | string;
}

export interface IGetClassDraft {
  id: number;
  lecturerId: number;
  step: number | null;
  lectureTypeId?: number;
  lectureMethodId?: number;
  title?: string;
  introduction?: string;
  curriculum?: string;
  detailAddress?: string;
  duration?: number;
  difficultyLevel?: string;
  minCapacity?: number;
  maxCapacity?: number;
  reservationDeadline?: string;
  reservationComment?: string;
  price?: number;
  noShowDeposit?: number;
  reviewCount: number;
  stars: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  temporaryLecturenotification: { notification: string }[];
  temporaryLectureImage: { imageUrl: string }[];
  temporaryLectureCouponTarget: any[];
  temporaryLectureSchedule: {
    startDateTime: string;
    team: null;
    numberOfParticipants: number;
  }[];
  temporaryLectureToRegion: {
    region: {
      administrativeDistrict: string;
      district: string;
    };
  }[];
  temporaryLectureToDanceGenre: {
    name: null | string;
    danceCategory: {
      genre: string;
    };
  }[];
  temporaryLectureHoliday: {
    holiday: string;
  }[];
}

export interface IUpdateClassDraft {
  lectureId: number | string;
  step: number;
  regions?: string[];
  lectureType?: string;
  lectureMethod?: string;
  notification?: string;
  genres?: string[];
  etcGenres?: string[];
  images?: string[];
  title?: string;
  introduction?: string;
  curriculum?: string;
  detailAddress?: string;
  duration?: number;
  difficultyLevel?: string;
  minCapacity?: number;
  maxCapacity?: number;
  reservationDeadline?: string;
  reservationComment?: string;
  price?: number;
  noShowDeposit?: number;
  schedules?: string[];
  regularSchedules?: {
    [key: string]: string[];
  };
  holidays?: string[];
  coupons?: number[];
}

export interface IprocessedDraft {
  id: number;
  lecturerId: number;
  step: number | null;
  lectureTypeId?: number;
  lectureMethodId?: number;
  title?: string;
  introduction?: string;
  curriculum?: string;
  detailAddress?: string;
  duration?: number;
  difficultyLevel?: string | null;
  minCapacity?: number;
  maxCapacity?: number;
  reservationDeadline?: string;
  reservationComment?: string;
  price?: number;
  noShowDeposit?: number;
  reviewCount: number;
  stars: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  temporaryLecturenotification: { notification: string }[];
  temporaryLectureImage: { imageUrl: string }[];
  temporaryLectureCouponTarget: any[];
  temporaryLectureSchedule: {
    startDateTime: string;
    team: null;
    numberOfParticipants: number;
  }[];
  temporaryLectureToRegion: {
    region: {
      administrativeDistrict: string;
      district: string;
    };
  }[];
  temporaryLectureToDanceGenre: string[];
  temporaryLectureHoliday: {
    holiday: string;
  }[];
}

export interface classCreateData {
  title: string;
  images: {
    file: File;
    imageUrl: string;
  }[];
  genres: string[];
  classSize: {
    min: number;
    max: number;
  };
  lectureMethod: string;
  lessonType: string;
  difficultyLevel: string;
}
