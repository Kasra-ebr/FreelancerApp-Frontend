import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeProposalStatusApi } from "../Server/ProjectService";
import { toast } from "react-hot-toast";

export default function useChangeProposalStatus() {
 

  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: ChangeProposalStatusApi,
    onSuccess: (data: any) => {
      toast.success(data?.message || "Status updated successfully.");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Something went wrong.");
    },
  });

  return { isUpdating, changeProposalStatus };
}
