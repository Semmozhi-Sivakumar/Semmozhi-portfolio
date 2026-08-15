import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { Github } from './Icons';
import GalaxyBackground from './GalaxyBackground';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Glacial Lake Outburst Floods Early Warning System',
    category: 'Hardware Project',
    shortDescription: 'Sensor-based monitoring system to detect potential GLOF events.',
    description: 'Developed a comprehensive sensor-based monitoring system designed to detect potential Glacial Lake Outburst Floods. The system uses a temperature sensor to monitor glacier melting ranges and a float sensor to identify sudden changes in water levels. It provides real-time SMS notifications and visual LED alerts to support disaster management and early warning procedures.',
    tags: ['Temperature Sensor', 'Float Sensor', 'SMS Alerts', 'LEDs', 'Hardware Sensors'],
    github: '#',
    demo: '#',
    problem: 'Glacial lakes can burst unexpectedly due to rapid melting or shifting ice, causing devastating downstream floods with little to no warning.',
    solution: 'An automated hardware monitoring system deployed at high-risk glacial lakes that tracks environmental metrics and triggers immediate alerts when thresholds are crossed.',
    contribution: 'Designed and assembled the hardware components, programmed the sensor logic, and integrated the SMS notification system.',
    outcome: 'Successfully created a working prototype capable of detecting water level anomalies and delivering real-time alerts.',
    image: '/project_1_glacier.jpg',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Cloud-Based Image Upload System',
    category: 'Software / Cloud Project',
    shortDescription: 'Cloud-based image upload system using Flask and AWS S3.',
    description: 'Developed a robust cloud-based image upload system using Flask as the backend framework and AWS S3 for scalable storage. The application efficiently handles image uploads, generates browser-accessible image URLs, and integrates securely with AWS through IAM roles and Boto3.',
    tags: ['Python', 'Flask', 'AWS S3', 'Boto3', 'IAM'],
    github: '#',
    demo: '#',
    problem: 'Local storage for web applications is not scalable or reliable for handling large volumes of user-uploaded images.',
    solution: 'Leveraged AWS S3 cloud storage to decouple image hosting from the application server, ensuring high availability and scalability.',
    contribution: 'Built the Flask REST API, configured AWS S3 buckets, implemented secure IAM access, and wrote the Boto3 integration scripts.',
    outcome: 'A fully functional image upload service that reliably stores images in the cloud and retrieves them instantly.',
    image: '/project_2_cloud.jpg',
    githubUrl: 'https://github.com/Semmozhi-Sivakumar/cloud-image-upload-system'
  },
  {
    id: 3,
    title: 'Runbook Following Agent',
    category: 'AI / Automation Project',
    shortDescription: 'AI agent that follows predefined runbooks for operational tasks.',
    description: 'A Python-based intelligent agent designed to follow predefined runbooks to assist with operational tasks and automate step-by-step procedures. This project demonstrates practical applications of AI in automating repetitive technical processes.',
    tags: ['Python', 'AI Agents', 'Automation', 'Runbooks'],
    github: '#',
    demo: '#',
    problem: 'Manual execution of operational runbooks is time-consuming, prone to human error, and difficult to scale across large infrastructures.',
    solution: 'An automated agent that parses, interprets, and executes runbook instructions autonomously while logging its progress.',
    contribution: 'Developed the core Python logic for interpreting runbook structures and the execution engine that performs the automated steps.',
    outcome: 'Reduced manual intervention for standardized operational tasks by allowing the agent to follow procedural steps accurately.',
    image: '/project_3_ai.jpg',
    githubUrl: 'https://github.com/Semmozhi-Sivakumar/runbook-agent'
  }
];

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content glass-panel"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>

          <div className="modal-header">
            <span className="modal-category text-accent">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>

          <div className="modal-body">
            <div className="modal-section">
              <h3>Overview</h3>
              <p>{project.description}</p>
            </div>
            
            <div className="modal-grid">
              <div className="modal-section">
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div className="modal-section">
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </div>
            </div>

            <div className="modal-section">
              <h3>My Contribution</h3>
              <p>{project.contribution}</p>
            </div>

            <div className="modal-section">
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
            </div>

            <div className="modal-section">
              <h3>Technologies Used</h3>
              <div className="tags-container">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-footer modal-footer-github">
            <a 
              href={project.githubUrl} 
              className={`btn btn-github ${project.githubUrl === '#' ? 'disabled' : ''}`} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-disabled={project.githubUrl === '#'}
            >
              <Github size={20} /> GitHub Repository <ArrowRight size={18} className="arrow-icon" />
            </a>
            
            <div className="github-coming-soon">
              <span className="github-coming-soon-title">Code / Documentation</span>
              Coming soon
            </div>

            {project.demo !== '#' && (
              <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const previewRef = useRef(null);

  const handleMouseMove = (e) => {
    if (previewRef.current && hoveredProject) {
      const { clientX, clientY } = e;
      const previewEl = previewRef.current;
      const width = previewEl.offsetWidth || 320; // fallback width
      const height = previewEl.offsetHeight || 180; // fallback height
      const offset = 25; // 25px away from cursor
      
      let x = clientX + offset;
      let y = clientY + offset;
      
      // Boundary checking
      if (x + width > window.innerWidth) {
        x = clientX - width - offset;
      }
      if (y + height > window.innerHeight) {
        y = clientY - height - offset;
      }
      
      previewEl.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="projects" onMouseMove={handleMouseMove}>
      <GalaxyBackground density={0.6} glowOpacity={0.03} />
      <div className="container relative-z2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {projectData.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card-wrapper" 
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-card glass-panel" onClick={() => { if(window.innerWidth <= 992) setSelectedProject(project); }}>
                <div className="project-card-inner">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-inline-image" 
                  />
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                  
                  <div className="tags-container">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tag">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  <div className="project-actions">
                    <button 
                      className="btn btn-primary w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Details <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Cursor following project preview */}
      <div 
        ref={previewRef} 
        className={`project-preview-container ${hoveredProject ? 'active' : ''}`}
      >
        <img 
          src={hoveredProject?.image || projectData[0].image} 
          alt="Project Preview" 
          className="project-preview-image" 
        />
      </div>
    </section>
  );
};

export default Projects;
