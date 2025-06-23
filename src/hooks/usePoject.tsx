import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../Server/ProjectService";


export default function useProject(id:string) {
  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry:false,
  });

  const { projects } = data || {};

  return { projects, isLoading };
}


