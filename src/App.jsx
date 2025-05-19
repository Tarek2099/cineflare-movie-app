import AllMovies from "./components/AllMovies";
import Search from "./components/Search";
import "./index.css";
const App = () => {
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
          {/* <div className="logo">
          <img src="../public/logo.png" alt="logo.png" />
        </div> */}
          <Search />
        </header>
        <AllMovies className="all-movies" />
      </div>
    </main>
  );
};

export default App;
