import { motion } from 'framer-motion';
import { Database, Server, Settings, Monitor, BookOpen } from 'lucide-react';
import GalaxyBackground from './GalaxyBackground';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Monitor size={20} />,
    skills: ['Python (Learning)'],
  },
  {
    title: 'Cloud Computing',
    icon: <Server size={20} />,
    skills: ['AWS (Learning)'],
  },
  {
    title: 'Database',
    icon: <Database size={20} />,
    skills: ['SQL Basics'],
  },
  {
    title: 'Operating System',
    icon: <Settings size={20} />,
    skills: ['Linux Basics'],
  },
  {
    title: 'Development & Tools',
    icon: <BookOpen size={20} />,
    skills: ['Git', 'GitHub', 'Flask', 'Boto3'],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="skills">
      <GalaxyBackground density={0.7} glowOpacity={0.05} />
      <div className="container relative-z2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </motion.div>

        <p className="skills-subtitle">
          Technologies I am currently learning and actively using in my practical projects.
        </p>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="skill-card glass-panel" variants={itemVariants}>
              <div className="skill-card-header">
                <div className="skill-icon text-accent">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
