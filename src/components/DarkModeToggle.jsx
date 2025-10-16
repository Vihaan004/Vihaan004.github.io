import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage and system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedMode ? JSON.parse(savedMode) : prefersDark;
    
    setIsDarkMode(shouldBeDark);
    applyDarkMode(shouldBeDark);
  }, []);

  const applyDarkMode = (isDark) => {
    const root = document.documentElement;
    
    if (isDark) {
      root.style.setProperty('--background-color', '#1a1a1a');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--border-color', '#ffffff');
      root.style.setProperty('--light-border-color', '#333333');
      root.style.setProperty('--hover-background', '#2a2a2a');
      root.style.setProperty('--card-shadow', '0 1px 3px rgba(255,255,255,0.1)');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      root.style.setProperty('--background-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--border-color', '#000000');
      root.style.setProperty('--light-border-color', '#e0e0e0');
      root.style.setProperty('--hover-background', '#f5f5f5');
      root.style.setProperty('--card-shadow', '0 1px 3px rgba(0,0,0,0.1)');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    applyDarkMode(newMode);
  };

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="toggle-icon">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className="toggle-icon">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
