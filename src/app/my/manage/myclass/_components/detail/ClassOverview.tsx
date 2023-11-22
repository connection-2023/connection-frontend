import { dummyClassRoster } from '@/constants/dummy';
import { CommentSVG } from '@/icons/svg';
import ProfileImage from '@/components/ProfileImage/ProfileImage';

const ClassOverview = () => {
  return (
    <aside className="flex h-fit w-[19.5625rem] flex-col whitespace-nowrap rounded-lg bg-white shadow-float shadow-float">
      <div className="flex h-[5.13rem] divide-x  divide-solid divide-gray-700 border-b border-solid border-gray-700 py-[0.69rem] text-sm font-semibold text-gray-100">
        <div className="flex w-1/2 flex-col items-center justify-center">
          진행한 클래스
          <span className="text-xl font-bold text-sub-color1">3회</span>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center">
          총 클래스
          <span className="text-xl font-bold text-gray-100">20회</span>
        </div>
      </div>
      <div className="flex flex-col px-[1.31rem] py-[0.81rem]">
        <h3 className="flex items-center justify-between text-lg font-semibold">
          전체 수강생 리스트
          <button
            aria-label="전체 채팅"
            className="flex h-[1.75rem] w-[5.5625rem] items-center justify-center gap-[0.13rem] rounded-[0.3125rem] bg-black text-sm text-white"
          >
            <CommentSVG width="16" height="17" fill="white" />
            전체 채팅
          </button>
        </h3>
        <ul className="flex w-full flex-col gap-4 py-4 ">
          {dummyClassRoster.map((item) => (
            <ClassRoster
              key={item.id}
              id={item.id}
              src={item.src}
              nickname={item.nickname}
              applyCount={item.applyCount}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ClassOverview;

interface IClassRoster {
  id: number;
  src: string | null;
  nickname: string;
  applyCount: number;
}

const ClassRoster = ({ id, src, nickname, applyCount }: IClassRoster) => {
  return (
    <li className="flex w-full items-center justify-between text-sm font-medium">
      <div className="flex cursor-pointer items-center">
        <ProfileImage src={src} label={false} size="small" />
        <span className="w-25 ml-[0.69rem] truncate">{nickname}</span>
      </div>
      <div className="flex items-center gap-4 text-sub-color1">
        <span>{applyCount}회 신청</span>
        <CommentSVG
          width="29"
          height="30"
          fill="black"
          className="cursor-pointer"
        />
      </div>
    </li>
  );
};
