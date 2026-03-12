export function GitHubSection() {
  return (
    <section id="github" className="section-wrap">
      <h2 className="mb-8 text-3xl font-bold">GitHub Insights</h2>
      <div className="grid gap-5 md:grid-cols-3">
        <img className="glass w-full rounded-2xl p-3" src="https://github-readme-stats.vercel.app/api?username=yourname&show_icons=true&theme=tokyonight" alt="GitHub stats" />
        <img className="glass w-full rounded-2xl p-3" src="https://github-readme-streak-stats.herokuapp.com/?user=yourname&theme=tokyonight" alt="GitHub streak" />
        <img className="glass w-full rounded-2xl p-3" src="https://github-readme-stats.vercel.app/api/top-langs/?username=yourname&layout=compact&theme=tokyonight" alt="Top languages" />
      </div>
    </section>
  );
}
