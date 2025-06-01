import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import TextField from "../../UI/TextField";
import RadioInput from "../../UI/RadioInput";
import RadioInputGroup from "../../UI/RadioInputGroup";
import RHFSelect from "../../UI/RHFSelect";
import DatePickerField from "../../UI/DatePickerField";
import Loading from "../../UI/Loading";
import Button from "../../UI/Button";

import TagsInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import useCategories from "../../hooks/useCategories";
import { completeProfile } from "../../Server/authServices";

export default function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState<Date | null>(new Date());
  const { categories } = useCategories();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data: any) => {
    try {
      const { message, user } = await mutateAsync({
        ...data,
        tags,
        birthDate: date,
      });

      toast.success(message);

      if (user.status !== 2) {
        toast.error("Please wait to authenticate your profile");
        return navigate("/");
      }
      if (user.role === "OWNER") return navigate("/Owner");
      if (user.role === "FREELANCER") return navigate("/Freelancer");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Failed to verify profile. Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            name="name"
            register={register}
            validationSchema={{ required: "Name is required" }}
            errors={errors}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            register={register}
            validationSchema={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid Email",
              },
            }}
            errors={errors}
          />

          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between gap-x-4">
              <RadioInput
                name="role"
                value="OWNER"
                id="OWNER"
                label="Owner"
                watch={watch}
                register={register}
                validationSchema={{
                  required: "Please choose one of the following",
                }}
              />
              <RadioInput
                name="role"
                value="FREELANCER"
                id="FREELANCER"
                label="Freelancer"
                watch={watch}
                register={register}
                validationSchema={{
                  required: "Please choose one of the following",
                }}
              />
            </div>

            <RadioInputGroup
              configs={{
                name: "gender",
                validationSchema: { required: "Gender is required" },
                options: [
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ],
              }}
              register={register}
              watch={watch}
              errors={errors}
            />
          </div>

          <RHFSelect
            label="Category"
            name="category"
            required
            register={register}
            options={categories}
            errors={errors}
          />

          <div>
            <label className="mb-2 block text-secondary-700">Tags</label>
            <TagsInput tags={tags} onChange={setTags} />
          </div>

          <DatePickerField label="Birthdate" date={date} setDate={setDate} />

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
