import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../Server/ProjectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ['owner-projects'], // fixed '=' typo here
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Failed to delete project");
    },
  });

  return { removeProject, isDeleting };
}
