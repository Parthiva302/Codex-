export function Navbar({ palette, onPaletteChange, darkMode, onDarkModeToggle }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        Nova<span>3D</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="controls">
        <label>
          Palette
          <select value={palette} onChange={(e) => onPaletteChange(e.target.value)}>
            <option value="vibrant">Vibrant</option>
            <option value="pastel">Pastel</option>
            <option value="dark-neon">Dark Neon</option>
          </select>
        </label>
        <button type="button" onClick={onDarkModeToggle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}
