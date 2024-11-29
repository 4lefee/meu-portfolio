import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./App.css"; 
import ProfileImage from "./B1DA14E1-FB9A-4B95-A605-C4D52FED3F01.jpg"; 

const App = () => {
  const navigate = useNavigate(); 

  return (
    <div className="container">
      <div className="intro-section">
        <h1 className="greeting">
          <span className="html-tag">&lt;/&gt;</span> Olá, me chamo 
          <br />
          <span className="name">Matheus Álefe</span>
        </h1>
        <div className="button-container">
          <button onClick={() => navigate("/about")} className="button sobre">Sobre mim</button>
          <button onClick={() => navigate("/projects")} className="button projetos">Projetos</button>
          <button onClick={() => navigate("/experiences")} className="button experiencias">Experiências</button>
          <button onClick={() => navigate("/contact")} className="button contate">Contate-me</button>
        </div>
      </div>
      <div className="image-container">
        <img 
          src={ProfileImage} 
          alt="Matheus Álefe" 
          className="profile-image" 
        />
      </div>
    </div>
  );
};

export default App;
