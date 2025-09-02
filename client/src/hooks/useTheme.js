// hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = (defaultTheme) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Get theme from localStorage on initial load
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const setSelectedTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem('selectedTheme', themeName);
    
    // Update the HTML class for Tailwind dark mode
    if (themeName === 'Dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { selectedTheme: theme, setSelectedTheme };
};