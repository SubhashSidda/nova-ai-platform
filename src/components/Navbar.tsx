import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Play, Shield, Sun, Moon, Palette } from 'lucide-react';
import { NAV_LINKS } from '../data/landingData';
import { useTheme, ThemeMode } from '../context/ThemeContext';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { theme, setTheme, toggleTheme, isLight, isMidnight } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['features', 'product', 'how-it-works', 'solutions', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const themeOptions: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { id: 'dark', label: 'Dark Obsidian', icon: <Moon className="w-3.5 h-3.5 text-cyan-400" /> },
    { id: 'light', label: 'Crisp Light', icon: <Sun className="w-3.5 h-3.5 text-amber-500" /> },
    { id: 'midnight', label: 'Midnight Blue', icon: <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
            : isMidnight
            ? 'bg-[#060913]/90 backdrop-blur-md border-b border-[#16203a] shadow-lg shadow-black/40'
            : 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="NOVA AI Productivity Platform Homepage"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-500 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight flex items-center gap-1.5 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                NOVA
                <span className={`text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full border ${
                  isLight 
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-200' 
                    : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                }`}>
                  AI OS
                </span>
              </span>
              <span className={`text-[11px] -mt-0.5 tracking-wide hidden sm:inline-block ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Build Better. Work Smarter.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? isLight
                        ? 'text-cyan-700 bg-cyan-50'
                        : 'text-cyan-400 bg-cyan-500/10'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons & Theme Controls */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Switcher Button / Dropdown */}
            <div className="relative">
              <button
                id="theme-switcher-btn"
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-700'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
                }`}
                title={`Current Theme: ${theme.toUpperCase()} (Click to change)`}
                aria-label="Change Theme"
              >
                {theme === 'light' ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : theme === 'midnight' ? (
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                ) : (
                  <Moon className="w-4 h-4 text-cyan-400" />
                )}
                <span className="capitalize">{theme}</span>
              </button>

              {/* Theme Dropdown Menu */}
              {themeDropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-44 rounded-xl border p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 ${
                    isLight
                      ? 'bg-white border-slate-200 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-100'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 text-slate-400">
                    Select Theme
                  </div>
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setTheme(opt.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        theme === opt.id
                          ? isLight
                            ? 'bg-cyan-50 text-cyan-800 font-semibold'
                            : 'bg-cyan-500/15 text-cyan-300 font-semibold'
                          : isLight
                          ? 'hover:bg-slate-100 text-slate-700'
                          : 'hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {opt.icon}
                        {opt.label}
                      </span>
                      {theme === opt.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Watch Demo Button */}
            <button
              id="nav-watch-demo-btn"
              onClick={onOpenDemo}
              type="button"
              className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-150 cursor-pointer ${
                isLight
                  ? 'text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border-slate-200 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-cyan-500 fill-cyan-500/20" />
              <span>Watch Demo</span>
            </button>

            {/* Get Started Button */}
            <button
              id="nav-get-started-btn"
              onClick={onOpenTrial}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-700'
                  : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
              title={`Switch Theme (Current: ${theme})`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : theme === 'midnight' ? (
                <Sparkles className="w-5 h-5 text-indigo-400" />
              ) : (
                <Moon className="w-5 h-5 text-cyan-400" />
              )}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                isLight
                  ? 'text-slate-700 bg-white hover:bg-slate-100 border-slate-200'
                  : 'text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border-slate-800'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className={`md:hidden backdrop-blur-xl border-b px-4 pt-3 pb-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200 ${
            isLight
              ? 'bg-white/95 border-slate-200'
              : isMidnight
              ? 'bg-[#060913]/95 border-[#16203a]'
              : 'bg-slate-950/95 border-slate-800'
          }`}
        >
          {/* Mobile Theme Switcher Bar */}
          <div className="flex items-center justify-between p-2.5 mb-3 rounded-xl border bg-opacity-50">
            <span className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              Theme Palette
            </span>
            <div className="flex items-center gap-1">
              {themeOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTheme(opt.id)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors flex items-center gap-1 ${
                    theme === opt.id
                      ? isLight
                        ? 'bg-cyan-500 text-white font-bold'
                        : 'bg-cyan-500 text-slate-950 font-bold'
                      : isLight
                      ? 'bg-slate-100 text-slate-600'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {opt.icon}
                  <span className="capitalize">{opt.id}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-lg text-base font-medium border-l-2 transition-colors ${
                  isLight
                    ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 border-transparent hover:border-cyan-500'
                    : 'text-slate-200 hover:text-white hover:bg-slate-900 border-transparent hover:border-cyan-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className={`pt-4 mt-3 border-t flex flex-col gap-3 ${
            isLight ? 'border-slate-200' : 'border-slate-800/80'
          }`}>
            <button
              id="mobile-watch-demo-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              type="button"
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors ${
                isLight
                  ? 'text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-300'
                  : 'text-slate-200 bg-slate-900 hover:bg-slate-800 border-slate-700'
              }`}
            >
              <Play className="w-4 h-4 text-cyan-500 fill-cyan-500/20" />
              <span>Watch Interactive Demo</span>
            </button>
            <button
              id="mobile-get-started-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
            >
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>No credit card required • Instant setup</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
