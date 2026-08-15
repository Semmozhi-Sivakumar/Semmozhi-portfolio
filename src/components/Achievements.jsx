import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import GalaxyBackground from './GalaxyBackground';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <GalaxyBackground density={0.5} glowOpacity={0.04} />
      <div className="container relative-z2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Achievements</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="achievement-card glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="achievement-icon">
            <Trophy size={32} className="text-accent" />
          </div>
          <div className="achievement-content">
            <h3>National Level Conference Participant</h3>
            <p>
              Participated in the National Level Conference on Renewable Energy and Environmental Sustainability for presenting the idea <strong>"AI-Based Urban Stress Mapping System"</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
