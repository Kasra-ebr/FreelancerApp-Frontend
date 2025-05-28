import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../Server/ProjectService";
import { toast } from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const {
    isPending: isCreating,
    mutate: createProject,
  } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Something went wrong.");
    },
  });

  return { isCreating, createProject };
}
