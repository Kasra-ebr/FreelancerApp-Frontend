import React from "react";
import Button from "../../UI/Button";
import TextField from "../../UI/TextField";
import Loading from "../../UI/Loading";

interface SendOTPFormProps {
  phoneNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSendingOtp: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function SendOTPForm({ isSendingOtp, onSubmit, phoneNumber, onChange }: SendOTPFormProps) {
  return (
    <div className="max-w-md mx-auto p-5 w-full">
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          name="phonenumber"
          label="Please enter your phone number"
          value={phoneNumber}
          onChange={onChange}
        />
        <div className="flex justify-center">
          {isSendingOtp ? (
            <Loading height={80 } width={80} />
          ) : (
            <Button type="submit" className="btn">
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
