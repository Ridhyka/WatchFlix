// import React from 'react';
// import "../styles/popup.css";


// const MovieDetailPopup = ({ movie, onClose }) => {
//   if (!movie) return null; // Don't render anything if no movie is selected

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <div className='poster'>
//         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster"/>
//         </div>
//         <h1>{movie.title}</h1>
//         <p><strong>Details:</strong> {movie.overview}</p>
//         <p><strong>Genre:</strong> {movie.genres?.map(genre => genre.name).join(', ')}</p>
//         <p><strong>Ratings:</strong> {movie.vote_average}/10</p>
//         <p><strong>Runtime:</strong> {movie.runtime} hours </p>
//         <p><strong>Available on:</strong> {movie.ottPlatforms || 'N/A'}</p>
//         <p><strong>Watch trailer:</strong></p>
//         <a href={`https://www.youtube.com/results?search_query=${movie.title} trailer`} target="_blank" rel="noreferrer" className="trailer">
//           {/* Watch Trailer */}
//           <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" className="trailer">
          
//           </img>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailPopup;



// import React from 'react';
// import { createClient } from "@supabase/supabase-js";
// import "../styles/popup.css";

// // Initialize Supabase client
// const supabase = createClient("https://curpgfxykfjlqcovsnny.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cnBnZnh5a2ZqbHFjb3Zzbm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjYyNjgsImV4cCI6MjA1MjEwMjI2OH0.LYIXueK8FTMopvu3qoZ2Pm72SuQgCocaesLUGZZVMuo");

// const MovieDetailPopup = ({ movie, onClose }) => {
//   if (!movie) return null; // Don't render anything if no movie is selected

//   // Function to handle adding to watchlist
//   const addToWatchlist = async () => {
//     try {
//       // Check if the user is logged in
//       const { data: user, error } = await supabase.auth.getUser();

//       if (error || !user) {
//         alert("You need to be logged in to add movies to your watchlist.");
//         // Redirect to login page
//         window.location.href = "/login"; // Replace with your actual login page path
//         return;
//       }

//       // Insert movie into the watchlist
//       const { data, error: insertError } = await supabase
//         .from("watchlist")
//         .insert({
//           user_id: user.id,
//           movie_id: movie.id,
//         });

//       if (insertError) {
//         console.error("Error adding to watchlist:", insertError.message);
//         alert("Failed to add movie to watchlist. Please try again.");
//       } else {
//         alert("Movie added to watchlist!");
//       }
//     } catch (error) {
//       console.error("Error during add to watchlist:", error.message);
//       alert("An unexpected error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <div className="poster">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//             className="poster"
//           />
//         </div>
//         <h1>{movie.title}</h1>
//         <p><strong>Details:</strong> {movie.overview}</p>
//         <p><strong>Genre:</strong> {movie.genres?.map(genre => genre.name).join(', ')}</p>
//         <p><strong>Ratings:</strong> {movie.vote_average}/10</p>
//         <p><strong>Runtime:</strong> {movie.runtime} hours</p>
//         <p><strong>Available on:</strong> {movie.ottPlatforms || 'N/A'}</p>
//         <p><strong>Watch trailer:</strong></p>
//         <a
//           href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
//           target="_blank"
//           rel="noreferrer"
//           className="trailer"
//         >
//           <img
//             src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
//             alt="Watch Trailer"
//             className="trailer"
//           />
//         </a>
//         <button onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</button>

//       </div>
//     </div>
//   );
// };

// export default MovieDetailPopup;



import React from 'react';
import { createClient } from "@supabase/supabase-js";
import "../styles/popup.css";

// Initialize Supabase client
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const MovieDetailPopup = ({ movie, onClose }) => {
  if (!movie) return null; // Don't render anything if no movie is selected

  // Function to handle adding to watchlist
  const handleAddToWatchlist = async () => {
    try {
      // Check if the user is logged in
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        alert("You need to be logged in to add movies to your watchlist.");
        // Redirect to login page
        window.location.href = "/login"; // Replace with your actual login page path
        return;
      }

      // Insert movie into the watchlist
      const { data, error: insertError } = await supabase
        .from("watchlist")
        .insert({
          user_id: user.id,
          movie_id: movie.id,
        });

      if (insertError) {
        console.error("Error adding to watchlist:", insertError.message);
        alert("Failed to add movie to watchlist. Please try again.");
      } else {
        alert("Movie added to watchlist!");
      }
    } catch (error) {
      console.error("Error during add to watchlist:", error.message);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster"
          />
        </div>
        <h1>{movie.title}</h1>
        <p><strong>Details:</strong> {movie.overview}</p>
        <p><strong>Genre:</strong> {movie.genres?.map(genre => genre.name).join(', ')}</p>
        <p><strong>Ratings:</strong> {movie.vote_average}/10</p>
        <p><strong>Runtime:</strong> {movie.runtime} hours</p>
        <p><strong>Available on:</strong> {movie.ottPlatforms || 'N/A'}</p>
        <p><strong>Watch trailer:</strong></p>
        <a
          href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
          target="_blank"
          rel="noreferrer"
          className="trailer"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt="Watch Trailer"
            className="trailer"
          />
        </a><br></br>
        <button className="add-to-watchlist-btn" onClick={handleAddToWatchlist}>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieDetailPopup;
