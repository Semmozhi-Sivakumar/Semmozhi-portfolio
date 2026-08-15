import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LearningJourney from './components/LearningJourney';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ShootingStars from './components/ShootingStars';

function App() {
  return (
    <>
      <ShootingStars />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningJourney />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
