import React from 'react';
import {
  GitMerge,
  BrainCircuit,
  Bot,
  TrendingUp,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { FEATURES } from '../data/landingData';
import { useTheme } from '../context/ThemeContext';

interface FeaturesProps {
  onExploreFeature?: (featureId: string) => void;
}

export const Features: React.FC<FeaturesProps> = () => {
  const { isLight, isMidnight } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitMerge':
        return <GitMerge className="w-6 h-6 text-cyan-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-indigo-500" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-violet-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section
      id="features"
      className={`py-24 relative overflow-hidden transition-colors duration-200 ${
        isLight
          ? 'bg-slate-50'
          : isMidnight
          ? 'bg-[#060913]'
          : 'bg-slate-950'
      }`}
    >
      {/* Background glow accent */}
      <div className={`absolute top-1/2 right-0 w-96 h-96 blur-[140px] pointer-events-none rounded-full ${
        isLight ? 'bg-indigo-400/5' : 'bg-indigo-500/10'
      }`} />
      <div className={`absolute bottom-0 left-10 w-80 h-80 blur-[130px] pointer-events-none rounded-full ${
        isLight ? 'bg-cyan-400/5' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-cyan-50 border border-cyan-200 text-cyan-800'
              : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence Suite</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Engineered for speed.{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Built for scale.
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            NOVA replaces disconnected tools with an autonomous neural orchestrator that anticipates bottlenecks, coordinates releases, and supercharges team execution.
          </p>
        </div>

        {/* 6 Features Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              className={`group relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                isLight
                  ? 'bg-white hover:bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10'
                  : isMidnight
                  ? 'bg-[#0c1222]/80 hover:bg-[#0c1222] border-[#1a2744] hover:border-cyan-500/40 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/15'
                  : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10'
              }`}
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-xl border transition-colors ${
                    isLight
                      ? 'bg-slate-100 border-slate-200 group-hover:bg-cyan-50 group-hover:border-cyan-300'
                      : 'bg-slate-800/80 border-slate-700/60 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10'
                  }`}>
                    {getIcon(feature.iconName)}
                  </div>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-colors ${
                    isLight
                      ? 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-cyan-50 group-hover:text-cyan-800 group-hover:border-cyan-300'
                      : 'bg-slate-800 text-slate-300 border-slate-700/60 group-hover:border-cyan-500/30 group-hover:text-cyan-300'
                  }`}>
                    {feature.badge}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className={`text-xl font-bold mb-3 tracking-tight transition-colors ${
                  isLight
                    ? 'text-slate-900 group-hover:text-cyan-800'
                    : 'text-white group-hover:text-cyan-200'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Link / Learn more */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-semibold transition-colors ${
                isLight
                  ? 'border-slate-200 text-slate-500 group-hover:text-cyan-700'
                  : 'border-slate-800/80 text-slate-400 group-hover:text-cyan-400'
              }`}>
                <span>Explore capability</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Subtle Card Accent Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
