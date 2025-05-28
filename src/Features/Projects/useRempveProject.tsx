import { useMutation } from "@tanstack/react-query";
import { removeProjectApi } from "../../Server/ProjectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const { mutate: removeproject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      console.log(data)
      toast.success (data.message)
    },
    onError: (err) => toast.error(err?.response?.data?.message) 
  });
}
