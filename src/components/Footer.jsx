import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">
              <span className="text-gradient">Dev</span>Portafolio
            </span>
            <p>Construyendo el futuro, una línea de código a la vez.</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Inicio</a>
            <a href="#projects">Proyectos</a>
            <a href="#skills">Habilidades</a>
            <a href="#about">Sobre Mí</a>
          </div>
          
          <button 
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} José Pablo Mateos Gamboa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
