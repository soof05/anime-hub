import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from 'ms'


export interface Genre {
  mal_id: number;
  name: string;
}

const apiClient = new APIClient<Genre>('/genres/anime');

const useGenres = () => {

  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
    initialData: { data: genres },
  });
};

export default useGenres;
