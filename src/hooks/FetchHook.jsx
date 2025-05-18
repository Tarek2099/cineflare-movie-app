import { useEffect, useState } from "react";
import AllMovies from "../components/AllMovies.jsx";

const FetchHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // API options, actually what method we want and authorize the method by header
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "aplication/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  // Fetch the Movie Data from TMDB API
  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      // If response is not ok then it will throw a new error
      if (!response.ok) {
        throw new Error("Failed to Fetch Movies");
      }
      // If the response ok then it will store movie data
      const data = await response.json();
      // Store movie data
      setMovies(data.results);
    } catch (error) {
      setErrorMsg(`Error message: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <AllMovies isLoading={isLoading} errorMsg={errorMsg} movies={movies} />
    </div>
  );
};

export default FetchHook;
