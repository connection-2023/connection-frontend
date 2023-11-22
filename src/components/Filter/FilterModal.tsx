import { useState, useEffect, useRef } from 'react';
import { ArrowUpSVG, ArrowDownSVG } from '@/icons/svg';
import Button from '../Button/Button';
import ResetButton from '../Button/ResetButton';

interface IFilterModal {
  label: string;
  children: React.ReactNode;
  onReset: () => void;
  onApply: () => void;
}

const FilterModal = ({ label, children, onReset, onApply }: IFilterModal) => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      )
        setIsOpened(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const onClickLabel = () => {
    setIsOpened(!isOpened);
  };

  const onClickApply = () => {
    onApply();
    setIsOpened(false);
  };

  return (
    <div ref={ref} className="relative whitespace-nowrap text-sm">
      <button
        className="box-border flex items-center rounded-[0.625rem] border border-solid border-sub-color1 py-1 pl-3 pr-1 font-medium"
        onClick={onClickLabel}
      >
        {label}
        {isOpened ? (
          <ArrowUpSVG width="34" height="34" className="fill-sub-color1" />
        ) : (
          <ArrowDownSVG width="34" height="34" className="fill-sub-color1" />
        )}
      </button>
      {isOpened && (
        <div className="absolute z-10 mt-[0.19rem] flex w-max flex-col rounded-[5px] border border-solid border-gray-500 bg-white">
          {children}
          <div className="box-border flex justify-between border-t border-solid border-gray-500 px-[0.94rem] py-[0.69rem] font-bold">
            <ResetButton onClick={onReset}>초기화</ResetButton>
            <Button color="primary" size="small" onClick={onClickApply}>
              적용
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
