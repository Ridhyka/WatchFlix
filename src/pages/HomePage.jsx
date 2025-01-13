import React, { useState } from "react";
// import Home from "./Home";

import Home from "../components/Home";
import TopMoviesIndia from "../components/TopMoviesIndia";
import TrendingMovies from "../components/TrendingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import MovieDetailPopup from "../components/MovieDetailPopup";

const HomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // Set the selected movie
  };

  const handleClosePopup = () => {
    setSelectedMovie(null); // Clear the selected movie
  };

  return (
    <>
      <Home onMovieClick={handleMovieClick} />
      <TopMoviesIndia onMovieClick={handleMovieClick} />
      <TrendingMovies onMovieClick={handleMovieClick} />
      <TopRatedMovies onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default HomePage;
