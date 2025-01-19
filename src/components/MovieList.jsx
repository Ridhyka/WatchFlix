import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import "../styles/MovieList.css";

const genreMapping = {
  action: 28,
  comedy: 35,
  horror: 27,
  romance: 10749,
  thriller: 53,
  family: 10751,
  "sci-fi": 878,
  fantasy: 14,
  documentary: 99,
  drama: 18,
  adventure: 12,
  animation: 16,
};

const MovieList = ({category, onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const genreId = genreMapping[category];
      if (!genreId) return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${genreId}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchMovies();
    }
  }, [category]);

  return (
    <div className="movie-list">
      {loading ? (
        <p>Loading movies...</p>
      ) : movies.length === 0 ? (
        <p>No movies found for this category.</p>
      ) : (
        movies.map((movie) => (
          // <div key={movie.id} className="movie-card">
             <div
            key={movie.id}
            className="movie-card"
            onClick={()=> onMovieClick(movie)} // Trigger movie details popup on click
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              
            />
            <h3>{movie.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
