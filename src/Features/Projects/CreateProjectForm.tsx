import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import useCreateProject from "../../hooks/useCreateProject";
import Loading from "../../UI/Loading";
interface CreateProjectFormProps {
 onClose: () => void
} 
function CreateProjectForm({ onClose }: CreateProjectFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isCreating, createProject } = useCreateProject();
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  const onSubmit = (data: any) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    createProject(newProject, {
      onSuccess: () => {
        onClose?.(); // optional chaining for safety
        reset();
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "The Title is required",
          minLength: {
            value: 10,
            message: "The length is invalid",
          },
        }}
        errors={errors}
      />

      <TextField
        label="Description"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "The description is required",
          minLength: {
            value: 15,
            message: "Please enter at least 15 characters.",
          },
        }}
        errors={errors}
      />

      <TextField
        label="Budget"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "The budget is required",
          min: {
            value: 1,
            message: "Budget must be greater than 0",
          },
        }}
        errors={errors}
      />

      {isCreating ? (
        <Loading height={50} width={50} />
      ) : (
        <Button type="submit" className="btn btn--primary w-full">
          Confirm
        </Button>
      )}
    </form>
  );
}

export default CreateProjectForm;
