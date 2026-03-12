import { motion } from 'framer-motion';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>
          <strong>Category:</strong> {project.category}
        </p>
        <p>
          <strong>Tech stack:</strong> {project.tech.join(', ')}
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </motion.div>
    </div>
  );
}
