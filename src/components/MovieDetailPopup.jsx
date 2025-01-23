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



// import React from 'react';
// import axios from "axios";
// import { createClient } from "@supabase/supabase-js";
// import "../styles/popup.css";

// // Initialize Supabase client
// const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);


// const movieGenres = [
//   { id: 28, name: "Action" },
//   { id: 12, name: "Adventure" },
//   { id: 16, name: "Animation" },
//   { id: 35, name: "Comedy" },
//   { id: 80, name: "Crime" },
//   { id: 99, name: "Documentary" },
//   { id: 18, name: "Drama" },
//   { id: 10751, name: "Family" },
//   { id: 14, name: "Fantasy" },
//   { id: 36, name: "History" },
//   { id: 27, name: "Horror" },
//   { id: 10402, name: "Music" },
//   { id: 9648, name: "Mystery" },
//   { id: 10749, name: "Romance" },
//   { id: 878, name: "Science Fiction" },
//   { id: 10770, name: "TV Movie" },
//   { id: 53, name: "Thriller" },
//   { id: 10752, name: "War" },
//   { id: 37, name: "Western" },
// ];

// // Utility function to map genre IDs to names
// const getGenreNames = (genreIds) => {
//   return genreIds
//     .map((id) => movieGenres.find((genre) => genre.id === id)?.name)
//     .filter(Boolean) // Remove undefined values
//     .join(", ");
// };


// const MovieDetailPopup = ({ movie, onClose }) => {
//   if (!movie) return null; // Don't render anything if no movie is selected

  
  
  

//   // Function to handle adding to watchlist
//   const handleAddToWatchlist = async () => {
//     try {
//       // Check if the user is logged in
//       const {
//         data: { user },
//         error: authError,
//       } = await supabase.auth.getUser();

//       if (authError || !user) {
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
//         <p>
//   <strong>Genre:</strong>{' '}

//   {/* {movie.genres && movie.genres.length > 0
//     ? movie.genres.map((genre) => genre.name).join(', ')
//     : 'N/A'}
//      */}

// {movie.genre_ids && movie.genre_ids.length > 0
//             ? getGenreNames(movie.genre_ids)
//             : 'N/A'}
// </p>
//         {/* <p><strong>Genre:</strong> {movie.genres?.map(genre => genre.name).join(', ')}</p> */}

//         <p><strong>Ratings:</strong> {movie.vote_average}/10⭐</p>
//         <p>
//   <strong>Runtime:</strong>{' '}
//   {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A'}
// </p>
// {/* 
//         <p><strong>Runtime:</strong> {movie.runtime} hours</p> */}
//          {/* <div className="cast">
//             <strong>Cast:</strong>{" "}
//            { getMovieCast(movie)}
//           </div> */}
//           {/* <div className="cast-heading">Cast:</div>
//           <ul className="cast">
//             {movie.cast.length > 0 ? (
//               movie.cast.map((member) => (
//               <li className="cas-listt" key={member.cast_id || `${member.name}-${member.character}`}>
//                 {member.name} as {member.character}
//               </li>
//               ))
//               ) : (
//               <li>No cast information available.</li>
//                 )}
//           </ul> */}
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
//         </a><br></br>
//         <button className="add-to-watchlist-btn" onClick={handleAddToWatchlist}>Add to Watchlist</button>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailPopup;


// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { createClient } from "@supabase/supabase-js";
// import "../styles/popup.css";

// // Initialize Supabase client
// const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

// const movieGenres = [
//   { id: 28, name: "Action" },
//   { id: 12, name: "Adventure" },
//   { id: 16, name: "Animation" },
//   { id: 35, name: "Comedy" },
//   { id: 80, name: "Crime" },
//   { id: 99, name: "Documentary" },
//   { id: 18, name: "Drama" },
//   { id: 10751, name: "Family" },
//   { id: 14, name: "Fantasy" },
//   { id: 36, name: "History" },
//   { id: 27, name: "Horror" },
//   { id: 10402, name: "Music" },
//   { id: 9648, name: "Mystery" },
//   { id: 10749, name: "Romance" },
//   { id: 878, name: "Science Fiction" },
//   { id: 10770, name: "TV Movie" },
//   { id: 53, name: "Thriller" },
//   { id: 10752, name: "War" },
//   { id: 37, name: "Western" },
// ];

// // Utility function to map genre IDs to names
// const getGenreNames = (genreIds) => {
//   return genreIds
//     .map((id) => movieGenres.find((genre) => genre.id === id)?.name)
//     .filter(Boolean) // Remove undefined values
//     .join(", ");
// };

// const MovieDetailPopup = ({ movie, onClose }) => {
//   const [cast, setCast] = useState([]); // State to hold the movie cast data
//   const [isLoading, setIsLoading] = useState(true); // State to handle loading status

//   useEffect(() => {
//     const fetchMovieCast = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, {
//           params: {
//             api_key: process.env.REACT_APP_TMDB_API_KEY,
//           },
//         });
//         setCast(response.data.cast); // Set cast data
//       } catch (error) {
//         console.error('Error fetching movie cast:', error);
//       } finally {
//         setIsLoading(false); // Set loading to false after data is fetched
//       }
//     };

//     if (movie) {
//       fetchMovieCast();
//     }
//   }, [movie]); // Run the effect whenever the movie changes

//   if (!movie) return null; // Don't render anything if no movie is selected


//   const MovieDetails = ({ movieId, movieTitle }) => {
//     const [ottPlatforms, setOttPlatforms] = useState('');
//     const [isLoading, setIsLoading] = useState(true);
  
//     useEffect(() => {
//       const getMovieProviders = async () => {
//         try {
//           const response = await axios.get(
//             `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
//             {
//               params: {
//                 api_key: process.env.REACT_APP_TMDB_API_KEY,
//               },
//             }
//           );
  
//           const providers = response.data.results; // Get providers data
//           let platforms = 'N/A';
  
//           if (providers) {
//             // Example: Check for US providers
//             const usProviders = providers.US; // Change 'US' to your country code if needed
//             if (usProviders && usProviders.flatrate) {
//               platforms = usProviders.flatrate
//                 .map((provider) => provider.provider_name)
//                 .join(', '); // Join provider names with commas
//             }
//           }
  
//           setOttPlatforms(platforms); // Set the available OTT platforms
//           setIsLoading(false); // Set loading to false after fetching
//         } catch (error) {
//           console.error('Error fetching movie providers:', error);
//           setIsLoading(false);
//         }
//       };
  
//       getMovieProviders();
//     }, [movieId]);
  

//   // Function to handle adding to watchlist
//   const handleAddToWatchlist = async () => {
//     try {
//       // Check if the user is logged in
//       const {
//         data: { user },
//         error: authError,
//       } = await supabase.auth.getUser();

//       if (authError || !user) {
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
//         <p>
//           <strong>Genre:</strong>{' '}
//           {movie.genre_ids && movie.genre_ids.length > 0
//             ? getGenreNames(movie.genre_ids)
//             : 'N/A'}
//         </p>
//         <p><strong>Ratings:</strong> {movie.vote_average}/10⭐</p>
//         <p>
//           <strong>Runtime:</strong>{' '}
//           {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A'}
//         </p>
//         <div className="cast">
//           {/* { <strong>Cast:</strong>{" "} */}
//           {/* // {isLoading ? (
//           //   <p>Loading cast...</p>
//           // ) : cast.length > 0 ? (
//           //   cast.map((actor, index) => <span key={index}>{actor.name}, </span>)
//           // ) : (
//           //   <p>No cast information available.</p>
//           // )}  */}
//             <strong>Cast:</strong>{" "}
//             {isLoading ? (
//               <p>Loading cast...</p>
//             ) : cast.length > 0 ? (
//               cast.slice(0, 6).map((actor, index) => (
//                 <span key={index}>{actor.name}{index < 6 ? ", " : ""}</span> // Adds comma except for the last one
//               ))
//             ) : (
//               <p>No cast information available.</p>
//             )}
            
//         </div>
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
//         </a><br />
//         <button className="add-to-watchlist-btn" onClick={handleAddToWatchlist}>Add to Watchlist</button>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailPopup;              


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { createClient } from '@supabase/supabase-js';
// import '../styles/popup.css';

// // Initialize Supabase client
// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// const movieGenres = [
//   { id: 28, name: 'Action' },
//   { id: 12, name: 'Adventure' },
//   { id: 16, name: 'Animation' },
//   { id: 35, name: 'Comedy' },
//   { id: 80, name: 'Crime' },
//   { id: 99, name: 'Documentary' },
//   { id: 18, name: 'Drama' },
//   { id: 10751, name: 'Family' },
//   { id: 14, name: 'Fantasy' },
//   { id: 36, name: 'History' },
//   { id: 27, name: 'Horror' },
//   { id: 10402, name: 'Music' },
//   { id: 9648, name: 'Mystery' },
//   { id: 10749, name: 'Romance' },
//   { id: 878, name: 'Science Fiction' },
//   { id: 10770, name: 'TV Movie' },
//   { id: 53, name: 'Thriller' },
//   { id: 10752, name: 'War' },
//   { id: 37, name: 'Western' },
// ];

// // Utility function to map genre IDs to names
// const getGenreNames = (genreIds) => {
//   return genreIds
//     .map((id) => movieGenres.find((genre) => genre.id === id)?.name)
//     .filter(Boolean)
//     .join(', ');
// };

// // **Move MovieDetails component to top level**
// const MovieDetails = ({ movieId, setOttPlatforms }) => {
//   useEffect(() => {
//     const getMovieProviders = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
//           {
//             params: {
//               api_key: process.env.REACT_APP_TMDB_API_KEY,
//             },
//           }
//         );

//         const providers = response.data.results;
//         let platforms = 'N/A';

//         if (providers) {
//           // Fetch Indian providers (use 'IN' country code)
//           const usProviders = providers.US;
//           if (usProviders && usProviders.flatrate) {
//             platforms = usProviders.flatrate
//               .map((provider) => provider.provider_name)
//               .join(', ');
//           }
//         }

//         setOttPlatforms(platforms);
//       } catch (error) {
//         console.error('Error fetching movie providers:', error);
//         setOttPlatforms('N/A');
//       }
//     };

//     getMovieProviders();
//   }, [movieId, setOttPlatforms]);

//   return null; // This component handles data fetching and doesn't render anything itself
// };

// const MovieDetailPopup = ({ movie, onClose }) => {
//   const [cast, setCast] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [ottPlatforms, setOttPlatforms] = useState('N/A'); // State for OTT platforms

//   useEffect(() => {
//     const fetchMovieCast = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
//           {
//             params: {
//               api_key: process.env.REACT_APP_TMDB_API_KEY,
//             },
//           }
//         );
//         setCast(response.data.cast);
//       } catch (error) {
//         console.error('Error fetching movie cast:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (movie) {
//       fetchMovieCast();
//     }
//   }, [movie]);

//   if (!movie) return null;

//   // Function to handle adding to watchlist
//   const handleAddToWatchlist = async () => {
//     try {
//       const {
//         data: { user },
//         error: authError,
//       } = await supabase.auth.getUser();

//       if (authError || !user) {
//         alert('You need to be logged in to add movies to your watchlist.');
//         window.location.href = '/login'; // Replace with your actual login page path
//         return;
//       }

//       const { data, error: insertError } = await supabase
//         .from('watchlist')
//         .insert({
//           user_id: user.id,
//           movie_id: movie.id,
//         });

//       if (insertError) {
//         console.error('Error adding to watchlist:', insertError.message);
//         alert('Failed to add movie to watchlist. Please try again.');
//       } else {
//         alert('Movie added to watchlist!');
//       }
//     } catch (error) {
//       console.error('Error during add to watchlist:', error.message);
//       alert('An unexpected error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-btn" onClick={onClose}>
//           X
//         </button>
//         <div className="poster">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//             className="poster"
//           />
//         </div>
//         <h1>{movie.title}</h1>
//         <p>
//           <strong>Details:</strong> {movie.overview}
//         </p>
//         <p>
//           <strong>Genre:</strong>{' '}
//           {movie.genre_ids && movie.genre_ids.length > 0
//             ? getGenreNames(movie.genre_ids)
//             : 'N/A'}
//         </p>
//         <p>
//           <strong>Ratings:</strong> {movie.vote_average}/10⭐
//         </p>
//         <p>
//           <strong>Runtime:</strong>{' '}
//           {movie.runtime
//             ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
//             : 'N/A'}
//         </p>
//         <div className="cast">
//           <strong>Cast:</strong>{' '}
//           {isLoading ? (
//             <p>Loading cast...</p>
//           ) : cast.length > 0 ? (
//             cast.slice(0, 6).map((actor, index) => (
//               <span key={index}>
//                 {actor.name}
//                 {index < 5 ? ', ' : ''}
//               </span>
//             ))
//           ) : (
//             <p>No cast information available.</p>
//           )}
//         </div>
//         <MovieDetails movieId={movie.id} setOttPlatforms={setOttPlatforms} />
//         <p>
//           <strong>Available on:</strong> {ottPlatforms || 'N/A'}
//         </p>
//         <p>
//           <strong>Watch trailer:</strong>
//         </p>
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
//         <br />
//         <button className="add-to-watchlist-btn" onClick={handleAddToWatchlist}>
//           Add to Watchlist
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailPopup;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import '../styles/popup.css';

// Initialize Supabase client
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const movieGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

// Utility function to map genre IDs to names
const getGenreNames = (genreIds) => {
  return genreIds
    .map((id) => movieGenres.find((genre) => genre.id === id)?.name)
    .filter(Boolean)
    .join(', ');
};

const MovieDetails = ({ movieId, setOttPlatforms }) => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const getMovieProviders = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
            },
          }
        );

        const providers = response.data.results;

        if (providers && providers.US) {
          const usProviders = providers.US.flatrate || [];
          const platformData = usProviders.map((provider) => ({
            name: provider.provider_name,
            logo: `https://image.tmdb.org/t/p/w92${provider.logo_path}`, // Fetch logo
            // link: `https://www.themoviedb.org/provider/${provider.provider_id}`, // Create a link to provider

            link: provider.provider_name.includes("Netflix")
    ? "https://www.netflix.com/"
    : provider.provider_name.includes("Amazon")
    ? "https://www.primevideo.com/"
    : provider.provider_name.includes("Disney")
    ? "https://www.hotstar.com/"
    : `https://www.themoviedb.org/provider/${provider.provider_id}`, // Fallback to TMDB provider page
          }));

          setPlatforms(platformData);
          setOttPlatforms(
            usProviders.map((provider) => provider.provider_name).join(', ')
          );
        } else {
          setPlatforms([]);
          setOttPlatforms('N/A');
        }
      } catch (error) {
        console.error('Error fetching movie providers:', error);
        setPlatforms([]);
        setOttPlatforms('N/A');
      }
    };

    getMovieProviders();
  }, [movieId, setOttPlatforms]);

  return (
    <div className="ott-platforms">
      <strong>Available on:</strong>{' '}
      {platforms.length > 0 ? (
        <div className="platform-logos">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noreferrer"
              className="platform-link"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                title={platform.name}
                className="platform-logo"
              />
            </a>
          ))}
        </div>
      ) : (
        <span>N/A</span>
      )}
    </div>
  );
};

const MovieDetailPopup = ({ movie, onClose }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ottPlatforms, setOttPlatforms] = useState('N/A'); // State for OTT platforms

  const [trailerUrl, setTrailerUrl] = useState('');



  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      } finally {
        setIsLoading(false);
      }
    };


    const fetchTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
            },
          }
        );
        const trailer = response.data.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };


    if (movie) {
      fetchMovieCast();
      fetchTrailer();
    }
  }, [movie]);

  if (!movie) return null;

  // Function to handle adding to watchlist
  const handleAddToWatchlist = async () => {
    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        alert('You need to be logged in to add movies to your watchlist.');
        window.location.href = '/login'; // Replace with your actual login page path
        return;
      }

      const { data, error: insertError } = await supabase
        .from('watchlist')
        .insert({
          user_id: user.id,
          movie_id: movie.id,
        });

      if (insertError) {
        console.error('Error adding to watchlist:', insertError.message);
        alert('Failed to add movie to watchlist. Please try again.');
      } else {
        alert('Movie added to watchlist!');
      }
    } catch (error) {
      console.error('Error during add to watchlist:', error.message);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster"
          />
        </div>
        <h1 className='heading'>{movie.title}</h1>
        <button className="add-to-watchlist-btn" onClick={handleAddToWatchlist}>
          Add to Watchlist +
        </button>
        <p>
          <strong>Details:</strong> {movie.overview}
        </p>
        <p>
          <strong>Genre:</strong>{' '}
          {movie.genre_ids && movie.genre_ids.length > 0
            ? getGenreNames(movie.genre_ids)
            : 'N/A'}
        </p>
        <p>
          <strong>Ratings: </strong> {movie.vote_average}/10⭐
        </p>
        <p>
          <strong>Release Date: </strong>{movie.release_date}
         
        </p>
        <div className="cast">
          <strong>Cast:</strong>{' '}
          {isLoading ? (
            <p>Loading cast...</p>
          ) : cast.length > 0 ? (
            cast.slice(0, 6).map((actor, index) => (
              <span key={index}>
                {actor.name}
                {index < 5 ? ', ' : ''}
              </span>
            ))
          ) : (
            <p>No cast information available.</p>
          )}
        </div>
        <MovieDetails movieId={movie.id} setOttPlatforms={setOttPlatforms} />
        
        <p>
          <strong>Watch trailer:</strong>
        </p>
        {trailerUrl && (
          <div className="trailer">
            {/* <h3>Trailer</h3> */}
            <iframe
              width="560"
              height="315"
              src={trailerUrl}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

      
        {/* <a
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
        </a> */}
        
        <br />
        {/* <button className="add-to-watchlist-btn" onClick={handleAddToWatchlist}>
          Add to Watchlist
        </button> */}
      </div>
    </div>
  );
};

export default MovieDetailPopup;
