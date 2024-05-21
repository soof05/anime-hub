import { Studio } from "../hooks/useAnimes";


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
  synopsis: string;
}
