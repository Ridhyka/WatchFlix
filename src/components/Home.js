import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css"; // Add your CSS styles here

const Home = ({ onMovieClick }) => {
  const [featuredFilm, setFeaturedFilm] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );

        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setFeaturedFilm(randomMovie);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      try {
        setIsSearching(true);
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              query: searchTerm,
              language: "en-US",
              page: 1,
            },
          }
        );

        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsSearching(false);
      }
    }
  };

  // const handleCardClick = (movie) => {
  //   setSelectedMovie(movie); // Set the clicked movie for the popup
  // };

  // const closePopup = () => {
  //   setSelectedMovie(null); // Close the popup
  // };

  if (!featuredFilm) {
    return <div className="loading">Loading Featured Movie...</div>;
  }

  return (
    <div>
      <div
        className="main-section"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredFilm.backdrop_path})`,
        }}
      >
        <div className="overlay">
          <h1 className="featured-title">{featuredFilm.title}</h1>
          <p className="featured-overview">{featuredFilm.overview}</p>
        </div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch} // Passes the event 'e' to handleSearch
          />
        </div>
      </div>

      {/* Display Search Results */}
      {isSearching && <p className="loading">Searching...</p>}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>{searchTerm ? `Search Results for "${searchTerm}"` : "Similar Movies"}</h2>
          <div className="movie-grid">
            {searchResults.map((movie) => (
              <div className="movie-card" key={movie.id}  onClick={() => onMovieClick(movie)}>
                {/* <Link to={`/movie/${movie.id}`} className="movie-card-link"></Link> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <p className="movie-title">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


