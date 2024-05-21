import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms'
import { Producer } from "../entities/Producer";


const apiClient = new APIClient<Producer>('/producers');

const useProducers = () => {

  return useQuery({
    queryKey: ['producers'],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
  })
};

export default useProducers;
