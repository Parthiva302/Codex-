# Stellar 3D Portfolio Starter

A vibrant React + Three.js portfolio starter focused on **3D visuals, animations, and accessibility**.

## Why this stack
- **React + Vite** for fast iteration.
- **Three.js via React Three Fiber + Drei** for immersive 3D scenes.
- **Framer Motion** for smooth section and component transitions.

## Included features
1. Dynamic 3D animated background scene with orbital controls.
2. Animated transitions for hero and modal interactions.
3. Interactive project cards with 3D tilt + hover effects.
4. Responsive layout with keyboard-accessible navigation.
5. Multiple theme palettes and optional dark/light override.
6. CTA + contact form for conversions.

## File structure

```text
.
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── data
    │   └── projects.js
    └── components
        ├── Footer.jsx
        ├── Navbar.jsx
        ├── ProjectCard3D.jsx
        ├── ProjectModal.jsx
        └── Scene3D.jsx
```

## 3D setup snippet

```jsx
<Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
  <ambientLight intensity={1.2} />
  <directionalLight position={[2, 1, 3]} intensity={1.5} color="#9d7dff" />
  <Stars radius={70} depth={50} count={2500} factor={5} fade />
  <Sphere args={[1.4, 128, 128]}>
    <MeshDistortMaterial color="#7c4dff" distort={0.45} speed={2.5} />
  </Sphere>
</Canvas>
```

## Animation snippet

```jsx
<motion.article
  animate={{ rotateX: rotate.x, rotateY: rotate.y }}
  whileHover={{ scale: 1.04 }}
  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
>
  {/* project card content */}
</motion.article>
```

## Run instructions

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Suggested enhancements
- Add section-level route transitions with `framer-motion` + React Router.
- Replace demo project data with CMS-backed content.
- Add postprocessing bloom and custom shaders for hero visuals.
- Deploy on Vercel, Netlify, or Cloudflare Pages.

## Assumptions and constraints
- Assumed preference for **Option A (React)**.
- If you prefer Angular, Babylon.js, or a static no-framework setup, architecture can be ported.
