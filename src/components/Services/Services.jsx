import React from "react";
import { frontendIcons, backendIcons, otherIcons } from "../../assets/Servicedata";
import "./Services.css"; // Importing the CSS file for styling

const Services = () => {
  return (
    <section className="services-section">
      {/* Heading for the services section */}
      <h2 className="services-heading">Skills</h2>

      <div className="services-container">
        <div className="service-category">
          <h2>Frontend</h2>
          <div className="service-icons">
            {frontendIcons.map((icon, index) => (
              <div key={index} className="service-icon">
                {icon.src ? (
                  <img src={icon.src} alt={icon.name} className="icon-img" />
                ) : (
                  <i className={icon.class}></i>
                )}
                <p>{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="service-category">
          <h2>Backend</h2>
          <div className="service-icons">
            {backendIcons.map((icon, index) => (
              <div key={index} className="service-icon">
                {icon.src ? (
                  <img src={icon.src} alt={icon.name} className="icon-img" />
                ) : (
                  <i className={icon.class}></i>
                )}
                <p>{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="service-category">
          <h2>Other</h2>
          <div className="service-icons">
            {otherIcons.map((icon, index) => (
              <div key={index} className="service-icon">
                {icon.src ? (
                  <img src={icon.src} alt={icon.name} className="icon-img" />
                ) : (
                  <i className={icon.class}></i>
                )}
                <p>{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
