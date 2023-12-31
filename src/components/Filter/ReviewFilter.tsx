import { useState, useEffect } from 'react';
import FilterModal from './FilterModal';
import Rating from '../Review/Rating';

interface IReviewFilterProps {
  updateFilterOption: (label: string, option: number) => void;
  filterOption: number;
}

const ReviewFilter = ({
  filterOption,
  updateFilterOption,
}: IReviewFilterProps) => {
  const [rate, setRate] = useState<number>(filterOption);
  const label = '평점';

  useEffect(() => {
    setRate(filterOption);
  }, [filterOption]);

  const handleRate = (value: number) => {
    setRate(value);
  };

  const onReset = () => {
    setRate(0);
    updateFilterOption(label, 0);
  };

  const onApply = () => {
    updateFilterOption(label, rate);
  };

  return (
    <FilterModal label={label} onReset={onReset} onApply={onApply}>
      <Rating rate={rate} handleRate={handleRate} />
    </FilterModal>
  );
};

export default ReviewFilter;
