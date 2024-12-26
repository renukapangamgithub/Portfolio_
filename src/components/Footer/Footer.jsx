import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing Font Awesome icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/renukapangamgithub" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/renuka-pangam-1b111931b/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/yourusername" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
