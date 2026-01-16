'use client';

import { useEffect } from 'react';

const THEME_KEY = 'theme';

function applyTheme(theme: 'light' | 'dark') {
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(theme);
}

export default function ThemeToggle() {
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(THEME_KEY);
      if (stored === 'light' || stored === 'dark') {
        applyTheme(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <button 
      className="theme-toggle"
      onClick={() => {
        const html = document.documentElement;
        const nextTheme: 'light' | 'dark' = html.classList.contains('light') ? 'dark' : 'light';
        applyTheme(nextTheme);
        try {
          sessionStorage.setItem(THEME_KEY, nextTheme);
        } catch {
          // ignore
        }
      }}
      aria-label="Toggle theme"
    >
      ◐
    </button>
  );
}
