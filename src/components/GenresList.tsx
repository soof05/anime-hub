import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GneresSkeleton from "./GneresSkeleton";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GneresSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.mal_id} paddingY="4px">
          <Text fontSize="lg">{genre.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
