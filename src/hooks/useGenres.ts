import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
export interface Genre {
  mal_id: number;
  name: string;
}

const useGenres = () => {
  const fetchGenres = () =>
    apiClient<FetchResponse<Genre>>("/genres/anime").then((res) => res.data);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { data: genres },
  });
};

export default useGenres;
