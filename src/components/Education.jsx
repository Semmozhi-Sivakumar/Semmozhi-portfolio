import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import GalaxyBackground from './GalaxyBackground';
import './Education.css';

const educationData = [
  {
    id: 4,
    degree: 'Primary Education',
    institution: 'St. Pauls Matriculation School',
    period: '2020 – 2021',
    score: '',
    featured: false
  },
  {
    id: 3,
    degree: 'Secondary Education',
    institution: 'Akshaya Academy',
    period: '2021 – 2022',
    score: '76.6%',
    featured: false
  },
  {
    id: 2,
    degree: 'Higher Secondary',
    institution: 'Devi Matric Higher Secondary School',
    period: '2022 – 2023',
    score: '83.1%',
    featured: false
  },
  {
    id: 1,
    degree: 'B.Tech AI & Data Science',
    institution: 'V.S.B. College of Engineering Technical Campus, Coimbatore',
    period: '2023 – Present',
    score: 'CGPA: 8.4',
    featured: true
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <GalaxyBackground density={0.5} glowOpacity={0.04} />
      <div className="container relative-z2">
        <div className="section-header">
          <h2 className="section-title">Education Journey</h2>
          <div className="section-line"></div>
        </div>

        <div className="education-timeline-container">
          <div className="timeline-line"></div>
          
          <div className="milestones-wrapper">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`milestone-node ${edu.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="milestone-indicator">
                  <div className="indicator-dot"></div>
                </div>

                <div className="milestone-card glass-panel">
                  <div className="milestone-header">
                    {edu.featured && (
                      <span className="status-badge">Currently Pursuing</span>
                    )}
                    <h3 className="milestone-degree">{edu.degree}</h3>
                    <div className="milestone-period">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="milestone-details">
                    <div className="milestone-institution">
                      <MapPin size={14} className="icon-subtle" />
                      <span>{edu.institution}</span>
                    </div>
                    {edu.score && (
                      <div className="milestone-score">
                        <span className="score-pill">{edu.score}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
