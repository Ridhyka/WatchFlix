
import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import HomePage from "./pages/HomePage";
import MovieDetailPopup from "./components/MovieDetailPopup";
import CategoryPage from './pages/CategoryPage'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./pages/Profile";
import MovieList from "./components/MovieList";
import { useParams } from 'react-router-dom'; 
// import Home from "./components/Home";
// import TopMoviesIndia from "./components/TopMoviesIndia";
// import TrendingMovies from "./components/TrendingMovies";
// import TopRatedMovies from "./components/TopRatedMovies";
import Footer from "./components/Footer";
// import MovieDetailPopup from "./components/MovieDetailPopup"; // Import the MovieDetailPopup component

const App = () => {
  // State to manage the selected movie
  // const [selectedMovie, setSelectedMovie] = useState(null);

  // Handler for when a movie card is clicked
  // const handleMovieClick = (movie) => {
  //   setSelectedMovie(movie); // Set the selected movie
  // };

  // Handler for closing the popup
  // const handleClosePopup = () => {
  //   setSelectedMovie(null); // Clear the selected movie
  // };
  // const [selectedCategory, setSelectedCategory] = useState("");
  //  const [selectedMovie, setSelectedMovie] = useState(null);
  
  //   const handleMovieClick = (movie) => {
  //     setSelectedMovie(movie); // Set the selected movie
  //   };
  
  //   const handleClosePopup = () => {
  //     setSelectedMovie(null); // Clear the selected movie
  //   };

  return (
    <div className="app">
      <Router>
      <Navbar />
      {/* <Navbar setSelectedCategory={setSelectedCategory} /> */}
      {/* Pass the selected category to MovieList */}
      {/* <MovieList selectedCategory={selectedCategory} /> */}

      <Routes>
       <Route path="/" element={<HomePage />} />
       
      {/* <Route
    path="/"
    element={
      <div>
        <HomePage />
        <MovieList selectedCategory={selectedCategory} />
      </div>
    } /> */}

<Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>

      {/* <Home onMovieClick={handleMovieClick} /> */}

      {/* Pass the movie click handler to child components */}
      {/* <TopMoviesIndia onMovieClick={handleMovieClick} />
      <TrendingMovies onMovieClick={handleMovieClick} />
      <TopRatedMovies onMovieClick={handleMovieClick} /> */}

      {/* Conditionally render the popup */}
      {/* {selectedMovie && (
        <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />
      )} */}

      <Footer /> 
      </Router>
    </div>
  );
};


export default App;




// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Import the Navbar component
// import Home from "./components/Home";
// import TopMoviesIndia from "./components/TopMoviesIndia";
// import TrendingMovies from "./components/TrendingMovies";
// import TopRatedMovies from "./components/TopRatedMovies";
// import Footer from "./components/Footer";
// import MovieDetailPopup from "./components/MovieDetailPopup"; // Import the MovieDetailPopup component
// import Login from "./components/Login"; // Import the LoginPage component
// import SignUpPage from "./components/SignUpPage";
// const App = () => {
//   // State to manage the selected movie
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   // Handler for when a movie card is clicked
//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie); // Set the selected movie
//   };

//   // Handler for closing the popup
//   const handleClosePopup = () => {
//     setSelectedMovie(null); // Clear the selected movie
//   };

//   return (
//     <Router>
//       <div className="app">
//         <Navbar/>

//         <Routes>
//           {/* Route for Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Home onMovieClick={handleMovieClick} />
//                 <TopMoviesIndia onMovieClick={handleMovieClick} />
//                 <TrendingMovies onMovieClick={handleMovieClick} />
//                 <TopRatedMovies onMovieClick={handleMovieClick} />
//                 {selectedMovie && (
//                   <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />
//                 )}
//               </>
//             }
//           />

//           {/* Route for Login Page */}
//           <Route path="/login" element={<Login/>} />
//           <Route path="/signup" element={<SignUpPage />} /> 

//           {/* Redirect any other path to Home */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;





// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar"; 
// import Home from "./components/Home";
// import TopMoviesIndia from "./components/TopMoviesIndia";
// import TrendingMovies from "./components/TrendingMovies";
// import TopRatedMovies from "./components/TopRatedMovies";
// import Footer from "./components/Footer";
// import MovieDetailPopup from "./components/MovieDetailPopup";
// import Login from "./components/Login"; 
// import SignUpPage from "./components/SignUpPage";
// // import Watchlist from "./components/Watchlist";
// import Profile from "./components/Profile";
// import { createClient } from "@supabase/supabase-js";

// // Initialize Supabase client
// const supabase = createClient("https://curpgfxykfjlqcovsnny.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cnBnZnh5a2ZqbHFjb3Zzbm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjYyNjgsImV4cCI6MjA1MjEwMjI2OH0.LYIXueK8FTMopvu3qoZ2Pm72SuQgCocaesLUGZZVMuo");

// // ProtectedRoute component
// const ProtectedRoute = ({ element, ...rest }) => {
//   const user = supabase.auth.getUser(); // Get the current authenticated user

//   return user ? element : <Navigate to="/login" />;
// };

// const App = () => {
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie); // Set the selected movie
//   };

//   const handleClosePopup = () => {
//     setSelectedMovie(null); // Clear the selected movie
//   };

//   return (
    

//     <Router>
//       <div className="app">
//       <Navbar />
//       <Home onMovieClick={handleMovieClick} />
//         <Routes>
//           {/* Route for Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
                
//                 <TopMoviesIndia onMovieClick={handleMovieClick} />
//                 <TrendingMovies onMovieClick={handleMovieClick} />
//                 <TopRatedMovies onMovieClick={handleMovieClick} />
//                 {selectedMovie && (
//                   <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />
//                 )}
//               </>
//             }
//           />

//           {/* Route for Login Page */}
//           <Route path="/login" element={<Login />} />

//           {/* Route for Sign Up Page */}
//           <Route path="/signup" element={<SignUpPage />} />

//           {/* Protected Route for Watchlist Page
//           <Route
//             path="/watchlist"
//             element={<ProtectedRoute element={<Watchlist />} />}
//           /> */}

//           {/* Protected Route for Profile Page */}
//           <Route
//             path="/profile"
//             element={<ProtectedRoute element={<Profile />} />}
//           />

//           {/* Redirect any other path to Home */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage"; // Import the new HomePage component
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import SignUpPage from "./components/SignUpPage";

// import Profile from "./components/Profile";
// import { createClient } from "@supabase/supabase-js";

// // Initialize Supabase client
// const supabase = createClient("https://curpgfxykfjlqcovsnny.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cnBnZnh5a2ZqbHFjb3Zzbm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjYyNjgsImV4cCI6MjA1MjEwMjI2OH0.LYIXueK8FTMopvu3qoZ2Pm72SuQgCocaesLUGZZVMuo");

// // ProtectedRoute component
// const ProtectedRoute = ({ element, ...rest }) => {
//   const user = supabase.auth.getUser(); // Get the current authenticated user

//   return user ? element : <Navigate to="/login" />;
// };

// const App = () => {

//   return (
    
//     <Router>
//       <div className="app">
//         <Navbar />

//         <Routes>
        

//           {/* Route for Home Page */}
//           <Route path="/" element={<HomePage />} />

//           {/* Route for Login Page */}
//           <Route path="/login" element={<Login />} />

//           {/* Route for Sign Up Page */}
//           <Route path="/signup" element={<SignUpPage />} />

         

//           {/* Protected Route for Profile Page */}
//           <Route
//             path="/profile"
//             element={<ProtectedRoute element={<Profile />} />}
//           />

//           {/* Redirect any other path to Home */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;












