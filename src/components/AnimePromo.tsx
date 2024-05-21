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
    <iframe
      src={promo[0].trailer.embed_url}
      width={"853"}
      height={"480"}
      allowFullScreen
    />
  );
};

export default AnimePromo;
