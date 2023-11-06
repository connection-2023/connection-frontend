'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { CloseSVG } from '@/icons/svg';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const overlayRef = React.useRef(null);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;

    router.back();
  };

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed bottom-0 left-0 right-0 top-0 z-modal mx-auto bg-black/60"
      onClick={(e) => {
        if (overlayRef.current !== e.target) return;

        router.back();
      }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-end">
          <button onClick={() => router.back()}>
            <CloseSVG
              width={24}
              height={24}
              className="stroke-gray-500 stroke-2"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;