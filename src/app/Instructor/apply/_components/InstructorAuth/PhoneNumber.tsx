import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Label from './Label';
import { Verification } from '@/types/types';

interface PhoneNumberProps {
  changeVerification: (key: keyof Verification, value: boolean) => void;
  verification: boolean;
  defaultValue?: string;
}

const PhoneNumber = ({
  changeVerification,
  verification,
  defaultValue,
}: PhoneNumberProps) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue('phoneNumber', defaultValue);
    }
  }, [defaultValue, setValue]);

  return (
    <li className="flex items-center ">
      <Label htmlFor="phoneNumber" isNormal={true}>
        휴대폰 번호
        <span className="text-sub-color1">*</span>
      </Label>
      <input
        type="number"
        {...register('phoneNumber', {
          required: '휴대폰 번호',
          validate: {
            isVerified: () => {
              if (!verification) return '휴대폰 번호';
            },
          },
        })}
        id="phoneNumber"
        className={`h-7 w-full max-w-[24.75rem] rounded-md px-2 py-1 outline outline-1 outline-gray-500
focus:outline-sub-color1`}
      />
      <button
        className={`ml-4 flex h-7 w-28 items-center justify-center whitespace-nowrap rounded-md px-2 py-1 text-white ${
          verification ? 'bg-gray-500' : 'bg-black'
        }`}
        disabled={verification}
        onClick={() => changeVerification('phoneNumber', true)} //추후 수정 예정
      >
        인증번호 전송
      </button>
    </li>
  );
};

export default PhoneNumber;
