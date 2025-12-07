'use client';

export default function ThemeToggle() {
  return (
    <button 
      className="theme-toggle"
      onClick={() => {
        const html = document.documentElement;
        if (html.classList.contains('light')) {
          html.classList.remove('light');
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
          html.classList.add('light');
        }
      }}
      aria-label="Toggle theme"
    >
      ◐
    </button>
  );
}
