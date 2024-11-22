import React from "react";
import "./Contact.css"; // Arquivo CSS para estilização

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contate-me</h1>
      
      <div className="contact-info">
        <p>
          <strong>Email:</strong> 
          <a href="mailto:mabs2@cin.ufpe.br" className="contact-link"> mabs2@cin.ufpe.br</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/matheus-%C3%A1lefe-bezerra-da-silva-092b77334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="contact-link"> linkedin.com/in/matheus-alefe</a>
        </p>
        <p>
          <strong>WhatsApp:</strong> 
          <a href="https://wa.me/5581985071888" target="_blank" rel="noopener noreferrer" className="contact-link"> +55 (81) 98507-1888</a>
        </p>
        <p>
          <strong>GitHub:</strong> 
          <a href="https://github.com/4lefee" target="_blank" rel="noopener noreferrer" className="contact-link"> github.com/matheus-alefe</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
