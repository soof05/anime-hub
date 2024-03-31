import { Button, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GneresSkeleton from "./GneresSkeleton";

interface Props {
  onSelectGenre: (genreId: number | null) => void;
  selectedGenreId: number | null;
}

const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GneresSkeleton key={skeleton} />)}
      {data?.data.map((genre) => (
        <ListItem key={genre.mal_id} paddingY="4px">
          <Button fontWeight={genre.mal_id === selectedGenreId ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre.mal_id)} variant='link'>{genre.name}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
