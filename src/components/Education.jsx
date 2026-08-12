import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'V.S.B. College of Engineering Technical Campus, Coimbatore',
    period: '2023 – 2027',
    score: 'CGPA: 8.4',
    featured: true
  },
  {
    id: 2,
    degree: 'Higher Secondary Education',
    institution: 'Devi Matric Higher Secondary School',
    period: '2022 – 2023',
    score: '83.1%',
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
    id: 4,
    degree: 'Primary Education',
    institution: 'St. Pauls Matriculation School',
    period: '2020 – 2021',
    score: '',
    featured: false
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`edu-card glass-panel ${edu.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="edu-icon-container">
                <div className="edu-icon">
                  <GraduationCap size={edu.featured ? 32 : 24} />
                </div>
                {index !== educationData.length - 1 && <div className="edu-line"></div>}
              </div>
              
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-period">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <h4 className="edu-institution">{edu.institution}</h4>
                {edu.score && (
                  <div className="edu-score">
                    <span className="score-badge">{edu.score}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
