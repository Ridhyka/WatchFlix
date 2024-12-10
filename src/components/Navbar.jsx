import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
      </div>
      
    </div>
  );
};

export default Navbar;





