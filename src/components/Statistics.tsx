import React from 'react';
import { STATISTICS } from '../data/landingData';
import { TrendingUp, CheckCircle, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Statistics: React.FC = () => {
  const { isLight, isMidnight } = useTheme();

  return (
    <section
      id="statistics"
      className={`py-20 border-y relative transition-colors duration-200 ${
        isLight
          ? 'bg-slate-100/60 border-slate-200'
          : isMidnight
          ? 'bg-[#0a0f1d]/80 border-[#1a2744]'
          : 'bg-slate-900/60 border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
              : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
          }`}>
            <Award className="w-3.5 h-3.5" />
            <span>Proven Enterprise Outcomes</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Measured Impact at Planetary Scale
          </h2>
          <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Real performance benchmarks compiled from 50,000+ teams shipping software with NOVA.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS.map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 border shadow-lg transition-all duration-200 flex flex-col justify-between group ${
                isLight
                  ? 'bg-white border-slate-200/90 hover:border-cyan-400 shadow-sm hover:shadow-lg'
                  : isMidnight
                  ? 'bg-[#0c1222] border-[#1a2744] hover:border-cyan-500/40 shadow-xl'
                  : 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40 shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1 ${
                    isLight
                      ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                      : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                  }`}>
                    <TrendingUp className="w-3 h-3" />
                    {stat.growth}
                  </span>
                  <CheckCircle className={`w-4 h-4 transition-colors ${
                    isLight ? 'text-slate-300 group-hover:text-cyan-600' : 'text-slate-600 group-hover:text-cyan-400'
                  }`} />
                </div>

                <div className={`text-4xl sm:text-5xl font-black tracking-tight transition-all ${
                  isLight
                    ? 'text-slate-900 group-hover:text-cyan-700'
                    : 'text-white bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-indigo-300'
                }`}>
                  {stat.value}
                </div>

                <div className={`text-base font-bold mt-2 ${
                  isLight ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  {stat.label}
                </div>
              </div>

              <div className={`text-xs mt-4 pt-3 border-t ${
                isLight ? 'border-slate-100 text-slate-500' : 'border-slate-900 text-slate-400'
              }`}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
