'use client';
import { useState } from 'react';
import { LikeSVG } from '@/icons/svg';
import { postReviewLikes, deleteReviewLikes } from '@/lib/apis/classApis';
import Review from './Review';
import Profile from '../ProfileImage/ProfileImage';

interface UserReviewProps {
  src: string | null;
  nickname: string;
  average: number;
  content: string;
  title: string;
  date: string;
  count: number;
  isLike: boolean;
  reviewId: number;
}

const UserReview = ({
  src,
  nickname,
  average,
  content,
  date,
  title,
  count,
  isLike,
  reviewId,
}: UserReviewProps) => {
  const [liked, setLiked] = useState(isLike);
  const [likeCount, setLikeCount] = useState(count);

  const style = liked
    ? 'fill-sub-color1'
    : 'fill-gray-500 hover:fill-sub-color1';

  const handleLike = async () => {
    if (liked) {
      await deleteReviewLikes(reviewId);
      if (count > 0) {
        setLikeCount((prev) => prev - 1);
      }
    } else {
      await postReviewLikes(reviewId);
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="w-full rounded-md border-b border-solid border-gray-700 text-sm shadow-float">
      <div className="flex w-full justify-between p-[0.8rem]">
        <div className="mr-1.5 flex flex w-[34px] items-center">
          <Profile size="small" nickname={nickname} src={src} label={false} />
        </div>
        <div className="flex flex-col">
          <p>{nickname}</p>
          <Review average={average} size="small" />
        </div>

        <div className="flex h-fit w-full flex-nowrap items-baseline items-baseline justify-end whitespace-nowrap text-gray-500">
          <span className="gray-300">수강일 {date}</span>
          <button className="ml-3 box-border h-6 cursor-pointer rounded-md border border-solid border-gray-700 px-1.5 text-sm font-normal hover:text-gray-100">
            신고
          </button>
        </div>
      </div>

      <p className="mb-2 px-[0.8rem] text-sm">{content}</p>
      <div className="flex items-center justify-between border-t border-solid border-gray-700 p-[0.8rem]">
        <p className="text-gray-300">{title}</p>
        <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-500">
          <button onClick={handleLike}>
            <LikeSVG width="15" height="14" className={style} />
          </button>
          {likeCount}
        </p>
      </div>
    </div>
  );
};

export default UserReview;
