const achievements = [
  'Built and deployed multiple full-stack applications with production-grade architecture.',
  'Actively exploring AI agents, LLM workflows, and practical integration patterns.',
  'Consistent open-source contributions and community-driven learning journey.'
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-wrap">
      <h2 className="mb-8 text-3xl font-bold">Achievements & Growth</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((item) => (
          <article key={item} className="glass rounded-2xl p-6 text-slate-300">
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
