import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Scene3D } from './components/Scene3D';
import { ProjectCard3D } from './components/ProjectCard3D';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { projects } from './data/projects';

const palettes = {
  vibrant: {
    '--bg': '#0b1020',
    '--bg-secondary': '#121933',
    '--text': '#f7f9ff',
    '--accent': '#7c4dff',
    '--accent-alt': '#00d4ff'
  },
  pastel: {
    '--bg': '#f6f2ff',
    '--bg-secondary': '#ece5ff',
    '--text': '#211a3d',
    '--accent': '#7b5cff',
    '--accent-alt': '#ff7ecf'
  },
  'dark-neon': {
    '--bg': '#06080f',
    '--bg-secondary': '#111423',
    '--text': '#dcf8ff',
    '--accent': '#16f4d0',
    '--accent-alt': '#bc47ff'
  }
};

export default function App() {
  const [palette, setPalette] = useState('vibrant');
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const themeStyles = useMemo(() => {
    const active = palettes[palette];
    const maybeOverride = darkMode
      ? {}
      : {
          '--bg': '#fcfdff',
          '--bg-secondary': '#ecf0f8',
          '--text': '#171a24'
        };

    return { ...active, ...maybeOverride };
  }, [darkMode, palette]);

  return (
    <div className="app" style={themeStyles}>
      <Scene3D />
      <Navbar
        palette={palette}
        onPaletteChange={setPalette}
        darkMode={darkMode}
        onDarkModeToggle={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <section className="hero" id="home">
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
            Build immersive digital experiences in 3D.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            A portfolio concept combining WebGL art direction, smooth transitions, and playful interactions.
          </motion.p>
          <a className="cta" href="#projects">
            Explore Projects
          </a>
        </section>

        <section id="projects" className="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard3D key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <h2>About the Studio</h2>
          <p>
            We blend storytelling, design systems, and real-time rendering to create memorable product experiences.
          </p>
        </section>

        <section id="contact" className="contact">
          <h2>Let&apos;s build your next immersive product</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" required />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
            <label htmlFor="message">Project Vision</label>
            <textarea id="message" rows="4" required />
            <button type="submit">Send inquiry</button>
          </form>
        </section>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Footer />
    </div>
  );
}
