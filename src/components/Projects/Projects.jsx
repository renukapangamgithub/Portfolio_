import React, { useState } from "react";
import "./Projects.css";
import projectsData from "../../assets/ProjectData";

const Projects = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (project) => setModalData(project);
  const closeModal = () => setModalData(null);

  return (
    <div className="projects-container">
      <div className="section-header">
        <p className="section-subtitle">My Creative Work</p>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => openModal(project)}
          ></div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <img
              src={modalData.image}
              alt={`${modalData.title} screenshot`}
              className="modal-image"
            />
            <div className="modal-header">
              <h3>{modalData.title}</h3>
            </div>
            <div className="modal-details">
              <p className="modal-description">{modalData.description}</p>
              <div className="modal-technologies">
                {modalData.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge blue-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="modal-links">
              <a
                href={modalData.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-live"
              >
                View Live App
              </a>
              <a
                href={modalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-code"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
