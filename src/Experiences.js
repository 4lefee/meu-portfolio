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
          <p>Projeto de extensão da UFPE onde foi realizado um estudo sobre patrimônio material e imaterial, seguido de curadoria e mapeamento de locais relacionados à igualdade étnico-racial em cidades pernambucanas. Utilizando o aplicativo Gnomon, inseriram-se pontos e rotas destacando legados históricos e narrativas culturais, com o objetivo de sensibilizar e promover o aprendizado de histórias esquecidas, contribuindo para uma sociedade mais justa e inclusiva em Pernambuco.</p>
        </div>

        {/* Tópico Inovaula */}
        <div className="experience-topic">
          <h2>Inovaula</h2>
          <p>Desenvolvedor front-end, criando projetos utilizando tecnologias como JavaScript, HTML, CSS e Tailwind CSS, entre outras. Meu trabalho envolve a construção de interfaces web dinâmicas e responsivas, sempre buscando proporcionar uma experiência de usuário otimizada e visualmente agradável.</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
