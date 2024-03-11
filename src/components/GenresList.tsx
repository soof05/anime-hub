import { Button, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GneresSkeleton from "./GneresSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GneresSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.mal_id} paddingY="4px">
          <Button onClick={() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
