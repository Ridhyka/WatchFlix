import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Trending.css";

const TopRatedMovies = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const movieGridRef = useRef(null); // Reference to the movie grid container

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY, // Replace with your TMDb API key
              language: "en-US",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  // const handleScrollRight = () => {
  //   if (movieGridRef.current) {
  //     movieGridRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll 300px to the right
  //   }
  // };

  return (
    <div className="movie-grid-container">
      <h2 className="section-title">Top Rated Movies</h2>
      <div className="movie-grid" ref={movieGridRef}>
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
      {/* <button className="scroll-right-btn" onClick={handleScrollRight}>
        ➡
      </button> */}
    </div>
  );
};

export default TopRatedMovies;
