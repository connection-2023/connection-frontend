import Link from 'next/link';
import { TransFormSVG } from '@/icons/svg';
import useSession from '@/lib/useSession';

const ProfileMenu = ({ handleLogout }: { handleLogout: () => void }) => {
  const user = useSession();

  return (
    <ul className="absolute right-0 top-3 inline-flex w-[9.4375rem] select-none flex-col bg-white shadow-vertical">
      <li className="my-4 ml-4 flex overflow-hidden whitespace-nowrap font-bold">
        <p className="max-w-[7rem] truncate">{user?.nickname}</p>님
      </li>
      <li className="mb-3 ml-4">
        <Link href="/">마이 페이지</Link>
      </li>
      <li className="mb-3 ml-4">
        <Link href="/">관심 클래스</Link>
      </li>
      <li className="mb-4 ml-4">
        <Link href="/">예약 현황</Link>
      </li>

      <li className="border-t border-solid border-sub-color2 text-main-color">
        <button className="flex h-full w-full gap-1 py-4 pl-4">
          <TransFormSVG />
          강사 전환
          {/* 강사 상태 추후 변경 예정 */}
        </button>
      </li>

      <li className="bg-gray-200 text-sub-color2">
        <button
          onClick={handleLogout}
          className="h-full w-full py-2 pl-4 text-left hover:text-black"
        >
          로그아웃
        </button>
      </li>
    </ul>
  );
};

export default ProfileMenu;
