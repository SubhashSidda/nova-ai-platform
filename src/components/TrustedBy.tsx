import React from 'react';
import { TRUSTED_COMPANIES } from '../data/landingData';
import { ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TrustedBy: React.FC = () => {
  const { isLight, isMidnight } = useTheme();

  return (
    <section
      id="trusted-by"
      className={`py-16 border-y relative transition-colors duration-200 ${
        isLight
          ? 'bg-slate-100/60 border-slate-200'
          : isMidnight
          ? 'bg-[#0a0f1d]/70 border-[#1a2744]'
          : 'bg-slate-950/70 border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className={`text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>Trusted by forward-thinking leaders at 50,000+ modern engineering and product teams</span>
          </p>
        </div>

        {/* Responsive Logo Grid / Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-center">
          {TRUSTED_COMPANIES.map((company) => (
            <div
              key={company.name}
              className={`group flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isLight
                  ? 'bg-white hover:bg-slate-50 border-slate-200/90 hover:border-cyan-400 shadow-sm'
                  : 'bg-slate-900/40 hover:bg-slate-900/90 border-slate-800/60 hover:border-cyan-500/30'
              }`}
            >
              <div className="flex items-center gap-2">
                {/* Clean geometric custom brand icon */}
                <div className={`w-7 h-7 rounded-lg border flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                  isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-800 group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:border-cyan-300'
                    : 'bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-cyan-500/20 group-hover:to-indigo-500/20 border-slate-700/60 group-hover:border-cyan-500/40 text-slate-300 group-hover:text-cyan-300'
                }`}>
                  {company.symbol}
                </div>
                <span className={`text-sm sm:text-base font-bold transition-colors tracking-tight ${
                  isLight ? 'text-slate-800 group-hover:text-slate-950' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {company.name}
                </span>
              </div>
              <span className={`text-[11px] transition-colors mt-1 ${
                isLight ? 'text-slate-500 group-hover:text-cyan-700' : 'text-slate-400 group-hover:text-cyan-400/80'
              }`}>
                {company.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
