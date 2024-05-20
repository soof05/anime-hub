import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Anime } from "../hooks/useAnimes";
import StudioList from "./StudioList";
import ScoreBadge from "./ScoreBadge";
import { Link } from "react-router-dom";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card>
      <Image src={anime.images.jpg.image_url} />
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={'/games/' + anime.mal_id}>{anime.title}</Link>
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
