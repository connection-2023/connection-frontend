'use client';
import { useState } from 'react';
import { dummyClassList } from '@/constants/dummy';
import ClassList from './ClassList';

const ClassListView = ({ onItemClick }: { onItemClick: () => void }) => {
  const [activeTab, setActiveTab] = useState('progress');

  return (
    <section className="col-span-2 h-full w-full flex-col rounded-lg bg-white p-6 shadow-float">
      <div className="mb-8 flex gap-[2.13rem] text-2xl text-gray-500">
        <h1
          onClick={() => setActiveTab('progress')}
          className={`${
            activeTab === 'progress'
              ? 'cursor-pointer font-bold text-black'
              : 'cursor-pointer'
          }`}
        >
          모집/진행중
        </h1>
        <h1
          onClick={() => setActiveTab('closed')}
          className={`${
            activeTab === 'closed'
              ? 'cursor-pointer font-bold text-black'
              : 'cursor-pointer'
          }`}
        >
          마감된 클래스
        </h1>
      </div>
      <ul className="flex flex-col gap-4">
        {dummyClassList.map((item) => (
          <ClassList
            key={item.id}
            status={item.status}
            date={item.date}
            title={item.title}
            count={item.count}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default ClassListView;
