import { AuthWelcomeSVG } from '@/../public/icons/svg';

const Welcome = ({ nickname }: { nickname: string }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-[1.31rem] py-4 font-semibold">
      <AuthWelcomeSVG className="mt-4" />

      <h2 className="mt-[0.88rem] text-2xl text-sub-color1">회원가입 완료</h2>
      <h3 className="mb-9 mt-2 text-base">{nickname}님, 환영합니다!</h3>
    </section>
  );
};

export default Welcome;