import { Card, CardBody, CardFooter, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useGames";
import StudioList from "./StudioList";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card maxW="sm" borderRadius={10} overflow={"hidden"}>
      <Image boxSize={400} src={anime.images.webp.image_url} />
      <CardBody>
        <Heading fontSize="2xl">{anime.title}</Heading>
      </CardBody>
      <CardFooter>
        <StudioList studios={anime.studios} />
      </CardFooter>
    </Card>
  );
};

export default AnimeCard;
