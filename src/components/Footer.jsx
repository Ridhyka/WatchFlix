import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa"; // Import the icons
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">WatchFlix</h2>
        <p className="footer-tagline">
          Your ultimate destination for movie recommendations.
        </p>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="#about" className="footer-link">About Us</a>
          <a href="#contact" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/ridhika-shekhawat/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Ridhyka/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ridhikashekhawat77@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} RMovies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
