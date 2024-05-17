import { Heading } from "@chakra-ui/react"
import useProducers from "../hooks/useProducers";
import useAnimeQueryStore from "../store";

const AnimeHeading = () => {

  const producerId = useAnimeQueryStore(s => s.animeQuery.producerId);
  const producers = useProducers();

  const producer = producers.data?.data.find(p => p.mal_id === producerId)
  if (producerId)
    return (
      <Heading marginBottom={5} as='h1'>{producer?.titles[0].title + ' works'}</Heading>
    )
  return (
    <Heading marginBottom={5} as='h1'>Animes</Heading>
  )
}

export default AnimeHeading