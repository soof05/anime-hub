import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useAnime from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardContainer from "./AnimeCardContainer";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import { Link } from "react-router-dom";

const AnimeGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useAnime();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  const fetchedAnimesCount =
    data?.pages.reduce((acc, page) => acc + page.data.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedAnimesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding="13px"
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
              <Link to={`/games/${anime.mal_id}`}>
                <AnimeCardContainer key={anime.mal_id}>
                  <AnimeCard anime={anime} />
                </AnimeCardContainer>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default AnimeGrid;
