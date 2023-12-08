import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { ToastContainer } from 'react-toastify';
import {
  getInstructorProfile,
  getMyProfile,
} from '@/lib/apis/serverApis/userApi';
import { useUserStore } from '@/store/userStore';
import ControlOptions from './_components/ControlOptions';
import Footer from './_components/Footer';
import Header from './_components/Header/Header';
import UserProfileLinks from './_components/Header/UserProfileLinks';
import UserStoreInitializer from './_components/Header/UserStoreInitializer';
import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/toastify.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Connection',
  description: 'Generated by Connection',
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const cookieStore = cookies();
  const user = cookieStore.get('userAccessToken')?.value;
  const lecturer = cookieStore.get('lecturerAccessToken')?.value;
  let authUser = null;
  let userType = null;

  try {
    if (user) {
      authUser = await getMyProfile();
      userType = 'user';
      useUserStore.setState({ authUser, userType: 'user' });
    }

    if (lecturer) {
      authUser = await getInstructorProfile();
      userType = 'lecturer';
      useUserStore.setState({ authUser, userType: 'lecturer' });
    }

    if (!user && !lecturer) {
      useUserStore.setState({ authUser: null, userType: null });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }

  return (
    <html lang="ko">
      <body
        className={`${inter.className} mx-auto flex min-h-screen max-w-desktop flex-col`}
      >
        <UserStoreInitializer authUser={authUser} userType={userType} />
        <Header>
          <UserProfileLinks />
        </Header>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <main className="relative flex-1">
          {children}
          {modal}
          <div className="fixed bottom-24 right-8">
            <ControlOptions />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
