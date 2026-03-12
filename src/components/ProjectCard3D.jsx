import { useState } from 'react';
import { motion } from 'framer-motion';

export function ProjectCard3D({ project, onOpen }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left - width / 2) / 25;
    const y = (event.clientY - top - height / 2) / 25;
    setRotate({ x: -y, y: x });
  };

  return (
    <motion.article
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y, scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      style={{ '--accent': project.color }}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      onClick={() => onOpen(project)}
      aria-label={`Open ${project.title} details`}
    >
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  );
}
