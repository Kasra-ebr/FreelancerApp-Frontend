import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import useCreateProject from "../../hooks/useCreateProject";
import Loading from "../../UI/Loading";
import useEditProject from "../../hooks/useEditProject";

interface CreateProjectFormProps {
  onClose: () => void;
  projectToEdit: { id: string; title: string; description: string; budget: number; deadline: string; category: { id: string }; tags: string[] } | null;
  tags?: string[];
}

function CreateProjectForm({ onClose, projectToEdit, tags: prevTags = [] }: CreateProjectFormProps) {
  const isEditSession = Boolean(projectToEdit);
  const editId = projectToEdit?.id || "";

  const defaultValues = isEditSession ? {
    title: projectToEdit?.title,
    description: projectToEdit?.description,
    budget: projectToEdit?.budget,
    category: projectToEdit?.category?.id,
  } : {};

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const { isCreating, createProject } = useCreateProject();
  const [tags, setTags] = useState<string[]>(prevTags);
  const [date, setDate] = useState<Date>(new Date(projectToEdit?.deadline || ""));
  const { editProject, isEditing } = useEditProject();

  const onSubmit = (data: any) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject({ id: editId, editProject: newProject }, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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

      {(isCreating || isEditing) ? (
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