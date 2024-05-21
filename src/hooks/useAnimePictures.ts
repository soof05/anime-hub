import { useQuery } from "@tanstack/react-query";
import { AnimePicture } from "../entities/AnimePicture"
import APIClient from "../services/api-client"


const useAnimePictures = (animeId: number) => {
    const apiClient = new APIClient<AnimePicture>(`/anime/${animeId}/pictures`);

    return (useQuery({
        queryKey: ['animePicture', animeId],
        queryFn: () => apiClient.getAll()
    }))
}

export default useAnimePictures;