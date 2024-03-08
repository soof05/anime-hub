import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Anime } from "../hooks/useGames";
import StudioList from "./StudioList";
import ScoreBadge from "./ScoreBadge";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Image height="350px" src={anime.images.jpg.image_url} />
      <CardBody>
        <Heading fontSize="2xl">{anime.title}</Heading>
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
