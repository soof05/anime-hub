import { HStack, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandabelText from "../components/ExpandabelText";
import useOneAnime from "../hooks/useOneAnime";
import AnimeAttributes from "../components/AnimeAttributes";

const AnimeDetailPage = () => {
  const { id } = useParams();

  const { data: anime, isLoading, error } = useOneAnime(+id!);

  if (isLoading) return <Spinner />;

  if (error || !anime) return;

  return (
    <>
      <Heading>{anime.data.title}</Heading>
      <ExpandabelText text={anime.data.synopsis} />
      <SimpleGrid columns={2} as={'dl'}>
        <AnimeAttributes title="Meta Score" score={anime.data.score} />
        <AnimeAttributes title={"Producers"} attribute={anime.data.producers} />
        <AnimeAttributes title={"Genres"} attribute={anime.data.genres} />
        <AnimeAttributes title={"Studios"} attribute={anime.data.studios} />
      </SimpleGrid>
    </>
  );
};

export default AnimeDetailPage;
