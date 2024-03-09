import { SimpleGrid, Text } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";
import useAnime from "../hooks/useAnime";


const AnimeGrid = () => {
  const { data, error, isLoading } = useAnime();
  const skeletons = [1,2,3,4,5,6,7,8];
  console.log(data);

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="13px"
        spacing={4}
      >
         {isLoading && skeletons.map((skeleton) => (
         <AnimeCardContainer >
           <AnimeCardSkeleton key={skeleton} />
         </AnimeCardContainer>
         ))}
        {data.map((anime) => (
          <AnimeCardContainer>
            <AnimeCard key={anime.mal_id} anime={anime} />
          </AnimeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
