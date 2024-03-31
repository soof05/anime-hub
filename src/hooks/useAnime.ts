import { useInfiniteQuery} from "@tanstack/react-query";
import { AnimeQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";

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
  return useInfiniteQuery<FetchResponse<Anime>>({
    queryKey: ["anime", animeQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          gneres: animeQuery.genreId,
          producers: animeQuery.producerId,
          order_by: animeQuery.Sortquery,
          q: animeQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      lastPage.pagination?.has_next_page ? allPages.length + 1 : undefined;
      return allPages.length + 1;
    },
    staleTime: 24 * 60 * 60 * 1000 //24h
  });
};

export default useAnime;
