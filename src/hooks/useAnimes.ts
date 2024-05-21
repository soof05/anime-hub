import { useInfiniteQuery} from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms'
import useAnimeQueryStore from "../store";
import { Anime } from "../entities/Anime";
export interface Studio {
  mal_id: number;
  name: string;
}

const apiClient = new APIClient<Anime>("/anime");

const useAnime = () => {

  const animeQuery = useAnimeQueryStore(s => s.animeQuery);

  return useInfiniteQuery<FetchResponse<Anime>>({
    queryKey: ["animes", animeQuery],
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
    staleTime: ms('24h')
  });
};

export default useAnime;
