const TrendingMovies = ({ trendingMovies }) => {
  return (
    <div className="trending">
      <h2>Trending Movies</h2>
      {trendingMovies.length > 0 ? (
        <ul>
          {trendingMovies.map((movie, index) => (
            <li key={movie.$id}>
              <p>{index + 1}</p>
              <img src={movie.poster_url} alt={movie.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No trending movies available.</p>
      )}
    </div>
  );
};

export default TrendingMovies;
