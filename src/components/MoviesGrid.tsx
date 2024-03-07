import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Movie {
  id: number;
  orginal_title: string;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const MoviesGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/movie/popular")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }), [];

  console.log(error);
  console.log(movies)
  return (
    <ul>{movies.map((movie) => <li key={movie.id}>{movie.orginal_title}</li> )}</ul>
  );
};

export default MoviesGrid;
