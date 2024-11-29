import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes"; 
import "./App.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes /> {/* Renderizando o componente de rotas */}
  </React.StrictMode>
);
