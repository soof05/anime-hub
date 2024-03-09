import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const {genres} = useGenres();

  return <div>
    <ul>
        {genres.map((genre) => <li key={genre.mal_id}>{genre.name}</li>)}
    </ul>
  </div>;
};

export default GenresList;
