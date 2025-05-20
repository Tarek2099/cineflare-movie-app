import AllMovies from "./components/AllMovies";
import Footer from "./components/Footer";
import Search from "./components/Search";
import TrendingMovies from "./components/TrendingMovies";
import useFetchHook from "./hooks/FetchHook";
import "./index.css";

const App = () => {
  const {
    isLoading,
    errorMsg,
    movies,
    searchTerm,
    trendingMovies,
    handleSearch,
  } = useFetchHook();

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="hero-img.png" alt="hero image" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without Hassle
          </h1>
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        </header>
        <TrendingMovies trendingMovies={trendingMovies} />
        <AllMovies
          className="all-movies"
          isLoading={isLoading}
          errorMsg={errorMsg}
          movies={movies}
        />
      </div>
      <Footer />
    </main>
  );
};

export default App;
