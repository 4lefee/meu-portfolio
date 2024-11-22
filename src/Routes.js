import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App"; // Página inicial
import About from "./Sobre"; // Sobre mim
import Projects from "./Projects"; // Projetos
import Experiences from './Experiences';
import Contact from "./Contact"; // Importa a página de contato

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> {/* Nova rota */}
        <Route path="/experiences" element={<Experiences />} /> {/* Nova rota */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
