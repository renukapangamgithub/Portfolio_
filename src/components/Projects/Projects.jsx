import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import projectsData from "../../assets/ProjectData";

const Projects = () => {
  return (
    <section className="projects-container">
      <div className="section-header">
        <p className="section-subtitle">My Creative Work</p>
       <h2 className="education-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} />

              {/* Icons on image */}
              <div className="project-hover-icons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p className="label">TECH STACK</p>
              <p className="project-tech">
                {project.technologies.join(", ")}
              </p>

              <p className="label">DESCRIPTION</p>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
