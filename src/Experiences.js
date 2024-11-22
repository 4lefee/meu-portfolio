import React from "react";
import "./Experiences.css"; // Importando o CSS específico

const Experiences = () => {
  return (
    <div className="experiences-page">
      <h1 className="experiences-title">Minhas Experiências</h1>
      <div className="experiences-container">
        {/* Tópico Gnomon */}
        <div className="experience-topic">
          <h2>Gnomon</h2>
          <p>Descrição.</p>
        </div>

        {/* Tópico Inovaula */}
        <div className="experience-topic">
          <h2>Inovaula</h2>
          <p>Descrição.</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
