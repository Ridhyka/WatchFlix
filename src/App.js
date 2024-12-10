

// import React from "react";
// import Navbar from "./components/Navbar"; // Import the Navbar component

// import Home from "./components/Home";
// import TopMoviesIndia from "./components/TopMoviesIndia";

// import TrendingMovies from "./components/TrendingMovies";
// import TopRatedMovies from "./components/TopRatedMovies";


// import Footer from "./components/Footer";



// const App = () => {
//   return (
//     <div className="app">
//       <Navbar/>

//       <Home/>

//       <TopMoviesIndia/>
//       <TrendingMovies/>
//       <TopRatedMovies />
//       <Footer/>


//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./components/Home";
import TopMoviesIndia from "./components/TopMoviesIndia";
import TrendingMovies from "./components/TrendingMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import Footer from "./components/Footer";
import MovieDetailPopup from "./components/MovieDetailPopup"; // Import the MovieDetailPopup component

const App = () => {
  // State to manage the selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Handler for when a movie card is clicked
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // Set the selected movie
  };

  // Handler for closing the popup
  const handleClosePopup = () => {
    setSelectedMovie(null); // Clear the selected movie
  };

  return (
    <div className="app">
      <Navbar />

      <Home onMovieClick={handleMovieClick} />

      {/* Pass the movie click handler to child components */}
      <TopMoviesIndia onMovieClick={handleMovieClick} />
      <TrendingMovies onMovieClick={handleMovieClick} />
      <TopRatedMovies onMovieClick={handleMovieClick} />

      {/* Conditionally render the popup */}
      {selectedMovie && (
        <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />
      )}

      <Footer />
    </div>
  );
};

export default App;














