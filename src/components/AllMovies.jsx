import Spinner from "./Spinner.jsx";
const AllMovies = ({ isLoading, errorMsg, movies }) => {
  return (
    <div className="all-movies">
      <h2>All Movies</h2>
      {isLoading ? (
        <Spinner />
      ) : errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <p className="text-white">{movie.title}</p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllMovies;
