import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";


const AnimeGrid = () => {
  const { anime, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5,6,7,8];
  console.log(anime);

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="13px"
        spacing={10}
      >
         {isLoading && skeletons.map((skeleton) => (
         <AnimeCardContainer >
           <AnimeCardSkeleton key={skeleton} />
         </AnimeCardContainer>
         ))}
        {anime.map((anime) => (
          <AnimeCardContainer>
            <AnimeCard key={anime.mal_id} anime={anime} />
          </AnimeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
