import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../../UI/Button";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import { checkOTP } from "../../Server/authServices";
import { CiEdit } from "react-icons/ci";

interface CheckOTPFormProps {
  phoneNumber: string;
  onBack: (step: number) => void;
  onReSendOtp: (e: React.FormEvent<HTMLFormElement>) => void;
  otpResponse: string;
}

function CheckOTPForm({
  phoneNumber,
  onBack,
  onReSendOtp,
  otpResponse,
}: CheckOTPFormProps) {
  const [otp, setOtp] = useState<string>("");
  const [time, setTime] = useState(2);
  const navigate = useNavigate();
  const { mutateAsync } = useMutation({ mutationFn: checkOTP });

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { mesasge, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(mesasge);
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/Owner");
        if (user.role === "FREELANCER") navigate("/Freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to verify OTP. Please try again."
      );
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button onClick={() => onBack(1)}>
          <HiArrowRight className="w-6 h-6 text-secondary-300" />
        </Button>
      </div>
      {otpResponse && (
        <p className="flex item-center">
          {otpResponse?.message}{" "}
          <Button onClick={onBack}>
            <CiEdit className="h-6 w-6 text-primary-900 " />
          </Button>
        </p>
      )}
      <div className="flex justify-end mb-4 ">
        {time > 0 ? (
          <div className="text-secondary-300 btn flex justify-center">
            Time Remaining = {time}
          </div>
        ) : (
          <>
     
            <form onSubmit={onReSendOtp}>
              <Button type="submit" className="btn">
                Resend
              </Button>
            </form>
          </>
        )}
      </div>

      <form className="space-y-10" onSubmit={checkOTPHandler}>
        <p className="flex justify-center font-bold text-secondary-600 mt-3">
          Enter the Code
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-3 justify-center"
          inputStyle={{
            width: "1.9rem",
            padding: "0.5rem",
            border: "1px solid #3B82F6",
            borderRadius: "0.5rem",
          }}
        />
        <Button className="btn" type="submit">
          Enter
        </Button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
