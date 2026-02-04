import React, { useState } from "react";
import "./Certificates.css";
import awsLogo from "../../assets/AWS.png";
import googleLogo from "../../assets/google.jpg";
import deloitteLogo from "../../assets/deloitte.jpg";
import tataLogo from "../../assets/tata.png";
import microsoftLogo from "../../assets/microsoft.png";

import awspdf from "../../assets/Renuka_Pangam_AWS.png";
import googleCloud from "../../assets/Renuka_Pangam_Google_Cloud_Virtual_Internship.png";
import deloitteCetificate from "../../assets/Renuka_Pangam_Virtual_Internship_Deloitte.png";
import tataCetificate from "../../assets/Renuka_Pangam_Virtual_Internship_Deloitte.png";
import microsoftCetificate from "../../assets/Renuka_Pangam_Virtual_Internship_Deloitte.png";

const certificateData = [
  {
    title: "AWS Knowledge: Cloud Essentials",
    provider: "Amazon Web Services",
    logo: awsLogo,
    image: awspdf,
  },
  {
    title: "Google Cloud Virtual Internship",
    provider: "Google Cloud",
    logo: googleLogo,
    image: googleCloud,
  },
  {
    title: "Technology Job Simulation",
    provider: "Deloitte",
    logo: deloitteLogo,
    image: deloitteCetificate,
  },
  {
    title: "Tata Group Virtual Internship",
    provider: "Tata Group",
    logo: tataLogo,
    image: tataCetificate,
  },
  {
    title: "Microsoft Virtual Internship",
    provider: "Microsoft",
    logo: microsoftLogo,
    image: microsoftCetificate,
  },
];

const Certificates = () => {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <section className="cert-section">
      <div className="cert-container">
        <p className="cert-subtitle center">CERTIFICATES</p>

        <h2 className="cert-title center">
          Professional <span>Credentials</span>
        </h2>

        <div className="cert-grid">
          {certificateData.map((cert, index) => (
            <div
              key={index}
              className="cert-card"
              onClick={() => setActivePdf(cert.image)}
            >
              <img src={cert.logo} alt={cert.provider} className="cert-logo" />

              <div>
                <h3>{cert.title}</h3>
                <p>{cert.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activePdf && (
        <div className="pdf-overlay" onClick={() => setActivePdf(null)}>
          <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActivePdf(null)}>
              ✕
            </button>

            {/* IMAGE instead of iframe */}
            <img src={activePdf} alt="Certificate" className="cert-preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
