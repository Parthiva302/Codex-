import { motion } from 'framer-motion';
import { FaBrain, FaServer, FaCode } from 'react-icons/fa';
import { techGroups } from '../data/portfolioData';

const icons = [FaCode, FaServer, FaBrain];

export function TechStackSection() {
  return (
    <section id="stack" className="section-wrap">
      <h2 className="mb-8 text-3xl font-bold">Tech Stack</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {techGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              key={group.title}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6"
            >
              <Icon className="mb-4 text-2xl text-neon" />
              <h3 className="mb-3 text-xl font-semibold">{group.title}</h3>
              <ul className="space-y-2 text-slate-300">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
