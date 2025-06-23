import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { createProposalApi } from '../Server/ProposalServices';

function useCreateProposal() {
 const queryClient = useQueryClient();

  const {  isPending: isCreating,  mutate: createProposal,} = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Something went wrong.");
    },
  });

  return { isCreating, createProposal };
}

export default useCreateProposal
