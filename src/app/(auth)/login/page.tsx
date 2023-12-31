import { ConnectionLogoSVG, AuthIconSVG } from '@/icons/svg';
import LoginButtons from './_components/LoginButtons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connection | 로그인 페이지',
  description: 'Connection 로그인 페이지',
};

const LoginPage = () => {
  return (
    <section className="mx-auto flex h-full w-full max-w-[25.5rem] flex-grow flex-col items-center rounded-md bg-white shadow-float">
      <AuthIconSVG className="mt-12 scale-90" />

      <h1 className="mt-1.5 text-lg font-semibold">
        즐거운 배움으로 이어주는 연결고리
      </h1>
      <ConnectionLogoSVG className="mt-4 w-80" />
      <div className="mt-16 pb-20">
        <p className="mb-5 text-lg font-normal text-gray-500">
          소셜로그인으로 간편하게 시작하기
        </p>

        <LoginButtons />
      </div>
    </section>
  );
};

export default LoginPage;
