import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import useFetchHook from "../hooks/FetchHook";

const SimilarMovies = ({ genre }) => {
  const { movies } = useFetchHook();
  const navigate = useNavigate();

  // Filter movies by genre
  const similar = movies
    .filter((movie) => movie.genre_ids.some((g) => genre.includes(g)))
    .slice(0, 5); // Only take the first 5 similar movies

  // Handle Full Movie Detail Information
  const handleDetails = (id) => {
    // Navigate to the Movie Details page with the movie ID
    navigate(`/movie/${id}`);
  };

  return (
    <div className="similar-movies max-w-7xl mx-auto p-5 text-white">
      <h2 className="text-2xl font-bold mb-3 ">Similar Movies</h2>
      <div className="movie-list  flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row gap-5">
        {similar.map((movie) => (
          <div
            className="movie  bg-dark-100 p-5 rounded-2xl shadow-inner shadow-light-100/10 cursor-pointer"
            key={movie.id}
            onClick={() => handleDetails(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg h-auto w-full"
            />
            <h3 className="text-white font-bold text-base line-clamp-1 mt-2">
              {movie.title}
            </h3>
            <div className="content mt-2 flex flex-row items-center flex-wrap gap-2">
              <div className="rating flex flex-row items-center gap-1">
                <FaStar className="text-yellow-400" />
                <p>{movie.vote_average.toFixed(1)}</p>
              </div>
              <span>.</span>
              <p className="lang">{movie.original_language}</p>

              <span>.</span>
              <p className="year">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
