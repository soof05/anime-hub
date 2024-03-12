import { AnimeQuery } from "../App";
import useData from "./useData";
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

const useAnime = (animeQuery: AnimeQuery) =>
  useData<Anime>(
    "/anime",
    {
      params: {
        gneres: animeQuery.genre?.mal_id,
        producers: animeQuery.producer?.mal_id,
        order_by: animeQuery.Sortquery,
        q: animeQuery.searchText,
      },
    },
    [animeQuery]
  );

export default useAnime;
