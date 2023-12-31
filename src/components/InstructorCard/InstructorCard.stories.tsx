import { StoryObj, Meta } from '@storybook/react';
import InstructorCard from './InstructorCard';

const meta: Meta<typeof InstructorCard> = {
  title: 'Components/InstructorCard',
  component: InstructorCard,
  tags: ['autodocs'],
  argTypes: {
    imgURL: {
      description: '표시할 이미지들의 URL들이 담긴 배열',
    },
    name: {
      description: '강사 이름',
    },
    address: {
      description: '강의 지역',
    },
    teamAffiliation: {
      description: '강사 소속',
    },
    genres: {
      description: '댄스 장르',
    },
    average: {
      description: '강사 평점',
    },
    href: {
      description: '해당 카드 이동경로',
    },
  },
  args: {
    imgURL: [
      'https://img.freepik.com/free-photo/pretty-woman-practising-hip-hop-dance_107420-85008.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-photo/girl-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9249.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-photo/dance-time-stylish-men-and-woman-dancing-hip-hop-in-bright-clothes-on-green-background-at-dance-hall-in-neon-light_155003-16406.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-photo/two-beautiful-slender-girls-doing-dancing-and-gymnastics-in-the-dance-hall_1157-13817.jpg?size=626&ext=jpg',
      'https://img.freepik.com/free-photo/boy-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9262.jpg?size=626&ext=jpg',
    ],
    name: '이바다',
    address: ['서울 마포구'],
    teamAffiliation: '원밀리언즈',
    genres: ['방송댄스', '힙합', '탱고'],
    average: 3,
    href: '/',
  },
};

export default meta;
type Story = StoryObj<typeof InstructorCard>;

export const 기본: Story = {
  render: (args) => <InstructorCard {...args} />,
};
