import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Sobre = () => {
  const navigate = useNavigate();

  return (
    <div className="sobre-container">
      <button className="voltar-button" onClick={() => navigate("/")}>
        Voltar
      </button>
      <h1 className="titulo">Sobre mim</h1>
      <p>
        Eu me chamo Matheus Álefe, tenho 20 anos e sou estudante de Ciência da
        Computação no Centro de Informática - UFPE.
      </p>
      <p>
        Ser programador para mim significa poder mudar para melhor a vida das
        pessoas por meio da tecnologia, e por isso eu escolhi essa profissão.
      </p>
      <p>
        Com uma busca constante por aprendizado, atualmente tenho habilidades
        com JavaScript, React, HTML/CSS, Tailwind CSS, Python, etc.
      </p>
    </div>
  );
};

export default Sobre;