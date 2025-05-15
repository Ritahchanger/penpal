'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {

  theme: Theme;

  toggleTheme: () => void;

}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const [theme, setTheme] = useState<Theme>('light');

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {

    const stored = localStorage.getItem('theme') as Theme;

    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = stored || (userPrefersDark ? 'dark' : 'light');

    setTheme(initialTheme);

    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    setHasMounted(true);

  }, []);

  const toggleTheme = () => {

    const newTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);

    setTheme(newTheme);

    document.documentElement.classList.toggle('dark', newTheme === 'dark');

  };


  if (!hasMounted) return null;

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {children}

    </ThemeContext.Provider>

  );
};

export const useTheme = (): ThemeContextType => {

  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  
  return context;
};
