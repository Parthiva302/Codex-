import { navLinks } from '../data/portfolioData';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">
          <span className="text-neon">&lt;/&gt;</span> DevPortfolio
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-neon focus-visible:text-neon">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
