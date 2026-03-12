import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const roles = ['Hi, I am Your Name.', 'I build scalable full-stack apps.', 'I craft AI-powered user experiences.'];

export function HeroSection() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const current = roles[roleIndex];

    const interval = setInterval(() => {
      charIndex += 1;
      setText(current.slice(0, charIndex));
      if (charIndex >= current.length) {
        clearInterval(interval);
        setTimeout(() => setRoleIndex((prev) => (prev + 1) % roles.length), 1400);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section id="home" className="section-wrap flex min-h-screen flex-col items-center justify-center pt-24 md:flex-row md:justify-between">
      <div className="max-w-2xl space-y-6">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-neon">
          Modern 2026 Developer Portfolio
        </motion.p>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          <span className="typing-cursor">{text}</span>
        </h1>
        <p className="text-lg text-slate-300">Full Stack Developer | AI Enthusiast</p>
        <div className="flex flex-wrap gap-3">
          <a className="rounded-full bg-accent px-5 py-2.5 font-semibold text-white hover:bg-indigo-400" href="https://github.com/yourname">
            <FaGithub className="mr-2 inline" /> GitHub
          </a>
          <a className="rounded-full border border-white/20 px-5 py-2.5 font-semibold text-slate-200 hover:border-neon hover:text-neon" href="https://linkedin.com/in/yourname">
            <FaLinkedin className="mr-2 inline" /> LinkedIn
          </a>
          <a className="rounded-full border border-neon/40 px-5 py-2.5 font-semibold text-neon hover:bg-neon/10" href="/resume.pdf">
            <FaFileDownload className="mr-2 inline" /> Resume
          </a>
        </div>
      </div>

      <motion.img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=600&q=80"
        alt="Developer avatar"
        className="glass mt-10 h-56 w-56 rounded-3xl object-cover shadow-glow md:mt-0 md:h-72 md:w-72"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      />
    </section>
  );
}
