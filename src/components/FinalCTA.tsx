import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FinalCTAProps {
  onOpenTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTrial }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { isLight } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
    // Automatically trigger trial flow
    setTimeout(() => {
      onOpenTrial();
    }, 900);
  };

  return (
    <section
      id="final-cta"
      className={`py-20 relative overflow-hidden transition-colors duration-200 ${
        isLight ? 'bg-slate-50' : 'bg-slate-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/90 to-slate-900 border border-slate-700/80 p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden">
          {/* Luminous accent lights */}
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-cyan-500/15 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[250px] bg-violet-500/15 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Supercharge Your Team Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to eliminate sprint chaos and{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                ship 10x faster?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Join over 50,000 agile engineering and product teams using NOVA to automate repetitive busywork and focus on shipping high-impact software.
            </p>

            {/* Email form & interactive capture */}
            <div className="pt-2 max-w-lg mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <input
                      id="final-cta-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="Enter your work email..."
                      className="w-full sm:flex-1 px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                    />
                    <button
                      id="final-cta-submit-btn"
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-rose-400 text-left font-medium pl-1">
                      {errorMessage}
                    </p>
                  )}
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center justify-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Awesome! Launching your personalized onboarding workspace now...
                  </span>
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
