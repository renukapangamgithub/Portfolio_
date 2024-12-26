import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Import AnchorLink for smooth scroll
import "./navbar.css"; // CSS for navbar styling

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu for small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        
        <span className="logo-highlight">Renuka</span>

      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <AnchorLink
            href="#home"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#services"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#projects"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#education"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      {/* GitHub Button */}
      <div className="github-button">
        <a
          href="https://github.com/renukapangamgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
