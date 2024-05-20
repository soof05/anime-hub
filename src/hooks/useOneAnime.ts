import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Anime } from "./useAnimes";


const apiClient = new APIClient<Anime>('/anime');

const useOneAnime = (id: number) => useQuery( {
    queryKey: ['anime', id],
    queryFn: () => apiClient.get(id)
})

export default useOneAnime;