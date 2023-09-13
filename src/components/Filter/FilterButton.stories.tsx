import { StoryObj, Meta } from '@storybook/react';
import FilterButton from './FilterButton';
import DateFilter from './DateFilter';
import PriceFilter from './PriceFilter';
import ReviewFilter from './ReviewFilter';
import RegionFilter from './RegionFilter';

const meta: Meta<typeof FilterButton> = {
  title: 'Components/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: '평점',
    content: <ReviewFilter />,
  },
};

export default meta;
type Story = StoryObj<typeof FilterButton>;

export const Review: Story = {
  render: (args) => <FilterButton {...args} />,
};

export const Price: Story = {
  args: {
    label: '가격',
    content: <PriceFilter />,
  },
};

export const Date: Story = {
  args: {
    label: '지정날짜',
    content: <DateFilter />,
  },
};

export const Region: Story = {
  args: {
    label: '지역',
    content: <RegionFilter />,
  },
};
