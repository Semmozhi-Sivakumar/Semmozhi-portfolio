import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import GalaxyBackground from './GalaxyBackground';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <GalaxyBackground density={0.8} glowOpacity={0.06} />
      <div className="container relative-z2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="contact-content glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Let's Connect</h3>
          <p>
           I’m open to internships, collaborations, and opportunities where I can apply and grow my skills in cloud computing and Python.
           Let’s connect and explore opportunities to build, learn, and create with technology.
          </p>
          
          <div className="contact-actions">
            <div className="contact-buttons-row">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tamizhsemmozhi25@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary email-btn">
                <Mail size={20} /> Email Me Directly &rarr;
              </a>
              <a href="tel:7845250453" aria-label="Call me" className="btn btn-outline phone-btn">
                <Phone size={20} /> 7845250453
              </a>
            </div>
            
            <div className="contact-socials">
              <a href="https://github.com/Semmozhi-Sivakumar" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/semmozhisivakumar27" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
