import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'CR0SS Chains — Tienda de Joyería',
    description: 'Página de e-commerce desarrollada en WooCommerce para una marca de joyería. Ofrece una experiencia de compra en línea con catálogo de productos, carrito de compras y gestión de pedidos.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
    tech: ['WooCommerce', 'WordPress', 'E-commerce'],
    demo: 'https://cr0sschains.com/',
    repo: null
  },
  {
    id: 2,
    title: 'Legacy Museum — Sistema para Museo',
    description: 'Sistema web completo diseñado para la gestión de un museo. Incluye funcionalidades administrativas como control de acceso mediante inicio de sesión, manejo de colecciones y organización de información institucional.',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=600',
    tech: ['React', 'Web System', 'Authentication'],
    demo: 'https://legacy-museum.vercel.app/login',
    repo: 'https://github.com/disloyalcobra/LegacyMuseum'
  },
  {
    id: 3,
    title: 'App Médico UMAD',
    description: 'Sistema integral para el servicio médico de la Universidad Madero. Permite la gestión de consultas, historial clínico de estudiantes y administración de los servicios de salud universitarios. Acceso: dr.torres@medapp.com / password123',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    tech: ['Next.js', 'React', 'Healthcare System'],
    demo: 'https://app-medico-v2.vercel.app/',
    repo: 'https://github.com/disloyalcobra/AppMedicoV2'
  },
  {
    id: 4,
    title: 'Supply Game — Plataforma Educativa de Cadena de Suministro',
    description: 'Página web didáctica e interactiva enfocada en la enseñanza de la cadena de suministro. Integra un videojuego, quizzes temáticos y un sistema de rankings para hacer el aprendizaje dinámico y competitivo.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
    tech: ['React', 'Gamification', 'Education'],
    demo: 'https://supply-game.vercel.app/',
    repo: 'https://github.com/disloyalcobra/SupplyGame'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card glass-card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                    <ExternalLink size={18} /> Demo
                  </a>
                  {project.repo && (
                    <a href={project.repo} className="project-link" target="_blank" rel="noreferrer">
                      <Code2 size={18} /> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
