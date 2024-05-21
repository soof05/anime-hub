import { Image, SimpleGrid } from "@chakra-ui/react";
import useAnimePictures from "../hooks/useAnimePictures";

interface Props {
  animeId: number;
}

export const AnimePictures = ({ animeId }: Props) => {
  const { data, isLoading, error } = useAnimePictures(animeId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} padding={5}>
      {data?.data.map((picture) => (
        <Image
          borderRadius={6}
          key={picture.jpg.image_url}
          src={picture.jpg.image_url}
        />
      ))}
    </SimpleGrid>
  );
};
