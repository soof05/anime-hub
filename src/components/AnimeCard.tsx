import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Anime } from "../entities/Anime";
import ScoreBadge from "./ScoreBadge";
import StudioList from "./StudioList";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card>
      <Image src={anime.images.jpg.image_url} />
      <CardBody>
        <Heading fontSize="2xl">
          {anime.title}
          </Heading>
        <HStack justifyContent="space-between">
          <Text fontSize="2xl" color="#A0AEC0">Score :</Text>
          <ScoreBadge score={anime.score} />
        </HStack>
      </CardBody>
      <CardFooter>
        <StudioList studios={anime.studios} />
      </CardFooter>
    </Card>
  );
};

export default AnimeCard;
