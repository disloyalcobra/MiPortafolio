import React from 'react';
import { Code2, Layout, Database, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frameworks Web',
    icon: <Layout size={24} />,
    skills: [
      { name: 'Angular + Ionic', level: 90 },
      { name: 'React / Next.js', level: 85 },
      { name: '.NET / C#', level: 80 },
      { name: 'Astro', level: 75 }
    ]
  },
  {
    title: 'Lenguajes & Backend',
    icon: <Code2 size={24} />,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C++ / C#', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'Visual Basic', level: 70 }
    ]
  },
  {
    title: 'Análisis de Datos & BD',
    icon: <Database size={24} />,
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'SQL Server', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'Python (pandas/NumPy)', level: 80 }
    ]
  },
  {
    title: 'Herramientas & Gestión',
    icon: <Wrench size={24} />,
    skills: [
      { name: 'Scrum / Jira', level: 95 },
      { name: 'ITIL 4', level: 90 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Redes LAN/WAN', level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Habilidades Técnicas</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="skill-card glass-card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
