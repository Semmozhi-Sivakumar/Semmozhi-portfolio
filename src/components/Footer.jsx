import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Semmozhi A S</h3>
            <p>Final-Year Engineering Student | Python Learner | Cloud Enthusiast</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/Semmozhi-Sivakumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/semmozhisivakumar27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tamizhsemmozhi25@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email me">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Semmozhi A S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
