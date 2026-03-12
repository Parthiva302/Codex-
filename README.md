# Developer Portfolio 2026 (React + Tailwind)

Modern, dark-themed developer portfolio starter designed for Vercel deployment.

## Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Included sections
- Full-screen Hero with typing animation, avatar, and social/resume CTAs
- About with concise professional summary
- Tech Stack grouped into Frontend / Backend / AI-ML
- Project cards with preview image, stack tags, GitHub + live links, and hover motion
- GitHub insights (stats, streak, top languages)
- Achievements section
- Contact details + responsive contact form

## Project structure

```text
src/
  components/
    AboutSection.jsx
    AchievementsSection.jsx
    ContactSection.jsx
    Footer.jsx
    GitHubSection.jsx
    HeroSection.jsx
    Navbar.jsx
    ProjectsSection.jsx
    TechStackSection.jsx
  data/
    portfolioData.js
  App.jsx
  main.jsx
  styles.css
```

## Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Personalization checklist
- Replace `yourname` and profile links in section components/data.
- Update avatar URL and project screenshots with your assets.
- Change resume path (`/resume.pdf`) to your hosted file.
