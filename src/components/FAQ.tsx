import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const { isLight, isMidnight } = useTheme();

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className={`py-24 relative transition-colors duration-200 ${
        isLight
          ? 'bg-white'
          : isMidnight
          ? 'bg-[#060913]'
          : 'bg-slate-950'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-cyan-50 border border-cyan-200 text-cyan-800'
              : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
          }`}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Everything you need to know about NOVA&apos;s autonomous AI engine, privacy models, and implementation.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? isLight
                      ? 'bg-white border-cyan-500 shadow-md ring-1 ring-cyan-500/20'
                      : isMidnight
                      ? 'bg-[#0c1222] border-cyan-500/40 shadow-lg'
                      : 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-500/5'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                    : isMidnight
                    ? 'bg-[#0a0f1d] border-[#1a2744] hover:border-[#25375e]'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className={`text-base sm:text-lg font-semibold tracking-tight ${
                    isOpen 
                      ? isLight ? 'text-cyan-900 font-bold' : 'text-white' 
                      : isLight ? 'text-slate-800' : 'text-slate-200'
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? isLight
                          ? 'bg-cyan-50 border-cyan-300 text-cyan-700 rotate-180'
                          : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 rotate-180'
                        : isLight
                        ? 'bg-white border-slate-300 text-slate-500'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Accordion Content */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className={`px-6 pb-6 text-sm sm:text-base leading-relaxed border-t pt-4 animate-in fade-in duration-200 ${
                      isLight ? 'border-slate-100 text-slate-600' : 'border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <p>{faq.answer}</p>
                    <div className={`mt-3 flex items-center gap-2 text-xs font-mono ${
                      isLight ? 'text-cyan-700' : 'text-cyan-400/80'
                    }`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support note */}
        <div className={`mt-12 text-center text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          Have a question not answered here?{' '}
          <a href="#footer" className="text-cyan-600 hover:underline font-medium">
            Contact our engineering support team
          </a>
        </div>
      </div>
    </section>
  );
};
