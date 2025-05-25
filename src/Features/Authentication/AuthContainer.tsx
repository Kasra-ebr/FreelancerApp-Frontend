import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOTP } from "../../Server/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function AuthContainer() {
  const [step, setStep] = useState<number>(2);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const { mutateAsync, isPending, data:otpResponse, } = useMutation({ mutationFn: getOTP });

  const sendOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await mutateAsync({ phoneNumber });
      setStep(2);
      console.log(response);
      toast.success("OTP sent successfully!");
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
            onSubmit={sendOTPHandler}
            setStep={setStep}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            isSendingOtp={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
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
