import React from "react";
import "./Projects.css"; // Arquivo de estilo para personalização

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">Projetos</h1>
      <div className="projects-container">
        {/* Primeiro projeto */}
        <div className="project">
          <div className="project-icon kafka-icon"></div>
          <p className="project-name">Alice in Cocacafeland</p>
        </div>
        {/* Segundo projeto */}
        <div className="project">
          <div className="project-icon rabbitmq-icon"></div>
          <p className="project-name">Inovaula Logger</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
