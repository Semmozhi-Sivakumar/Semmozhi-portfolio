import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2, Circle } from 'lucide-react';
import './LearningJourney.css';

const journeySteps = [
  {
    id: 1,
    title: 'Python Fundamentals',
    description: 'Mastered the basics of Python syntax, variables, and basic operators.',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Functions & Loops',
    description: 'Understanding control flow, defining reusable functions, and scoping.',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Data Structures: Strings & Lists',
    description: 'Working with core data types, string manipulation, and list operations.',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Advanced Lists & Arrays',
    description: 'List comprehensions, multi-dimensional arrays, and efficient data handling.',
    status: 'completed'
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms',
    description: 'Currently improving my problem-solving skills with core DSA concepts.',
    status: 'current'
  },
  {
    id: 6,
    title: 'LeetCode Practice',
    description: 'Applying DSA knowledge to solve practical coding challenges.',
    status: 'current'
  },
  {
    id: 7,
    title: 'Cloud Computing (AWS)',
    description: 'Learning the fundamentals of cloud infrastructure and AWS services.',
    status: 'current'
  }
];

const LearningJourney = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="journey" className="learning-journey">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Learning Journey</h2>
          <div className="section-line"></div>
        </motion.div>

        <p className="journey-subtitle">
          My continuous path of learning and improving technical skills.
        </p>

        <div className="timeline">
          {journeySteps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={`timeline-item ${step.status}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                {step.status === 'completed' ? (
                  <CheckCircle2 size={24} className="marker-icon text-purple" />
                ) : (
                  <Circle size={24} className="marker-icon text-accent" />
                )}
                {index !== journeySteps.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div 
                className="timeline-content glass-panel"
                onClick={() => toggleExpand(step.id)}
              >
                <div className="timeline-header">
                  <h3>{step.title}</h3>
                  <button className="expand-btn" aria-label="Toggle details">
                    {expandedId === step.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                
                <AnimatePresence>
                  {expandedId === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="timeline-details"
                    >
                      <p>{step.description}</p>
                      <span className={`status-badge ${step.status}`}>
                        {step.status === 'completed' ? 'Learned' : 'Currently Improving'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
