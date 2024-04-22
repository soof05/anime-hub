import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms'


export interface Producer {
  mal_id: number;
  titles: [
    {
      type: string;
      title: string;
    }
  ];
}

const apiClient = new APIClient<Producer>('/producers');

const useProducers = () => {

  return useQuery({
    queryKey: ['producers'],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
  })
};

export default useProducers;
