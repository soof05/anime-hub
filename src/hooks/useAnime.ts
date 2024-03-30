import { useQuery } from "@tanstack/react-query";
import { AnimeQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
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

const useAnime = (animeQuery: AnimeQuery) => {
  const fetchAnime = () =>
    apiClient
      .get<FetchResponse<Anime>>("/anime", {
        params: {
          gneres: animeQuery.genre?.mal_id,
          producers: animeQuery.producer?.mal_id,
          order_by: animeQuery.Sortquery,
          q: animeQuery.searchText,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: ["anime", animeQuery],
    queryFn: fetchAnime,
  });
};

export default useAnime;
