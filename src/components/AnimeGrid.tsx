import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCardContainer from "./AnimeCardContainer";
import useAnime from "../hooks/useAnime";
import { AnimeQuery } from "../App";
import React from "react";

interface Props {
  animeQuery: AnimeQuery;
}

const AnimeGrid = ({ animeQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useAnime(animeQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(data);

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="13px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <AnimeCardContainer key={skeleton}>
              <AnimeCardSkeleton />
            </AnimeCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data.map((anime) => (
              <AnimeCardContainer key={anime.mal_id}>
                <AnimeCard anime={anime} />
              </AnimeCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default AnimeGrid;
