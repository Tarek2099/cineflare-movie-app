import { useParams } from "react-router";
import SimilarMovies from "../components/SimilarMovies";
import useFetchHook from "../hooks/FetchHook";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies } = useFetchHook();
  // Find the movie with the matching ID
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const {
    title,
    overview,
    poster_path,
    release_date,
    original_language,
    vote_average,
    vote_count,
  } = movie || {};

  const ratings = movie?.vote_average.toFixed(1) || "N/A";
  console.log(movie);

  return (
    <>
      <div className="movie-details flex flex-col sm:flex-row sm:gap-10 max-w-7xl mx-auto mt-5">
        <div className="about">
          <div className="details">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              className="w-full mb-5"
            />

            <div className="pt-5">
              <h2 className="mb-2 font-bold text-2xl">Details</h2>
              <h3 className="mb-2">
                Genres <span className="ml-2">Sci-Fi, Action</span>
              </h3>
              <h3 className="mb-2">
                Release Date <span className="ml-2">{release_date}</span>
              </h3>
              <h3 className="mb-2">
                Duration <span className="ml-2">2h 23min</span>
              </h3>
              <h3 className="mb-2">
                Language <span className="ml-2">{original_language}</span>
              </h3>
            </div>
          </div>
          <div className="reviews pt-5">
            <h3 className="mb-2 font-bold text-2xl">Reviews</h3>
            <h3 className="mb-2">
              Vote average: <span className="ml-2">{vote_average}</span>
            </h3>
            <h3 className="mb-2">
              Vote count: <span className="ml-2">{vote_count}</span>
            </h3>
          </div>
        </div>
        <div className="trailer">
          <div className="intro">
            <h1 className="text-2xl text-left mb-4">
              {title}{" "}
              <span className="text-light-200">
                ({release_date?.split("-")[0]})
              </span>
            </h1>
            <div className="flex flex-row gap-2 text-lg">
              <p className="mb-5">
                Rating: <span className="text-yellow-400">{ratings}/10</span>
              </p>
              <span> | </span>
              <p>Time</p>
              <span> | </span>
              <p>Genres</p>
            </div>
            <p className="mb-5">{overview}</p>
          </div>
          <div className="cast-crew">
            <h2 className="mb-2 font-bold text-2xl">Cast & Crew</h2>
            <p className="mb-2 text-md">
              Director: <span>Name</span>
            </p>
            <p className="mb-2 text-md">
              Writer: <span>Name</span>
            </p>
            <p className="mb-2 text-md">
              Stars: <span>Names</span>
            </p>
          </div>
          <div className="trailer-video">
            <video></video>
          </div>
        </div>
      </div>
      <SimilarMovies />
    </>
  );
};

export default MovieDetails;
