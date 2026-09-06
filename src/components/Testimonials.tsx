import React from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Testimonials: React.FC = () => {
  const { isLight, isMidnight } = useTheme();

  return (
    <section
      id="testimonials"
      className={`py-24 border-t relative transition-colors duration-200 ${
        isLight
          ? 'bg-slate-50 border-slate-200'
          : isMidnight
          ? 'bg-[#060913] border-[#1a2744]'
          : 'bg-slate-950 border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-violet-50 border border-violet-200 text-violet-800'
              : 'bg-violet-500/10 border border-violet-500/20 text-violet-400'
          }`}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Stories</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Loved by Builders, Trusted by Leaders
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            See how engineering and product organizations worldwide accelerated their delivery cadence with NOVA.
          </p>
        </div>

        {/* Testimonials Grid: 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className={`rounded-2xl p-6 sm:p-7 border shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${
                isLight
                  ? 'bg-white hover:bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-xl'
                  : isMidnight
                  ? 'bg-[#0c1222] hover:bg-[#0f172a] border-[#1a2744] hover:border-cyan-500/40 shadow-xl'
                  : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 shadow-xl'
              }`}
            >
              <div>
                {/* Rating Stars & Metric badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[11px] font-bold font-mono px-2 py-0.5 rounded border ${
                    isLight
                      ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                      : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                  }`}>
                    {testimonial.highlightMetric}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className={`text-sm leading-relaxed italic mb-6 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className={`pt-4 border-t flex items-center gap-3 ${
                isLight ? 'border-slate-100' : 'border-slate-800/80'
              }`}>
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className={`w-11 h-11 rounded-full object-cover border transition-colors ${
                    isLight ? 'border-slate-200 group-hover:border-cyan-500' : 'border-slate-700 group-hover:border-cyan-400'
                  }`}
                />
                <div>
                  <div className={`text-sm font-bold flex items-center gap-1 ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}>
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                  </div>
                  <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {testimonial.role}
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 ${
                    isLight ? 'text-cyan-700' : 'text-cyan-400/90'
                  }`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
