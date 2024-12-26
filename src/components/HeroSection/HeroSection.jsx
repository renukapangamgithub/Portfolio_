import React from "react";
import "./HeroSection.css";
import profilePic from "../../assets/profilePic.jpeg";
import { TypeAnimation } from "react-type-animation";
import cvFile from "../../assets/Resume_!.pdf"; // Add the path to your CV file here
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing the icons

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          Hi, It's <span className="gradient-text">Renuka</span>
        </h1>
        <h2>
          I'm a{" "}
          <span className="typing-text">
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer", // Typing "Full Stack Web Developer"
                1000, // Wait for 1 second
                "", // Clear the text
                500, // Wait for 500ms before typing again
              ]}
              speed={50} // Speed of typing effect
              repeat={Infinity} // Repeats infinitely
            />
          </span>
        </h2>
        <p>
          "Passionate about bridging the gap between user-centric design and
          powerful back-end solutions, I create comprehensive web solutions
          that cater to diverse client needs."
        </p>

        {/* Social Icons placed above the buttons */}
        <div className="social-icons">
          <a
            href="https://github.com/renukapangamgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/renuka-pangam-1b111931b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <a
            href={cvFile} // Link to the CV file
            download="Renuka_!.pdf" // The name to give the downloaded file
            className="btn gradient-btn"
          >
            Resume
          </a>
          <a
            href="#contact" // Link to the Contact section
            className="btn gradient-btn"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="hero-image">
        <div className="circle-overlay"></div>
        <img src={profilePic} alt="Renuka" className="profile-pic" />
      </div>
    </div>
  );
};

export default HeroSection;
