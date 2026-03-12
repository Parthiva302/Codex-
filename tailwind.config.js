/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#060816',
        card: '#101528',
        cardSoft: '#171f38',
        accent: '#6d7bff',
        neon: '#1de9ff'
      },
      boxShadow: {
        glow: '0 10px 40px rgba(29, 233, 255, 0.18)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(109,123,255,0.2) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};
