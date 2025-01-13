import React, { useEffect, useState } from "react";

import "../styles/profile.css"; // Add your styling

import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
const supabase = createClient("https://curpgfxykfjlqcovsnny.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cnBnZnh5a2ZqbHFjb3Zzbm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjYyNjgsImV4cCI6MjA1MjEwMjI2OH0.LYIXueK8FTMopvu3qoZ2Pm72SuQgCocaesLUGZZVMuo");

const Profile = () => {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfileAndWatchlist = async () => {
      setLoading(true);

      // Get the logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("Error fetching user:", userError);
        setLoading(false);
        return;
      }

      setUser(user);

      // Fetch watchlist
      const { data: watchlist, error: watchlistError } = await supabase
        .from("watchlist")
        .select("movie_id")
        .eq("user_id", user.id);

      if (watchlistError) {
        console.error("Error fetching watchlist:", watchlistError.message);
      } else {
        const moviesData = await Promise.all(
          watchlist.map(async (item) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${item.movie_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            );
            return response.json();
          })
        );

        setMovies(moviesData);
      }

      setLoading(false);
    };

    fetchProfileAndWatchlist();
  }, []);

  if (loading) return <p>Loading your profile...</p>;

  
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      // Redirect or refresh to reflect logged-out state
      navigate("/");
    }
  };

  const handleRemoveMovie = async (movieId) => {
    // Remove from database
    const { error } = await supabase
      .from("watchlist")
      .delete()
      .eq("movie_id", movieId)
      .eq("user_id", user.id);

    if (error) {
      console.error("Error removing movie:", error.message);
      return;
    }

    // Update the local state
    setMovies(movies.filter((movie) => movie.db_id !== movieId));
  };

  return (
    <div className="profile-container">
      {/* <h1>Welcome, {user?.email}</h1> */}
      <h1 className="profile-section-title">Your Watchlist</h1>

      {movies.length === 0 ? (
        <p>Your watchlist is empty. Start adding movies!</p>
      ) : (
        <div className="profile-movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="profile-movie-card">
              <div
                className="remove-movie-icon"
                onClick={() => handleRemoveMovie(movie.db_id)}
              >
                &times;
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="profile-movie-poster"
              />
              <h3>{movie.title}</h3>
              {/* <p>{movie.overview}</p> */}
            </div>
          ))}
        </div>
      )}
      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
