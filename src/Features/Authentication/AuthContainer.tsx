import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOTP } from "../../Server/authServices";

export default function AuthContainer() {
  const [step, setStep] = useState<number>(1);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const { handleSubmit, register } = useForm<{ phoneNumber: string }>();
  const { mutateAsync, isPending, data: otpResponse } = useMutation({ mutationFn: getOTP });

  const sendOTPHandler = async (data: { phoneNumber: string }) => {
    try {
      const res = await mutateAsync(data);
      setPhoneNumber(data.phoneNumber);
      setStep(2);
      toast.success(res.message);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to send OTP");
    }
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <SendOTPForm
          onSubmit={handleSubmit(sendOTPHandler)}
          register={register}
          isSendingOtp={isPending}
        />
      );
    }
    if (step === 2) {
      return (
        <CheckOTPForm
          phoneNumber={phoneNumber}
          onBack={() => setStep(1)}
          onReSendOtp={handleSubmit(sendOTPHandler)}
          otpResponse={otpResponse || { message: "" }}
        />
      );
    }
    return null;
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}
