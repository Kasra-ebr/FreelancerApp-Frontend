import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { changeProposalStatusApi } from "../Server/ProjectService";

export default function useChangeProposalStatus() {
 

  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data: any) => {
      toast.success(data?.message || "Status updated successfully.");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Something went wrong.");
    },
  });

  return { isUpdating, changeProposalStatus };
}


