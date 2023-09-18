import { ClearSVG } from '@/../public/icons/svg';
import { DateTime } from '@/types/class';

interface ReservationItemProps extends DateTime {
  countUpdate: (newVal: number) => void;
  onRemove: () => void;
}

const ReservationItem = ({
  date,
  space,
  count,
  onRemove,
  countUpdate,
}: ReservationItemProps) => {
  const remainSpace = space.total - space.current;

  const onClickUp = () => {
    if (count < remainSpace) {
      countUpdate(count + 1);
    }
  };

  const onClickDown = () => {
    if (count > 1) {
      countUpdate(count - 1);
    }
  };

  return (
    <div className="w-full border-y border-solid border-sub-color1">
      <div className="mt-2 flex justify-between text-sm">
        <p>{date}</p>
        <ClearSVG
          onClick={onRemove}
          className="cursor-pointer"
          width={18}
          height={18}
        />
      </div>
      <div className="my-3 flex items-baseline justify-between text-base font-medium">
        <div className="text-sub-color3 flex items-center text-sm">
          <CountButton onClick={onClickDown}>-</CountButton>
          <span className="border-sub-color2 flex h-[31px] w-[34px] items-center justify-center border-y border-solid">
            {count}
          </span>
          <CountButton onClick={onClickUp}>+</CountButton>명
        </div>
        <p className="text-sub-color2 text-sm">잔여자리: {remainSpace}명</p>
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
    className="border-sub-color2 text-sub-color2 h-[31px] w-[35px] border border-solid bg-[#F5F5F5F5]"
    onClick={onClick}
  >
    {children}
  </button>
);

export default ReservationItem;