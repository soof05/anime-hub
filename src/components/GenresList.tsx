import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const {data} = useGenres();

  return <div>
    <ul>
        {data.map((genre) => <li key={genre.mal_id}>{genre.name}</li>)}
    </ul>
  </div>;
};

export default GenresList;
