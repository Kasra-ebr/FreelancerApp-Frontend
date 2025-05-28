import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getOwnerProjectApi } from "../../Server/ProjectService";

function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectApi,
  });

  const { projects } = data || {};

  return { projects, isLoading };
}

export default useOwnerProjects;
