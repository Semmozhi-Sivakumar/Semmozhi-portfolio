import { motion } from 'framer-motion';
import { Terminal, Cloud, Code } from 'lucide-react';
import GalaxyBackground from './GalaxyBackground';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <GalaxyBackground density={0.5} glowOpacity={0.04} />
      <div className="container relative-z2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a final-year engineering student pursuing my B.Tech in Artificial Intelligence & Data Science at V.S.B. College of Engineering Technical Campus, Coimbatore.
            </p>
            <p>
              My journey in tech is driven by a deep curiosity for how things work. I am actively learning <strong>Python</strong>, <strong>Cloud Computing</strong>, and improving my problem-solving skills through Data Structures and Algorithms.
            </p>
            <p>
              Instead of just theoretical learning, I believe in building practical projects to apply my knowledge. I enjoy exploring new technologies and continuously pushing myself to become a better engineer.
            </p>
          </motion.div>

          <motion.div 
            className="about-cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about-card">
              <div className="card-icon"><Terminal size={24} className="text-accent" /></div>
              <h3>Problem Solving</h3>
              <p>Improving logical thinking and algorithms using Python.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon"><Cloud size={24} className="text-purple" /></div>
              <h3>Cloud Enthusiast</h3>
              <p>Learning AWS and deploying cloud-based solutions.</p>
            </div>

            <div className="about-card">
              <div className="card-icon"><Code size={24} className="text-accent" /></div>
              <h3>Practical Builder</h3>
              <p>Creating projects to bridge the gap between theory and reality.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
