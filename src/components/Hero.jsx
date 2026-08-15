import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import GalaxyBackground from './GalaxyBackground';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <GalaxyBackground density={1} glowOpacity={0.08} />
      <div className="container hero-container">
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-photo-container">
            <img src="/profile.jpg" alt="Semmozhi A S" className="profile-photo" />
          </div>
        </motion.div>

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="greeting"
          >
            Hi, I'm Semmozhi
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Final-Year Engineering Student <br />
            <span className="text-accent">Python Learner</span> & <br />
            <span className="text-purple">Cloud Enthusiast</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Pursuing a B.Tech in Artificial Intelligence & Data Science. I am actively exploring Python, cloud computing, and problem solving while building practical projects that prepare me for real-world engineering challenges.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="https://github.com/Semmozhi-Sivakumar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/semmozhisivakumar27" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FileText size={18} /> Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
