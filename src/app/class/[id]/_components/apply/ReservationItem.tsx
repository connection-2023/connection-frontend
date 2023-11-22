import { IDateTime } from '@/types/class';
import { ClearSVG } from '@/icons/svg';

interface ReservationItemProps extends IDateTime {
  lectureScheduleId: number;
  countUpdate: (id: number, newVal: number) => void;
  onRemove: () => void;
}

const ReservationItem = ({
  lectureScheduleId,
  dateTime,
  space,
  count,
  onRemove,
  countUpdate,
}: ReservationItemProps) => {
  const remainSpace = space.total - space.current;

  const onClickUp = () => {
    if (count < remainSpace) {
      countUpdate(lectureScheduleId, count + 1);
    }
  };

  const onClickDown = () => {
    if (count > 1) {
      countUpdate(lectureScheduleId, count - 1);
    }
  };

  return (
    <div className="w-full border-y border-solid border-sub-color1">
      <div className="mt-2 flex justify-between text-sm">
        <p>{dateTime}</p>
        <ClearSVG
          onClick={onRemove}
          className="cursor-pointer fill-gray-500"
          width={18}
          height={18}
        />
      </div>
      <div className="my-3 flex items-baseline justify-between text-base font-medium">
        <div className="flex items-center text-sm text-gray-100">
          <CountButton onClick={onClickDown} aria-label="인원 감소">
            -
          </CountButton>
          <span className="flex h-[31px] w-[34px] items-center justify-center border-y border-solid border-gray-500">
            {count}
          </span>
          <CountButton onClick={onClickUp} aria-label="인원 증가">
            +
          </CountButton>
          <span className="ml-1.5">명</span>
        </div>
        <p className="text-sm text-gray-500">잔여자리: {remainSpace}명</p>
      </div>
    </div>
  );
};

const CountButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    className="h-[31px] w-[35px] border border-solid border-gray-500 bg-gray-900 text-gray-500"
    onClick={onClick}
  >
    {children}
  </button>
);

export default ReservationItem;
