import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.title} whileHover={{ scale: 1.02 }} className="glass overflow-hidden rounded-2xl">
            <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
            <div className="space-y-4 p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a className="text-neon hover:underline" href={project.github}>
                  <FaGithub className="mr-1 inline" /> GitHub
                </a>
                <a className="text-neon hover:underline" href={project.live}>
                  <FaExternalLinkAlt className="mr-1 inline" /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
