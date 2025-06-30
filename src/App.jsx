import { Route, Routes } from "react-router";
import "./index.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
