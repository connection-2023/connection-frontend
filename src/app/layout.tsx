import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Footer from '@/app/_components/Footer';
import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Connection',
  description: 'Generated by Connection',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
