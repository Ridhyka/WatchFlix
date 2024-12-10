import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Trending.css";

const TrendingMovies = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,// Replace with your TMDb API key
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);



  return (
    <div className="movie-grid-container">
      <h2 className="section-title">Trending Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => onMovieClick(movie)}>
            
            {/* <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card"></Link> */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-rating">⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TrendingMovies;
