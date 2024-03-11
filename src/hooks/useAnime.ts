import useData from "./useData";
import { Genre } from "./useGenres";
import { Producer } from "./useProducers";
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

const useAnime = (selectedGenere: Genre | null, selectedProducer: Producer | null) =>
  useData<Anime>("/anime", { params: { gneres: selectedGenere?.mal_id, producers: selectedProducer?.mal_id } }, [
    selectedGenere?.mal_id,
    selectedProducer?.mal_id
  ]);

export default useAnime;
