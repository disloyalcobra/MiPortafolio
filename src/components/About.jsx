import React from 'react';
import { User, Target, Coffee } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Sobre Mí</h2>
        
        <div className="about-grid">
          <div className="about-content fade-in">
            <p className="about-text">
              Soy Ingeniero en Software con experiencia en desarrollo backend y frontend, 
              especializado en la creación de soluciones tecnológicas innovadoras, escalables 
              y orientadas a resultados de negocio.
            </p>
            <p className="about-text">
              Mi enfoque está orientado a la optimización de procesos, mejora continua 
              y entrega de valor medible, con sólidos conocimientos en arquitectura 
              de software, análisis de datos y metodologías ágiles.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <Target className="highlight-icon" />
                <div>
                  <h4 className="highlight-title">Enfoque en Soluciones</h4>
                  <p className="highlight-desc">Transformo problemas complejos en arquitecturas simples.</p>
                </div>
              </div>
              <div className="highlight-item">
                <Coffee className="highlight-icon" />
                <div>
                  <h4 className="highlight-title">Aprendizaje Continuo</h4>
                  <p className="highlight-desc">Siempre explorando nuevas tecnologías y mejores prácticas.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="profile-wrapper glass-card">
              <div className="profile-icon">
                <User size={80} color="var(--accent-color)" />
              </div>
              <div className="profile-info">
                <h3>José Pablo Mateos</h3>
                <p>Ingeniero en Software</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
