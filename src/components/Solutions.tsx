import React, { useState } from 'react';
import { USE_CASES } from '../data/landingData';
import {
  Code2,
  Compass,
  Megaphone,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Quote
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SolutionsProps {
  onOpenTrial: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenTrial }) => {
  const [activeTabId, setActiveTabId] = useState<string>(USE_CASES[0].id);
  const { isLight, isMidnight } = useTheme();

  const activeUseCase = USE_CASES.find((uc) => uc.id === activeTabId) || USE_CASES[0];

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="solutions"
      className={`py-24 relative overflow-hidden transition-colors duration-200 ${
        isLight
          ? 'bg-white'
          : isMidnight
          ? 'bg-[#060913]'
          : 'bg-slate-950'
      }`}
    >
      {/* Background ambient glow */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-[140px] pointer-events-none rounded-full ${
        isLight ? 'bg-indigo-400/5' : 'bg-indigo-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-cyan-50 border border-cyan-200 text-cyan-800'
              : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
          }`}>
            <span>Tailored Solutions</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Built for Every High-Velocity Team
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Discover how cross-functional teams use NOVA to eliminate busywork and deliver projects in record time.
          </p>
        </div>

        {/* Team Role Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {USE_CASES.map((uc) => {
            const isSelected = uc.id === activeUseCase.id;
            return (
              <button
                key={uc.id}
                id={`use-case-btn-${uc.id}`}
                type="button"
                onClick={() => setActiveTabId(uc.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                    : isLight
                    ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-700 border border-slate-200'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {getRoleIcon(uc.iconName)}
                <span>{uc.role}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Content Card */}
        <div className={`rounded-3xl p-6 sm:p-10 lg:p-12 border shadow-2xl transition-colors duration-200 ${
          isLight
            ? 'bg-slate-50 border-slate-200 shadow-xl'
            : isMidnight
            ? 'bg-[#0a0f1d] border-[#1a2744]'
            : 'bg-slate-900/70 border-slate-800'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-md border ${
                isLight
                  ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                  : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
              }`}>
                {activeUseCase.role} Workflow
              </div>

              <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {activeUseCase.headline}
              </h3>

              <p className={`text-base leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                {activeUseCase.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {activeUseCase.bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-600 mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className={`text-sm sm:text-base font-normal ${
                      isLight ? 'text-slate-700' : 'text-slate-300'
                    }`}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  id={`solution-cta-btn-${activeUseCase.id}`}
                  onClick={onOpenTrial}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer"
                >
                  <span>Deploy for {activeUseCase.role}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card with Metrics and Quote */}
            <div className="lg:col-span-5 space-y-6">
              {/* Highlight Metric Card */}
              <div className={`rounded-2xl p-6 border shadow-xl ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
              }`}>
                <div className={`text-xs uppercase tracking-widest font-semibold mb-2 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Key Business Outcome
                </div>
                <div className={`text-4xl sm:text-5xl font-black tracking-tight ${
                  isLight ? 'text-cyan-600' : 'text-cyan-400'
                }`}>
                  {activeUseCase.stat.value}
                </div>
                <div className={`text-sm font-medium mt-1 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {activeUseCase.stat.label}
                </div>
              </div>

              {/* Verified Customer Quote */}
              <div className={`rounded-2xl p-6 border shadow-xl relative ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
              }`}>
                <Quote className={`w-8 h-8 absolute top-4 right-4 ${
                  isLight ? 'text-cyan-500/10' : 'text-cyan-500/20'
                }`} />
                <p className={`text-sm sm:text-base italic leading-relaxed mb-4 relative z-10 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  &quot;{activeUseCase.quote.text}&quot;
                </p>
                <div className={`text-xs font-semibold ${
                  isLight ? 'text-cyan-700' : 'text-cyan-400'
                }`}>
                  — {activeUseCase.quote.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
