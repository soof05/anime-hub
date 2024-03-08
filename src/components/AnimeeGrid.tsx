import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Anime {
  mal_id: number;
  title: string;
}

interface FetchAnimeResponse {
  data: Anime[]
}

const AnimeGrid = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchAnimeResponse>("/anime")
      .then((res) => setAnime(res.data.data))
      .catch((err) => setError(err.message));
  });

  console.log(error);
  console.log(anime)
  return (
    <>
    {/* {error &&  <Text>{error}</Text>} */}
    <ul>{anime.map((anime) => <li key={anime.mal_id}>{anime.title}</li> )}</ul>
    </>
  );
};

export default AnimeGrid;
