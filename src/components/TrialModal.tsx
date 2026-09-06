import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, initialPlan = 'pro' }) => {
  const [step, setStep] = useState<'form' | 'provisioning' | 'ready'>('form');
  const [formData, setFormData] = useState({
    workEmail: '',
    teamName: '',
    teamSize: '11-50',
    selectedPlan: initialPlan,
  });
  const [error, setError] = useState('');
  const { isLight, isMidnight } = useTheme();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setError('Please provide a valid work email address.');
      return;
    }
    setError('');
    setStep('provisioning');

    setTimeout(() => {
      setStep('ready');
    }, 1800);
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="trial-modal-container"
        className={`relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border transition-colors ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : isMidnight
            ? 'bg-[#0c1222] border-[#1a2744] text-white'
            : 'bg-slate-900 border-slate-700/80 text-white'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Start Your 14-Day Free Trial
              </h3>
              <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                No credit card required • Full feature access
              </span>
            </div>
          </div>
          <button
            id="close-trial-modal-btn"
            type="button"
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isLight ? 'text-slate-400 hover:text-slate-900 hover:bg-slate-200' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Work Email Address
                </label>
                <input
                  id="trial-input-email"
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-slate-950 border-slate-700 text-white placeholder-slate-500'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Company / Team Name
                </label>
                <input
                  id="trial-input-team"
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="Acme Engineering"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-slate-950 border-slate-700 text-white placeholder-slate-500'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900'
                        : 'bg-slate-950 border-slate-700 text-white'
                    }`}
                  >
                    <option value="1-10">1 - 10 people</option>
                    <option value="11-50">11 - 50 people</option>
                    <option value="51-200">51 - 200 people</option>
                    <option value="201+">201+ enterprise</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Selected Plan
                  </label>
                  <select
                    value={formData.selectedPlan}
                    onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900'
                        : 'bg-slate-950 border-slate-700 text-white'
                    }`}
                  >
                    <option value="starter">Starter Plan</option>
                    <option value="pro">Pro Plan (Recommended)</option>
                    <option value="enterprise">Enterprise Plan</option>
                  </select>
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-500 font-medium">
                  {error}
                </p>
              )}

              <button
                id="trial-submit-btn"
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Create Workspace &amp; Start Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className={`pt-2 flex items-center justify-center gap-4 text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  SOC2 Certified
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-500" />
                  Instant Activation
                </span>
              </div>
            </form>
          )}

          {step === 'provisioning' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin mx-auto" />
              <h4 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Provisioning Autonomous NOVA Environment...
              </h4>
              <p className={`text-xs max-w-xs mx-auto ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Setting up dedicated agent cluster, zero-retention encryption keys, and workspace sandbox.
              </p>
            </div>
          )}

          {step === 'ready' && (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Welcome to NOVA!
              </h4>
              <p className={`text-sm max-w-sm mx-auto ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Your 14-day free trial has been activated for <strong className={isLight ? 'text-slate-900' : 'text-white'}>{formData.workEmail}</strong>. Check your inbox for the instant magic login link.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close &amp; Return to Homepage
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
