import React from 'react';
import { Layers, Cpu, Sparkles, BarChart3, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { useTheme } from '../context/ThemeContext';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  const { isLight, isMidnight } = useTheme();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-violet-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section
      id="how-it-works"
      className={`py-24 relative overflow-hidden transition-colors duration-200 ${
        isLight
          ? 'bg-white'
          : isMidnight
          ? 'bg-[#060913]'
          : 'bg-slate-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-cyan-50 border border-cyan-200 text-cyan-800'
              : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
          }`}>
            <span>Simple Onboarding</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Get Up & Running in Under 2 Minutes
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            No complex migrations or team retraining. Connect your existing tools and watch NOVA begin orchestrating immediately.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.number}
              id={`how-it-works-step-${step.number}`}
              className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${
                isLight
                  ? 'bg-slate-50 hover:bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-xl'
                  : isMidnight
                  ? 'bg-[#0c1222]/70 hover:bg-[#0c1222] border-[#1a2744] hover:border-cyan-500/40 shadow-lg'
                  : 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800/90 hover:border-cyan-500/40 shadow-lg'
              }`}
            >
              <div>
                {/* Number badge and icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-3xl font-extrabold font-mono transition-colors ${
                    isLight ? 'text-slate-300 group-hover:text-cyan-600' : 'text-slate-700 group-hover:text-cyan-400/80'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`p-3 rounded-xl border transition-colors ${
                    isLight
                      ? 'bg-white border-slate-200 group-hover:border-cyan-300 group-hover:bg-cyan-50'
                      : 'bg-slate-800/80 border-slate-700/60 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10'
                  }`}>
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title & Description */}
                <h3 className={`text-xl font-bold mb-3 tracking-tight transition-colors ${
                  isLight ? 'text-slate-900 group-hover:text-cyan-800' : 'text-white group-hover:text-cyan-200'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed font-normal ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {step.description}
                </p>
              </div>

              {/* Extra detail note */}
              <div className={`pt-4 border-t text-xs leading-normal ${
                isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
              }`}>
                {step.detail}
              </div>

              {/* Subtle top indicator on desktop */}
              {index < 3 && (
                <div className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 ${
                  isLight ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Quick Action CTA */}
        <div className="mt-14 text-center">
          <button
            id="how-it-works-cta-btn"
            onClick={onOpenTrial}
            type="button"
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all shadow-md group cursor-pointer border ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200/80 text-slate-900 border-slate-300'
                : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700 hover:border-cyan-500/50'
            }`}
          >
            <span>Ready to experience NOVA?</span>
            <span className="text-cyan-600 font-semibold group-hover:underline flex items-center gap-1">
              Start your free trial today
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
