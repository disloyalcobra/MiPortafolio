import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <Terminal size={16} className="badge-icon" />
            <span>Ingeniero en Software</span>
          </div>
          
          <h1 className="hero-title">
            Construyendo soluciones <br />
            <span className="text-gradient">escalables y eficientes</span>
          </h1>
          
          <p className="hero-description">
            Especializado en el diseño y desarrollo de software robusto, 
            transformando problemas complejos en arquitecturas simples y elegantes.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver proyectos <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contacto
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in" style={{ transitionDelay: '0.2s' }}>
          <div className="code-window glass-card">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="window-body">
              <pre><code>{`class Developer {
  constructor() {
    this.name = "José Pablo Mateos Gamboa";
    this.role = "Ingeniero en Software";
    this.passion = "Solución de Problemas";
    this.github = "https://github.com/disloyalcobra";
  }

  code() {
    while(alive) {
      eat();
      sleep();
      buildAwesomeThings();
    }
  }
}`}</code></pre>
            </div>
          </div>
          {/* Decorative glow behind the code window */}
          <div className="glow-blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
