import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isLight } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-btn"
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-xl transition-all duration-200 cursor-pointer hover:-translate-y-1 active:translate-y-0 ${
        isLight
          ? 'bg-white text-cyan-600 border border-slate-300 hover:bg-slate-50 hover:border-cyan-500 shadow-slate-300/50'
          : 'bg-slate-900/90 text-cyan-400 border border-slate-700/80 hover:bg-slate-800 hover:border-cyan-400/60 hover:text-white'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
