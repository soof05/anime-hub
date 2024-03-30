import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";


export interface Genre {
  mal_id: number;
  name: string;
}

const apiClient = new APIClient<Genre>('/genres/anime');

const useGenres = () => {

  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { data: genres },
  });
};

export default useGenres;
