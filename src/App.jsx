import { useState } from "react";
import AllMovies from "./components/AllMovies";
import Search from "./components/Search";
import "./index.css";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="../public/hero-img.png" alt="hero image" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without Hassle
          </h1>
          {/* <div className="logo">
          <img src="../public/logo.png" alt="logo.png" />
        </div> */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
      </div>
      <AllMovies />
    </main>
  );
};

export default App;
