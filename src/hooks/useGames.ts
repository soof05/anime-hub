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
  };
  studios: Studio[]
}

interface FetchAnimeResponse {
  data: Anime[];
}

const useGames = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchAnimeResponse>("/anime", { signal: controller.signal })
      .then((res) => setAnime(res.data.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { anime, error };
};

export default useGames;
