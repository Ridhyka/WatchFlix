// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import MovieList from '../components/MovieList';
// import MovieDetailPopup from '../components/MovieDetailPopup'; // Import the MovieDetailPopup component

// const CategoryPage = () => {
//   const { categoryName } = useParams(); // Get the category name from the URL
//   const [selectedMovie, setSelectedMovie] = useState(null); // Store the selected movie for the popup
//   const [showPopup, setShowPopup] = useState(false); // State to show or hide the popup

//   // Function to open the movie details popup
//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie); // Set the clicked movie to show in the popup
//     setShowPopup(true); // Show the popup
//   };

//   // Function to close the movie details popup
//   const handleClosePopup = () => {
//     setShowPopup(false); // Hide the popup
//     setSelectedMovie(null); // Reset the selected movie
//   };

//   return (
//     <div>
//       <h1>{categoryName.toUpperCase()} Movies</h1>
//       <MovieList category={categoryName} onMovieClick={handleMovieClick} />
      
//       {/* Show the popup if there's a selected movie and popup state is true */}
//       {showPopup && <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />}
//     </div>
//   );
// };

// export default CategoryPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieDetailPopup from '../components/MovieDetailPopup'; // Import the MovieDetailPopup component

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [selectedMovie, setSelectedMovie] = useState(null); // Store the selected movie for the popup
  const [showPopup, setShowPopup] = useState(false); // State to show or hide the popup

  // Function to open the movie details popup
  const handleMovieClick = (movie) => {
    console.log('Movie clicked:', movie);  // Debugging line to check the movie object
    setSelectedMovie(movie); // Set the clicked movie to show in the popup
    setShowPopup(true); // Show the popup
  };

  // Function to close the movie details popup
  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
    setSelectedMovie(null); // Reset the selected movie
  };

  return (
    <div>
      <h1>{categoryName.toUpperCase()} Movies</h1>
      <MovieList category={categoryName} onMovieClick={handleMovieClick} />
      
      {/* Show the popup if there's a selected movie and popup state is true */}
      {showPopup && <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />}
    </div>
  );
};

export default CategoryPage;

