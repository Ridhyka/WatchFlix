// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../styles/MovieDetails.css";

// const MovieDetails = () => {
//   const { id } = useParams(); // Get movie ID from URL
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${id}`,
//           {
//             params: {
//               api_key: process.env.REACT_APP_TMDB_API_KEY,
//               language: "en-US",
//               append_to_response: "credits,videos",
//             },
//           }
//         );

//         setMovie(response.data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (loading) return <div className="loading">Loading Movie Details...</div>;

//   const trailer = movie.videos.results.find(
//     (video) => video.type === "Trailer" && video.site === "YouTube"
//   );

//   return (
//     <div className="movie-details">
//       <div
//         className="backdrop"
//         style={{
//           backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
//         }}
//       >
//         <div className="overlay">
//           <h1>{movie.title}</h1>
//           <p>{movie.overview}</p>
//           <p>
//             <strong>Rating:</strong> {movie.vote_average} / 10
//           </p>
//           <p>
//             <strong>Runtime:</strong> {movie.runtime} minutes
//           </p>
//           <p>
//             <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
//           </p>
//           <p>
//             <strong>Cast:</strong>{" "}
//             {movie.credits.cast.slice(0, 5).map((actor) => actor.name).join(", ")}
//           </p>
//           <p>
//             <strong>Available on OTT:</strong> {/* Add OTT info if available */}
//           </p>
//           {trailer && (
//             <a
//               href={`https://www.youtube.com/watch?v=${trailer.key}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="trailer-button"
//             >
//               Watch Trailer
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;
