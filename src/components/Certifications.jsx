import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import GalaxyBackground from './GalaxyBackground';
import './Certifications.css';

const certificationsData = [
  {
    id: 1,
    title: 'AWS Cloud Practitioner - Preparation Roadmap',
    issuer: 'Amazon Web Services',
    link: '#'
  },
  {
    id: 2,
    title: 'Introduction to Career Data Analysis',
    issuer: 'Data Science Platform',
    link: '#'
  },
  {
    id: 3,
    title: 'Storage in Cloud, Amazon S3',
    issuer: 'Amazon Web Services',
    link: '#'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <GalaxyBackground density={0.5} glowOpacity={0.04} />
      <div className="container relative-z2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Certifications</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cert-icon">
                <Award size={28} className="text-purple" />
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <a href={cert.link} className={`cert-link ${cert.link === '#' ? 'disabled' : ''}`} aria-label="View Certification" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
