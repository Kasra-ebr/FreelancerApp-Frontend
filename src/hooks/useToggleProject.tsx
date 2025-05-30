import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../Server/ProjectService";
import { toast } from "react-hot-toast";

export default function useToggleProject() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggleProjectStatus,} = useMutation({
    mutationFn: editProjectApi,
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

  return { isUpdating, toggleProjectStatus };
}
