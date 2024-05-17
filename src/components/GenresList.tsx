import { Button, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GneresSkeleton from "./GneresSkeleton";
import useAnimeQueryStore from "../store";


const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  const selectedGenreId = useAnimeQueryStore(s => s.animeQuery.genreId);

  const setSelectedGenreId = useAnimeQueryStore(s => s.setGenreId)

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GneresSkeleton key={skeleton} />)}
      {data?.data.map((genre) => (
        <ListItem key={genre.mal_id} paddingY="4px">
          <Button fontWeight={genre.mal_id === selectedGenreId ? 'bold' : 'normal'} onClick={() => setSelectedGenreId(genre.mal_id)} variant='link'>{genre.name}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
