import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Producer {
  mal_id: number;
  titles: [
    {
      type: string;
      title: string;
    }
  ];
}

const useProducers = () => {
  const fetchProducers = () =>
    apiClient
      .get<FetchResponse<Producer>>("/producers")
      .then((res) => res.data);

  return useQuery({
    queryKey: ['producers'],
    queryFn: fetchProducers,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  })
};

export default useProducers;
