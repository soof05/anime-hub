import { Studio } from "../hooks/useAnime";
import { HStack, Text } from "@chakra-ui/react";

interface Props {
  studios: Studio[];
}

const StudioList = ({ studios }: Props) => {
  return (
    <>
      <HStack marginY="10px">
        {studios.map((studio) => (
          <Text key={studio.mal_id} color="#A0AEC0">Studio: {studio.name}</Text>
        ))}
      </HStack>
    </>
  );
};

export default StudioList;
