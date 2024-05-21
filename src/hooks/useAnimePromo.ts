import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Promo } from "../entities/AnimePromo";


const apiClient = new APIClient<Promo>('/anime')

const useAnimePromo = (id: number) => useQuery({
    queryKey: ['animePromo', id],
    queryFn: () => apiClient.getVideos(id)
})

export default useAnimePromo;