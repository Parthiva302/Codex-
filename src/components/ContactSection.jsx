export function ContactSection() {
  return (
    <section id="contact" className="section-wrap pb-24">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3 text-slate-300">
          <p>Email: yourmail@example.com</p>
          <p>LinkedIn: linkedin.com/in/yourname</p>
          <p>GitHub: github.com/yourname</p>
        </div>

        <form className="glass grid gap-3 rounded-2xl p-6">
          <input className="rounded-lg border border-white/10 bg-cardSoft px-3 py-2" placeholder="Your name" required />
          <input className="rounded-lg border border-white/10 bg-cardSoft px-3 py-2" placeholder="Email" type="email" required />
          <textarea className="rounded-lg border border-white/10 bg-cardSoft px-3 py-2" rows="4" placeholder="Your message" required />
          <button className="rounded-lg bg-accent px-4 py-2 font-semibold hover:bg-indigo-400" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
