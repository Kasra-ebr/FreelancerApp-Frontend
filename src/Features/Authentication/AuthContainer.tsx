import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOTP } from "../../Server/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState<number>(2);

  const { handleSubmit, register, getValues } = useForm();
  const {
    mutateAsync,
    isPending,
    data: otpResponse,
  } = useMutation({ mutationFn: getOTP });

  const sendOTPHandler = async (data) => {
    try {
      const {message} = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send OTP. Please try again."
      );
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={handleSubmit(sendOTPHandler)}
            setStep={setStep}
            register={register}
            setPhoneNumber={setPhoneNumber}
            isSendingOtp={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onReSendOtp={sendOTPHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
