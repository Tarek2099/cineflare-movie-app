import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { getTrendingMovies, updateSearchCount } from "../appwrite/appwrite.js";

const useFetchHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermDebounced, setSearchTermDebounced] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);

  console.log(getTrendingMovies());

  // Debounce the search term to avoid too many API calls
  useDebounce(() => setSearchTermDebounced(searchTerm), 500, [searchTerm]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Update Search Input into searchTerm
  const handleSearch = (terms) => {
    setSearchTerm(terms);
  };

  // API options, actually what method we want and authorize the method by header
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  // Fetch the Movie Data from TMDB API
  const fetchMovies = async (query) => {
    try {
      setIsLoading(true);
      setErrorMsg("");

      // Make an endpoint URL based on the search item
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
          )}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      // If response is not ok then it will throw a new error
      if (!response.ok) {
        throw new Error("Failed to Fetch Movies");
      }
      // If the response ok then it will store movie data
      const data = await response.json();

      // If the data is empty then it will show error message
      if (!data.results || data.results.length === 0) {
        setErrorMsg(data.error || "Failed to fetch movies");
        setMovies([]);
        return;
      }

      // Store movie data
      setMovies(data.results);

      // If the search term is not empty and movies are found, update the search count
      if (query && data.results.length > 0) {
        // Update the search count in Appwrite database
        updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      setErrorMsg(`Error message: ${error.message}`);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch trending movies when the component mounts
  const fetchTrendingMovies = async () => {
    try {
      const trendingMovies = await getTrendingMovies();
      setTrendingMovies(trendingMovies);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(searchTermDebounced);
  }, [searchTermDebounced]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return {
    isLoading,
    errorMsg,
    movies,
    trendingMovies,
    searchTerm,
    handleSearch,
  };
};

export default useFetchHook;
