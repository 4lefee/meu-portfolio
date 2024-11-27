import React from "react";
import "./Projects.css"; // Arquivo de estilo para personalização

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">Projetos</h1>
      <div className="projects-container">
        {/* Primeiro projeto */}
        <a
          href="https://github.com/MatheusHBSilva/Projeto-IP"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="project-icon kafka-icon"></div>
          <p className="project-name">Alice in Cocacafeland</p>
        </a>
        
        {/* Segundo projeto */}
        <a
          href="https://github.com/inovaulaorg/inovaula-logger/tree/feature/frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="project-icon rabbitmq-icon"></div>
          <p className="project-name">Inovaula Logger</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
