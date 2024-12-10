import React, { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/MovieGrid.css";// Ensure to link the CSS file

const TopMoviesIndia = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the initial 10 movies from TMDB
  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            region: "IN",
            page: 1,
          },
        }
      );
      const topMovies = response.data.results.slice(0, 10); // Get the top 10 movies
      setMovies((prevMovies) => [...prevMovies, ...topMovies]); // Append movies to the current list
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Infinite scroll handler
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 100 && !isLoading) {
      setIsLoading(true);
      fetchMovies(); // Fetch the next batch of movies (repeat the same 10)
    }
  };

  useEffect(() => {
    fetchMovies(); // Initial fetch
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMovies]);

  return (
    <div className="top-movies-india">
      <h2>Top 10 Movies in India</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={`${movie.id}-${index}`} onClick={() => onMovieClick(movie)}>


            {/* <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card"></Link> */}
            <span className="movie-rank">{(index % 10) + 1}</span>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              {/* <h3 className="movie-title">{movie.title}</h3> */}
            </div>
          </div>
        ))}
      </div>
      {isLoading && <p className="loading">Loading...</p>}
    </div>
  );
  
};

export default TopMoviesIndia;
