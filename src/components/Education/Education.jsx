import React from "react";
import "./Education.css";

const educationData = [
  {
    date: "Oct 2021 – Sep 2025",
   degree: "Bachelor of Engineering (B.E.) – Computer Science (Honours in Cybersecurity)",
    institution: "Universal College of Engineering, Kaman",
    cgpa: "8.0 CGPA",
    description:
      "Completed Bachelor's degree with a strong foundation in software development, data structures, and modern web technologies.",
  },
  {
    date: "Apr 2019 – Apr 2021",
    degree: "HSC (XII) – Science (PCMB)",
    institution: "Nirmala College of Arts, Commerce and Science, Kandivali",
    cgpa: "89.4%",
    description:
      "Completed higher secondary education with a strong academic foundation in science and mathematics.",
  },
  {
    date: "Apr 2017 – Apr 2019",
    degree: "SSC (X)",
    institution: "Adarsh Vidya Niketan, Thane",
    cgpa: "78.9%",
    description:
      "Completed secondary education with consistent academic performance.",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-header">
        <p className="education-subtitle">Academic Background</p>
        <h2 className="education-title">Education</h2>
      </div>

      <div className="education-list">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-marker" />

            <div className="education-content">
              <span className="education-date">{item.date}</span>
              <h3>{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-grade">Grade: {item.cgpa}</p>
              <p className="education-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
