import { Box } from "@chakra-ui/react";
import useAnimePromo from "../hooks/useAnimePromo";

interface Props {
  animeId: number;
}

const AnimePromo = ({ animeId }: Props) => {
  const { data: promo, isLoading, error } = useAnimePromo(animeId);
  if (!promo || !promo[0]) return;

  if (isLoading) return;

  if (error) throw error;

  return (
    <Box>
      <iframe
        src={promo[0].trailer.embed_url}
        width={"650"}
        height={"350"}
        allowFullScreen
        className="responsive-iframe"
      />
    </Box>
  );
};

export default AnimePromo;
