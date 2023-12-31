import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { accessTokenReissuance } from '@/lib/apis/userApi';
import { createCouponUtils } from '@/utils/createCoupon';
import CouponOption from '@/components/Coupon/CouponOption/CouponOption';
import { CouponData, createCoupon } from '@/types/coupon';

interface CouponCreatorProps {
  changeCouponList: (couponOption: createCoupon) => void;
  isCouponSectionOpen: boolean;
}

const CouponCreator = ({
  isCouponSectionOpen,
  changeCouponList,
}: CouponCreatorProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
    watch,
    trigger,
    reset,
    clearErrors,
  } = useForm<CouponData>();

  const onValid = async (data: CouponData) => {
    try {
      if (
        !window.confirm(`쿠폰을 생성을 완료 하겠습니까?
      
      ** 추후 마이페이지 > 쿠폰/패스권 에서 수정 가능 합니다. **
      `)
      ) {
        return;
      }

      const resData = await createCouponUtils(data);
      resData.lectureCouponTarget = data.lectureIds;

      reset();
      toast.success('쿠폰 생성 완료');
      changeCouponList(resData);
    } catch (error) {
      if (error instanceof Error && error.message.includes('401')) {
        await accessTokenReissuance();
        await onValid(data);
      } else {
        toast.error('쿠폰 생성 실패, 잠시후 다시 시도해주세요.');
        console.error(error);
      }
    }
  };

  const invalid = (data: FieldErrors<CouponData>) => {
    Object.values(data).forEach(({ message }) => {
      toast.error(message);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onValid, invalid)}
      className={`${!isCouponSectionOpen ? 'hidden' : ''} relative`}
    >
      <CouponOption
        register={register}
        control={control}
        getValues={getValues}
        setValue={setValue}
        watch={watch}
        errors={errors}
        trigger={trigger}
        clearErrors={clearErrors}
      />
      <button className="absolute bottom-0 right-5 h-7 w-[5.375rem] rounded-md bg-sub-color1 text-white">
        생성하기
      </button>
    </form>
  );
};

export default CouponCreator;
