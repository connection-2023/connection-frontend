import Sidebar from '../../_components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connection | 회원 마이페이지',
  description: 'Connection 회원 마이페이지',
};

export default async function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid h-max w-full flex-1 grid-cols-1 justify-between gap-x-4 pb-20 pt-4 xl:grid-cols-[1fr,3fr] xl:px-5">
      <Sidebar />
      {children}
    </section>
  );
}
