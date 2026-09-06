import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'light' | 'midnight';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  isLight: boolean;
  isDark: boolean;
  isMidnight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nova-theme') as ThemeMode;
      if (saved && ['dark', 'light', 'midnight'].includes(saved)) {
        return saved;
      }
    }
    return 'dark';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nova-theme', newTheme);
    }
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('midnight');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-cyan-500/30 selection:text-cyan-900 overflow-x-hidden transition-colors duration-200';
    } else if (theme === 'midnight') {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.className = 'bg-[#060913] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden transition-colors duration-200';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden transition-colors duration-200';
    }
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark',
    isMidnight: theme === 'midnight',
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
