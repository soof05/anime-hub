import { useQuery } from "@tanstack/react-query";
import { AnimeQuery } from "../App";
import APIClient from "../services/api-client";

export interface Studio {
  mal_id: number;
  name: string;
}

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
    jpg: {
      image_url: string;
    };
  };
  studios: Studio[];
  score: number;
}

const apiClient = new APIClient<Anime>("/anime");

const useAnime = (animeQuery: AnimeQuery) => {
  return useQuery({
    queryKey: ["anime", animeQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          gneres: animeQuery.genre?.mal_id,
          producers: animeQuery.producer?.mal_id,
          order_by: animeQuery.Sortquery,
          q: animeQuery.searchText,
        },
      }),
  });
};

export default useAnime;
