import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import profilePic from "../../assets/profilePic.jpeg";
import { TypeAnimation } from "react-type-animation";
import cvFile from "../../assets/RENUKA_PANGAM_CV_2026.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [isSplit, setIsSplit] = useState(false);
  const [step, setStep] = useState(0); // For staggered content steps

  useEffect(() => {
    const timer1 = setTimeout(() => setIsSplit(true), 800);
    const timer2 = setTimeout(() => setStep(1), 1400);
    const timer3 = setTimeout(() => setStep(2), 1800);
    const timer4 = setTimeout(() => setStep(3), 2200);
    const timer5 = setTimeout(() => setStep(4), 2600);
    const timer6 = setTimeout(() => setStep(5), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div className={`hero-container ${isSplit ? "split" : "center"}`}>
      <div className="hero-content">
        <h1 className={`fade-item ${step >= 1 ? "visible" : ""}`}>
          Hi, It's <span className="gradient-text">Renuka</span>
        </h1>
        <h2 className={`fade-item ${step >= 2 ? "visible" : ""}`}>
          I'm a{" "}
          <span className="typing-text">
            <TypeAnimation
              sequence={["Full Stack Web Developer", 1000, "", 500]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>
        <p className={`fade-item ${step >= 3 ? "visible" : ""}`}>
          "Passionate about bridging the gap between user-centric design and
          powerful back-end solutions, I create comprehensive web solutions
          that cater to diverse client needs."
        </p>

        <div className={`social-icons fade-item ${step >= 4 ? "visible" : ""}`}>
          <a
            href="https://github.com/renukapangamgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/renuka-pangam-1b111931b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        <div className={`hero-buttons fade-item ${step >= 5 ? "visible" : ""}`}>
          <a href={cvFile} download="RENUKA_PANGAM_CV_2026" className="btn gradient-btn">
            Resume
          </a>
          <a href="#contact" className="btn gradient-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="circle-overlay"></div>
        <img src={profilePic} alt="Renuka" className="profile-pic" />
      </div>
    </div>
  );
};

export default HeroSection;
