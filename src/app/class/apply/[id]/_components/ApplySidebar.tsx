'use client';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ArrowDownSVG } from '@/icons/svg';
import { postPaymentInfo } from '@/lib/apis/paymentApis';
import { usePaymentStore } from '@/store';
import ApplyButton from '@/components/Button/ApplyButton';

interface ApplySidebarProps {
  postId: string;
  title: string;
  price: number;
}

const ApplySidebar = ({ postId, title, price }: ApplySidebarProps) => {
  const [participants, setParticipants] = useState(0);
  const totalPrice = price * participants;
  const applyClass = usePaymentStore((state) => state.applyClass);
  const applicant = usePaymentStore((state) => state.applicant);
  const paymentWidget = usePaymentStore((state) => state.paymentWidget);
  const paymentMethodsWidget = usePaymentStore(
    (state) => state.paymentMethodsWidget,
  );

  useEffect(() => {
    if (applyClass) {
      const newParticipants = applyClass.reduce(
        (sum, schedule) => sum + schedule.participants,
        0,
      );
      if (participants !== newParticipants) {
        setParticipants(newParticipants);
      }
    }
  }, [JSON.stringify(applyClass)]);

  useEffect(() => {
    if (paymentMethodsWidget === null) {
      return;
    }

    paymentMethodsWidget.updateAmount(totalPrice);
  }, [participants, paymentWidget]);

  const handlePayment = async () => {
    if (!applyClass) {
      toast.error('하나 이상의 클래스를 추가해주세요!');
      return;
    }

    if (!applicant) {
      toast.error('예약자 정보를 입력해주세요!');
      return;
    }

    const isAllFilled = Object.entries(applicant).every(([key, value]) => {
      if (key === 'requests') {
        return true;
      }
      return value;
    });

    if (!isAllFilled) {
      toast.error('예약자 정보를 입력해주세요!');
      return;
    }

    const { representative, phoneNumber, requests } = applicant;

    const paymentData = {
      lectureId: postId,
      orderName: title,
      orderId: nanoid(),
      lectureSchedules: applyClass,
      price: totalPrice,
      representative,
      phoneNumber,
      requests,
    };

    try {
      const paymentInfo = await postPaymentInfo(paymentData);
      const { orderId, orderName } = paymentInfo;
      if (orderId && orderName) {
        await paymentWidget?.requestPayment({
          orderId: orderId,
          orderName: orderName,
          customerName: representative,
          customerEmail: '',
          successUrl: `${window.location.origin}/class/apply-complete`,
          failUrl: `${window.location.origin}/fail`,
        });
      } else {
        toast.error(paymentInfo);
      }
    } catch (error) {
      if (error instanceof Error && error.message) {
        toast.error(error.message);
      }
    }
  };

  return (
    <section className="sticky top-20 mt-14 flex flex-col whitespace-pre-line break-keep text-sm text-gray-100">
      <h4 className="text-lg font-bold">결제 금액</h4>
      <ul className="mb-5 mt-6 flex flex-col gap-3 border-b border-solid border-gray-500 pb-[0.81rem]">
        <li className="flex items-center justify-between">
          주문 금액 <span>{totalPrice.toLocaleString()}원</span>
        </li>
        <li className="flex items-center justify-between pl-4 text-gray-300">
          ㄴ 쿠폰사용 <span>30,000원</span>
        </li>
      </ul>

      <div className="mb-2 flex items-center justify-between font-bold">
        <p>최종 결제 금액</p>
        <span className="text-2xl text-black">
          {totalPrice.toLocaleString()}원
        </span>
      </div>

      <ul className="gap-2">
        <Agreement title="개인정보 제3자 제공고지" detail=" " />
        <Agreement title="전자상거래 구매안전 서비스 안내" detail=" " />
      </ul>
      <p className="mb-4 mt-[1.31rem] font-bold">
        상기 필수약관을 확인하였으며 결제에 동의합니다.
      </p>
      <ApplyButton label="결제하기" onClick={handlePayment} />
    </section>
  );
};

export default ApplySidebar;

interface AgreementProps {
  title: string;
  detail: string;
}

const Agreement = ({ title, detail }: AgreementProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="flex items-center">
        <p>{title}</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <ArrowDownSVG
            className={`fill-gray-500 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </li>
      {isOpen && (
        <div className="max-h-24 overflow-y-auto">
          개인정보 제3자 제공고지에 대한 자세한 내용...
        </div>
      )}
    </>
  );
};
