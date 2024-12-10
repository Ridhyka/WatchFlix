import React from 'react';
import "../styles/popup.css";


const MovieDetailPopup = ({ movie, onClose }) => {
  if (!movie) return null; // Don't render anything if no movie is selected

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className='poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster"/>
        </div>
        <h1>{movie.title}</h1>
        <p><strong>Details:</strong> {movie.overview}</p>
        <p><strong>Genre:</strong> {movie.genres?.map(genre => genre.name).join(', ')}</p>
        <p><strong>Ratings:</strong> {movie.vote_average}/10</p>
        <p><strong>Runtime:</strong> {movie.runtime} hours </p>
        <p><strong>Available on:</strong> {movie.ottPlatforms || 'N/A'}</p>
        <p><strong>Watch trailer:</strong></p>
        <a href={`https://www.youtube.com/results?search_query=${movie.title} trailer`} target="_blank" rel="noreferrer" className="trailer">
          {/* Watch Trailer */}
          <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" className="trailer">
          
          </img>
        </a>
      </div>
    </div>
  );
};

export default MovieDetailPopup;
