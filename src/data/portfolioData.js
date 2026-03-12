export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' }
];

export const techGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB']
  },
  {
    title: 'AI / ML',
    items: ['Python', 'LangChain', 'LLMs', 'Prompt Engineering']
  }
];

export const projects = [
  {
    title: 'AI Resume Optimizer',
    summary: 'LLM-powered resume analyzer with ATS score and personalized suggestions.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'LangChain', 'OpenAI API'],
    github: 'https://github.com/yourname/ai-resume-optimizer',
    live: 'https://ai-resume-optimizer.vercel.app'
  },
  {
    title: 'DevCollab Platform',
    summary: 'Realtime collaboration space for developers with threaded code discussions.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/yourname/devcollab',
    live: 'https://devcollab.vercel.app'
  },
  {
    title: 'InsightDash Analytics',
    summary: 'Modern business dashboard with animated KPI panels and predictive insights.',
    image:
      'https://images.unsplash.com/photo-1551281044-8b9a0b5f6c6b?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Tailwind', 'Chart.js'],
    github: 'https://github.com/yourname/insightdash',
    live: 'https://insightdash.vercel.app'
  }
];
