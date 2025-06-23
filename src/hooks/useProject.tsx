import { useQuery } from "@tanstack/react-query";
import { geProjectApi } from "../Server/ProjectService";
import { queryString } from "query-string";
import { useLocation } from "react-router";

export function useProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => geProjectApi(search),
  });
  const { projects } = data || {};

  return { isLoading, projects };
}
