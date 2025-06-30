import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const MovieCard = ({
  movie: {
    title,
    id,
    vote_average,
    release_date,
    poster_path,
    original_language,
  },
}) => {
  console.log(title, id);
  const navigate = useNavigate();

  // Handle Full Movie Detail Information
  const handleDetails = (id) => {
    // Navigate to the Movie Details page with the movie ID
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="movie-card cursor-pointer"
      onClick={() => handleDetails(id)}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `/no-movie.png`
        }
        alt={title}
      />
      <h3 className="mt-2">{title}</h3>
      <div className="content">
        <div className="rating">
          <FaStar className="text-yellow-400" />
          <p>{vote_average.toFixed(1)}</p>
        </div>
        <span>.</span>
        <p className="lang">{original_language}</p>

        <span>.</span>
        <p className="year">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
