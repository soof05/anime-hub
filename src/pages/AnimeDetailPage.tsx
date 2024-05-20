import { useParams } from "react-router-dom";
import useOneAnime from "../hooks/useOneAnime";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const AnimeDetailPage = () => {

    const {id} = useParams();

    const {data: anime, isLoading, error} = useOneAnime(+id!);
    
    if (isLoading) return <Spinner/>
    
    if (error || !anime) return;
    
    console.log('helllo', anime.data);
    return (
        <>
            <Heading>{anime.data.title}</Heading>
            <Text>{anime.data.synopsis}</Text>
        </>
    )
}

export default AnimeDetailPage;