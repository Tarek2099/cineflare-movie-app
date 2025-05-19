import { ErrorBoundary } from "react-error-boundary";
import useFetchHook from "../hooks/FetchHook.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import MovieCard from "./MovieCard.jsx";
import Spinner from "./Spinner.jsx";

const AllMovies = () => {
  const { isLoading, errorMsg, movies } = useFetchHook();
  return (
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <div className="all-movies">
        <h2>All Movies</h2>
        {isLoading ? (
          <Spinner />
        ) : errorMsg ? (
          <p>{errorMsg}</p>
        ) : (
          <ul>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default AllMovies;
