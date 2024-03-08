import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import AnimeCard from "./AnimeCard";

const AnimeGrid = () => {
  const { anime, error } = useGames();

  console.log(anime);

  return (
    <>
      {error &&  <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding="13px" spacing={10}>
        {anime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
