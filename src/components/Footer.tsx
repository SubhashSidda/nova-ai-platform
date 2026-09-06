import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Disc as Discord,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const { isLight, isMidnight } = useTheme();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setSubscribed(true);
  };

  return (
    <footer
      id="footer"
      className={`border-t text-sm transition-colors duration-200 ${
        isLight
          ? 'bg-slate-100 border-slate-200 text-slate-600'
          : isMidnight
          ? 'bg-[#060913] border-[#1a2744] text-slate-400'
          : 'bg-slate-950 border-slate-800/80 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b ${
          isLight ? 'border-slate-200' : 'border-slate-800/80'
        }`}>
          {/* Brand Info & Newsletter (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-500 text-white shadow-md shadow-cyan-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                NOVA
              </span>
            </div>

            <p className={`text-sm max-w-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Build Better. Work Smarter.
              <br />
              The enterprise-grade AI productivity platform orchestrating modern engineering, product, and operations teams.
            </p>

            {/* Newsletter Subscription with validation */}
            <div className="pt-2">
              <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}>
                Subscribe to the NOVA AI Dispatch
              </div>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm">
                  <div className="flex items-center gap-2">
                    <input
                      id="footer-newsletter-input"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterError) setNewsletterError('');
                      }}
                      placeholder="you@company.com"
                      className={`flex-1 px-3.5 py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                          : 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                      }`}
                    />
                    <button
                      id="footer-newsletter-submit"
                      type="submit"
                      className="px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {newsletterError && (
                    <p className="text-[11px] text-rose-500 font-medium">
                      {newsletterError}
                    </p>
                  )}
                </form>
              ) : (
                <div className={`flex items-center gap-2 text-xs p-2.5 rounded-lg border max-w-sm ${
                  isLight
                    ? 'text-emerald-800 bg-emerald-50 border-emerald-300'
                    : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                }`}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                  <span>Subscribed! You&apos;ll receive our weekly engineering digest.</span>
                </div>
              )}
            </div>

            {/* Live Operational Status */}
            <div className="pt-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs ${
                isLight
                  ? 'bg-white border-slate-200 text-slate-700 shadow-xs'
                  : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Systems: 100% Operational</span>
                <span className={isLight ? 'text-slate-300' : 'text-slate-600'}>•</span>
                <span className={`font-mono text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>SOC2 Type II</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: Product */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Autonomous Routing
                </a>
              </li>
              <li>
                <a href="#product" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Neural Context Memory
                </a>
              </li>
              <li>
                <a href="#how-it-works" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Integrations &amp; API
                </a>
              </li>
              <li>
                <a href="#pricing" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Security &amp; Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Solutions */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#solutions" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  For Engineering Teams
                </a>
              </li>
              <li>
                <a href="#solutions" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  For Product Managers
                </a>
              </li>
              <li>
                <a href="#solutions" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  For Marketing &amp; Growth
                </a>
              </li>
              <li>
                <a href="#solutions" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  For Operations &amp; HR
                </a>
              </li>
              <li>
                <a href="#pricing" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Company & Legal */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Company &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  About NOVA
                </a>
              </li>
              <li>
                <a href="#testimonials" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#faq" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#faq" className={`transition-colors ${isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'}`}>
                  Security Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isLight ? 'text-slate-500' : 'text-slate-400'
        }`}>
          <div>
            &copy; 2026 NOVA Technologies Inc. All rights reserved. &bull; Tagline: Build Better. Work Smarter.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isLight 
                  ? 'bg-white hover:bg-slate-200 border border-slate-200 text-slate-700' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white'
              }`}
              aria-label="NOVA on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isLight 
                  ? 'bg-white hover:bg-slate-200 border border-slate-200 text-slate-700' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400'
              }`}
              aria-label="NOVA on Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isLight 
                  ? 'bg-white hover:bg-slate-200 border border-slate-200 text-slate-700' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400'
              }`}
              aria-label="NOVA on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isLight 
                  ? 'bg-white hover:bg-slate-200 border border-slate-200 text-slate-700' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-violet-400'
              }`}
              aria-label="NOVA on Discord Community"
            >
              <Discord className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
