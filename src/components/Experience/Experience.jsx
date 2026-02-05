import React from "react";
import "./Experience.css";
import taxoLogo from "../../assets/TAXOSMART.jpg"; // update path if needed

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-header">
        <p className="experience-subtitle">Where I’ve Worked</p>
        <h2 className="experience-title">Experience</h2>
      </div>

      <div className="experience-container">
        <div className="experience-item">
          <div className="experience-top">
            <div className="experience-role">
              <img
                src={taxoLogo}
                alt="Tax-O-Smart Logo"
                className="experience-logo"
              />

              <div>
                <h3>ReactJS Developer</h3>
                <p className="experience-company">Tax-O-Smart</p>
              </div>
            </div>

            <span className="experience-date">Aug 2025 – Present</span>
          </div>

          <ul className="experience-points">
            <li>
              Built responsive and user-friendly interfaces for applications
              such as <strong>TaxoSmart, RJSA, and TDS</strong> using ReactJS and TailwindCSS.
            </li>
            <li>
              Worked closely with backend teams for API integration and handled
              MySQL-driven data on the frontend.
            </li>
            <li>
              Contributed to production-ready applications across the full
              development lifecycle from design to deployment.
            </li>
            <li>
              Improved performance and implemented efficient state management
              for scalable and maintainable code.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
