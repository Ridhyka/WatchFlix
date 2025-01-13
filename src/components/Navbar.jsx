// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL,process.env.REACT_APP_SUPABASE_ANON_KEY);

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error.message);
      } else {
        if (data.session) {
          setIsLoggedIn(true);
          setUser(data.session.user);
        }
      }
    };
    fetchSession();
  }, []);

  // Handle login/logout functionality
  // const handleLoginLogout = async () => {
  //   if (isLoggedIn) {
  //     await supabase.auth.signOut();  // Log out the user
  //     setIsLoggedIn(false);
  //     setUser(null); // Clear user data
  //     alert("Logged out successfully!");
  //   } else {
  //     window.location.href = "/login"; // Redirect to login page if not logged in
  //   }
  // };
   // Handle navigation for Login/Profile
   const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/Profile"); // Navigate to the Profile page if logged in
    } else {
      navigate("/Login"); // Navigate to the Login page if not logged in
    }
  };

   
  return (
    <div className="navbar">
      
      <div className="nav-logo">
        <a href="#home">WatchFlix</a>
      </div>

      <div className="nav-links">
        <a href="#home" className="neon-link">Home</a>
        <a href="#horror" className="neon-link">Horror</a>
        <a href="#action" className="neon-link">Action</a>
        <a href="#romance" className="neon-link">Romance</a>
        <a href="#thriller" className="neon-link">Thriller</a>
        <a href="#family" className="neon-link">Family</a>
        <div 
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span className="neon-link dropdown-title">Categories &#x25BC;</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#comedy" className="neon-link">Comedy</a>
              <a href="#thriller" className="neon-link">Thriller</a>
              <a href="#sci-fi" className="neon-link">Sci-Fi</a>
              <a href="#fantasy" className="neon-link">Fantasy</a>
              <a href="#documentary" className="neon-link">Documentary</a>
              <a href="#drama" className="neon-link">Drama</a>
              <a href="#adventure" className="neon-link">Adventure</a>
              <a href="#animation" className="neon-link">Animation</a>
            </div>
          )}
        </div>
         {/* Login/Sign-In Button */}
         <button
          className="login-btn neon-link"
          onClick={handleButtonClick}
        >
           {isLoggedIn ? "My Profile " : "Login / Sign In"}
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;





