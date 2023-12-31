import React from 'react';
import { EditSVG } from '@/icons/svg';
import { getReservationDetails } from '@/lib/apis/serverApis/reviewApis';
import WriteReview from './_components/WriteReview';
import RouterModal from '@/components/Modal/RouterModal';

const writeReviewModal = async () => {
  const classLists = await getReservationDetails();

  const classListsOption = classLists.map((classInfo) => ({
    value: classInfo,
    label: classInfo.lectureSchedule.lecture.title,
  }));

  return (
    <RouterModal>
      <main className="flex h-screen w-screen flex-col overflow-x-hidden sm:h-fit sm:w-[40rem]">
        <h1 className="flex items-center justify-center gap-2 border-b border-solid border-gray-700 px-7 py-4 text-lg font-semibold text-sub-color1 sm:justify-normal sm:pb-4">
          <EditSVG width="15px" height="15px" className="fill-sub-color1" />
          리뷰 작성하기({classLists.length})
        </h1>
        <WriteReview options={classListsOption} />
      </main>
    </RouterModal>
  );
};

export default writeReviewModal;
