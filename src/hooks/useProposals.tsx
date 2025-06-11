import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getproposalsApi } from "../Server/ProposalServices";

function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getproposalsApi,
  });
  const { proposals } = data || {};
  return { proposals, isLoading };
}

export default useProposals;
