import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useGames"


interface Props {
    anime: Anime;
}

const AnimeCard = ({anime}: Props) => {
  return (
    <Card maxW="sm" borderRadius={10} overflow={"hidden"}>
        <Image boxSize={400} src={anime.images.jpg.image_url}/>
        <CardBody>
            <Heading fontSize="2xl">{anime.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default AnimeCard
