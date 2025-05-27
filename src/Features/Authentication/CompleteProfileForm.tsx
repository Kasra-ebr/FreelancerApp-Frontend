import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";
import RadioInput from "../../UI/RadioInput";
import Loading from "../../UI/Loading";
import { completeProfile } from "../../Server/authServices";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast.error("Please wait to authenticate your profile");
        return;
      }

      if (user.role === "OWNER") return navigate("/Owner");
      if (user.role === "FREELANCER") return navigate("/Freelancer");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to verify OTP. Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={submitHandler}>
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              name="role"
              value="OWNER"
              id="OWNER"
              label="Owner"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              name="role"
              value="FREELANCER"
              id="FREELANCER"
              label="Freelancer"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <div className="flex justify-center">
            {isPending ? (
              <Loading height={80} width={80} />
            ) : (
              <Button type="submit" className="btn">
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
