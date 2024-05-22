import { Heading, SimpleGrid, Spinner, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandabelText from "../components/ExpandabelText";
import useOneAnime from "../hooks/useOneAnime";
import AnimeAttributes from "../components/AnimeAttributes";
import useAnimePromo from "../hooks/useAnimePromo";
import AnimePromo from "../components/AnimePromo";
import { AnimePictures } from "../components/AnimePictures";
import "../css/scrolling.css";

const AnimeDetailPage = () => {
  const { id } = useParams();

  const { data: anime, isLoading, error } = useOneAnime(+id!);
  const { data: promo } = useAnimePromo(+id!);

  if (!promo) return;

  if (isLoading) return <Spinner />;

  if (error || !anime) return;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box className="fixed-box">
        <Heading>{anime.data.title}</Heading>
        <ExpandabelText text={anime.data.synopsis} />
        <SimpleGrid columns={2} as={"dl"}>
          <AnimeAttributes title={"Meta Score"} score={anime.data.score} />
          <AnimeAttributes
            title={"Producers"}
            attribute={anime.data.producers}
          />
          <AnimeAttributes title={"Genres"} attribute={anime.data.genres} />
          <AnimeAttributes title={"Studios"} attribute={anime.data.studios} />
        </SimpleGrid>
      </Box>
      <Box>
        <AnimePromo animeId={anime.data.mal_id} />
        <AnimePictures animeId={anime.data.mal_id} />
      </Box>
    </SimpleGrid>
  );
};

export default AnimeDetailPage;
