import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import { checkOTP } from "../../Server/authServices";
import { CiEdit } from "react-icons/ci";

interface CheckOTPFormProps {
  phoneNumber: string;
  onBack: () => void;
  onReSendOtp: (e: React.FormEvent<HTMLFormElement>) => void;
  otpResponse: { message: string };
}

export default function CheckOTPForm({
  phoneNumber,
  onBack,
  onReSendOtp,
  otpResponse,
}: CheckOTPFormProps) {
  const [otp, setOtp] = useState<string>("");
  const [time, setTime] = useState(60);
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({ mutationFn: checkOTP });

  useEffect(() => {
    if (time === 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const checkOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Pass phoneNumber and otp to checkOTP
      const { message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      // Temporary fix: Navigate directly to /complete-profile
      navigate("/complete-profile");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || error.message || "Failed to verify OTP. Please try again."
      );
    }
  };

  /* const checkOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const { message, user } = await mutateAsync({ otp });
    toast.success(message);

    if (!user.isActive) return navigate("/complete-profile");

    if (user.status !== 2) {
      toast.error("Please wait to authenticate your profile");
      return navigate("/");
    }

    if (user.role === "OWNER") return navigate("/Owner");
    if (user.role === "FREELANCER") return navigate("/Freelancer");

  } catch (error: any) {
    toast.error(
      error?.response?.data?.message || "Failed to verify OTP. Please try again."
    );
  }
}; */ 
  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button onClick={() => onBack()}>
          <HiArrowRight className="w-6 h-6 text-secondary-300" />
        </Button>
      </div>

      {otpResponse?.message && (
        <p className="flex items-center gap-2">
          {otpResponse.message}
          <Button onClick={() => onBack()}>
            <CiEdit className="h-6 w-6 text-primary-900" />
          </Button>
        </p>
      )}

      <div className="flex justify-end mb-4">
        {time > 0 ? (
          <div className="text-secondary-300 btn flex justify-center">
            Time Remaining: {time}s
          </div>
        ) : (
          <form onSubmit={onReSendOtp}>
            <Button type="submit" className="btn">
              Resend
            </Button>
          </form>
        )}
      </div>

      <form className="space-y-10" onSubmit={checkOTPHandler}>
        <p className="flex justify-center font-bold text-secondary-600 mt-3">
          Enter the 6-digit Code
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex gap-x-3 justify-center"
          inputStyle={{
            width: "2rem",
            padding: "0.5rem",
            border: "1px solid #3B82F6",
            borderRadius: "0.5rem",
          }}
        />
        <Button className="btn w-full" type="submit" disabled={otp.length < 6 || isPending}>
          {isPending ? "Verifying..." : "Enter"}
        </Button>
      </form>
    </div>
  );
}