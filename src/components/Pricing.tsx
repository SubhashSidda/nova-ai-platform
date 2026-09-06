import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/landingData';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface PricingProps {
  onSelectPlan: (planId: string, isAnnual: boolean) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { isLight, isMidnight } = useTheme();

  return (
    <section
      id="pricing"
      className={`py-24 relative overflow-hidden transition-colors duration-200 ${
        isLight
          ? 'bg-slate-100/60'
          : isMidnight
          ? 'bg-gradient-to-b from-[#060913] via-[#0c1222] to-[#060913]'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
      }`}
    >
      {/* Background ambient lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[150px] pointer-events-none rounded-full ${
        isLight ? 'bg-cyan-400/5' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-cyan-50 border border-cyan-200 text-cyan-800'
              : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
          }`}>
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Predictable Plans for High-Performance Teams
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            All plans include full 14-day free trial, no credit card required. Upgrade or cancel anytime.
          </p>

          {/* Interactive Monthly / Annual Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${
              !isAnnual 
                ? isLight ? 'text-slate-900 font-bold' : 'text-white font-bold' 
                : isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Monthly Billing
            </span>

            <button
              id="pricing-billing-toggle"
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                isLight ? 'border-slate-300 bg-slate-200' : 'border-slate-700 bg-slate-900'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0.5'
                }`}
              />
            </button>

            <span className={`text-sm font-medium flex items-center gap-1.5 ${
              isAnnual 
                ? isLight ? 'text-slate-900 font-bold' : 'text-white font-bold' 
                : isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <span>Annual Billing</span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                isLight
                  ? 'text-emerald-700 bg-emerald-50 border-emerald-300'
                  : 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30'
              }`}>
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                id={`pricing-plan-${plan.id}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? isLight
                      ? 'bg-white border-2 border-cyan-500 shadow-2xl shadow-cyan-500/15 lg:-translate-y-2 ring-2 ring-cyan-500/20'
                      : 'bg-slate-900/90 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 lg:-translate-y-2'
                    : isLight
                    ? 'bg-white/90 border border-slate-200 hover:border-slate-300 shadow-md'
                    : isMidnight
                    ? 'bg-[#0c1222] border-[#1a2744] hover:border-[#25375e]'
                    : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-bold tracking-tight ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${
                      isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {plan.id === 'enterprise' ? 'Custom SLA' : '14-day trial'}
                    </span>
                  </div>

                  <p className={`text-sm min-h-[40px] mb-6 ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className={`flex items-baseline gap-2 mb-6 pb-6 border-b ${
                    isLight ? 'border-slate-100' : 'border-slate-800'
                  }`}>
                    <span className={`text-5xl font-black tracking-tight ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      ${price}
                    </span>
                    <div className={`flex flex-col text-xs ${
                      isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      <span>per user / month</span>
                      <span>{isAnnual ? 'billed annually' : 'billed monthly'}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Everything included:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className={`text-sm font-normal ${
                          isLight ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.limitations && (
                      <div className={`text-xs italic pt-1 ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        * {plan.limitations}
                      </div>
                    )}
                  </div>
                </div>

                {/* Plan Action CTA Button */}
                <div className={`pt-4 border-t ${
                  isLight ? 'border-slate-100' : 'border-slate-800/80'
                }`}>
                  <button
                    id={`plan-cta-btn-${plan.id}`}
                    onClick={() => onSelectPlan(plan.id, isAnnual)}
                    type="button"
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isPopular
                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold shadow-cyan-500/20'
                        : isLight
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/40'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className={`flex items-center justify-center gap-1.5 text-[11px] mt-3 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>No surprise fees • Cancel anytime</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
