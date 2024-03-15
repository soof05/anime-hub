import { SimpleGrid, Text } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";
import useAnime from "../hooks/useAnime";
import { AnimeQuery } from "../App";

interface Props {
  animeQuery: AnimeQuery;
}

const AnimeGrid = ({ animeQuery }: Props) => {
  const { data, error, isLoading } = useAnime(animeQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(data);

  if (error) return <Text>{error}</Text>

  return (

    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="13px"
      spacing={4}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <AnimeCardContainer key={skeleton}>
            <AnimeCardSkeleton />
          </AnimeCardContainer>
        ))}
      {data.map((anime) =>
      (
        <AnimeCardContainer key={anime.mal_id}>
          <AnimeCard anime={anime} />
        </AnimeCardContainer>
      )
      )}
    </SimpleGrid>
  );
};

export default AnimeGrid;
