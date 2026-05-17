import React from 'react';
import { Mail, MapPin, Send, Code2, Briefcase, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Contacto</h2>
        
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <h3>Hablemos de tu próximo proyecto</h3>
            <p>
              Actualmente estoy abierto a nuevas oportunidades y proyectos freelance. 
              Si tienes una pregunta o simplemente quieres saludar, ¡no dudes en escribirme!
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <Mail className="contact-icon" />
                <span>josepablomateosgamboa@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <MapPin className="contact-icon" />
                <span>Puebla, México</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/disloyalcobra" className="social-link" aria-label="GitHub" target="_blank" rel="noreferrer">
                <Code2 size={24} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Briefcase size={24} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
