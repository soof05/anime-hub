import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchAnimeResponse {
  data: Anime[];
}

const useGames = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchAnimeResponse>("/anime", { signal: controller.signal })
      .then((res) => {
        setAnime(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { anime, error, isLoading };
};

export default useGames;
