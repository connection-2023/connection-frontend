'use client';
import Like from '@/components/Like/Like';
import OptionButtons from '@/components/Button/OptionButtons';

interface OptionButtonProps {
  lecturerId: number;
  postId: string;
  isLike: boolean;
  title: string;
}

const OptionButton = ({
  lecturerId,
  postId,
  isLike,
  title,
}: OptionButtonProps) => {
  return (
    <>
      <Like type="class" id={postId} isLiked={isLike} />
      <OptionButtons lecturerId={lecturerId} title={title} mode="class" />
    </>
  );
};

export default OptionButton;
