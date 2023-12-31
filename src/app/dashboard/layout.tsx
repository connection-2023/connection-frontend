import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connection | 대시보드',
  description: 'Connection 강사 대시보드',
};

export default async function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto mb-20 grid w-full auto-rows-max grid-cols-1 bg-main-color-transparent pb-12 md:grid-cols-2 md:gap-4 md:px-[2.25rem] xl:grid-cols-4">
      {children}
    </main>
  );
}
