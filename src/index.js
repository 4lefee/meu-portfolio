import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes"; // Importando o gerenciador de rotas
import "./App.css"; // Linkando o CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes /> {/* Renderizando o componente de rotas */}
  </React.StrictMode>
);
