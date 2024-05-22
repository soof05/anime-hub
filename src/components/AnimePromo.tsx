import { Box } from "@chakra-ui/react";
import useAnimePromo from "../hooks/useAnimePromo";
import '../css/responsiveVideo.css'
interface Props {
  animeId: number;
}

const AnimePromo = ({ animeId }: Props) => {
  const { data: promo, isLoading, error } = useAnimePromo(animeId);
  if (!promo || !promo[0]) return;

  if (isLoading) return;

  if (error) throw error;

  return (
    <div className="video-responsive">
      <iframe
        src={promo[0].trailer.embed_url}
        width={"853"}
        height={"480"}
        allowFullScreen
        className="responsive-iframe"
      />
    </div>
  );
};

export default AnimePromo;
