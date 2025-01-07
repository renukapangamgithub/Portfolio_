import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><FaEnvelope /> <a href="pangamrenuka15@gmail.com">pangamrenuka15@gmail.com</a></p>
          <p><FaPhone /> <a href="tel:+1234567890">+7304038496</a></p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/renukapangamgithub" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/renuka-pangam-1b111931b/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to Top">
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
