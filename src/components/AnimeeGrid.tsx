import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const AnimeGrid = () => {
  const { anime, error } = useGames();

  console.log(anime);

  return (
    <>
      {error &&  <Text>{error}</Text>}
      <ul>
        {anime.map((anime) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AnimeGrid;
