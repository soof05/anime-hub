import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.mal_id} paddingY="4px">
            <Text fontSize="lg">{genre.name}</Text>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenresList;
