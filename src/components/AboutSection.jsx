import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8">
        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className="leading-8 text-slate-300">
          I am a developer focused on building performant web products with thoughtful UX. My current journey blends full-stack development,
          AI integrations, and pragmatic problem solving to deliver products that are reliable, useful, and delightful to use.
        </p>
      </motion.div>
    </section>
  );
}
