import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Bot,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenTrial }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(25);
  const { isLight, isMidnight } = useTheme();

  // Auto progression simulation for the demo
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStage((stage) => (stage + 1) % 3);
          return 0;
        }
        return prev + 5;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const stages = [
    {
      title: 'Autonomous PR Triage & Code Review',
      desc: 'NOVA scans GitHub pull requests, runs security linters, summarizes architectural changes, and flags breaking API changes.',
      agent: 'Agent Nova-DevOps',
      metric: 'PR turnaround cut from 4.2 hrs to 6 mins',
      output: [
        'Analyzed 12 changed files across /api/v2 and /db/schema',
        'Verified backward compatibility for OAuth token refresh endpoint',
        'Generated automated release summary notes for QA staging'
      ]
    },
    {
      title: 'Real-Time Neural Context Recall',
      desc: 'Connecting Slack conversations with Figma mocks and Linear tickets without asking developers to write status memos.',
      agent: 'Agent Nova-Context',
      metric: 'Zero lost requirements across sprint handoffs',
      output: [
        'Linked Figma design system updates to 4 open frontend backlog tickets',
        'Resolved ambiguous ticket scope based on PM decision in #eng-leadership',
        'Updated sprint burndown curve with 99.4% confidence score'
      ]
    },
    {
      title: 'Predictive Sprint Bottleneck Resolution',
      desc: 'Forecasts delivery timeline slips days ahead of time and autonomously suggests re-balancing assignments.',
      agent: 'Agent Nova-Planner',
      metric: 'Prevented 3 critical launch blockers this sprint',
      output: [
        'Detected high workload density on senior infrastructure engineer',
        'Re-allocated 2 non-critical documentation tickets to AI Agent',
        'Notified team lead with optimized sprint allocation diagram'
      ]
    }
  ];

  const current = stages[activeStage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="demo-modal-container"
        className={`relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border transition-colors ${
          isLight
            ? 'bg-white border-slate-200'
            : isMidnight
            ? 'bg-[#0c1222] border-[#1a2744]'
            : 'bg-slate-900 border-slate-700/80'
        }`}
      >
        {/* Modal Top Bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-base font-bold flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                <span>NOVA Interactive Product Walkthrough</span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-600 border border-cyan-500/30">
                  LIVE SIMULATION
                </span>
              </h3>
              <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Experience autonomous multi-agent task execution in real time
              </p>
            </div>
          </div>

          <button
            id="close-demo-modal-btn"
            type="button"
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              isLight ? 'text-slate-400 hover:text-slate-900 hover:bg-slate-200' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Interactive Body */}
        <div className="p-6 space-y-6">
          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {stages.map((st, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveStage(idx);
                  setProgress(0);
                }}
                className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                  activeStage === idx
                    ? isLight
                      ? 'bg-cyan-50 border-cyan-400 text-cyan-900 font-semibold shadow-xs'
                      : 'bg-slate-800 border-cyan-500/50 text-white font-semibold shadow'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] text-cyan-600 font-mono mb-0.5">
                  Phase 0{idx + 1}
                </div>
                <div className="truncate">{st.title}</div>
              </button>
            ))}
          </div>

          {/* Interactive Player Screen */}
          <div className={`relative rounded-xl border p-6 space-y-4 ${
            isLight ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-950 text-white border-slate-800'
          }`}>
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-white">{current.agent}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{current.metric}</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                SIMULATION ID: NV-9481
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300">
              {current.desc}
            </p>

            {/* Agent Live Output Box */}
            <div className="bg-slate-950/90 rounded-lg p-4 font-mono text-xs space-y-2 border border-slate-800 text-slate-300">
              <div className="text-cyan-400 font-bold flex items-center gap-2">
                <Bot className="w-4 h-4" />
                <span>Execution Log:</span>
              </div>
              {current.output.map((out, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{out}</span>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="pt-2">
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full transition-all duration-300 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>STAGE PROGRESS</span>
                <span>{progress}%</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause Demo</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Resume Demo</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setProgress(0)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
                  title="Restart Stage"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-xs text-slate-400">
                Phase {activeStage + 1} of 3
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct CTA */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/90 border-slate-800'
        }`}>
          <span className={`text-xs text-center sm:text-left ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Ready to integrate NOVA into your workspace? Setup takes under 2 minutes.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex-1 sm:flex-none cursor-pointer ${
                isLight ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700'
              }`}
            >
              Close
            </button>
            <button
              id="demo-modal-start-trial-btn"
              type="button"
              onClick={() => {
                onClose();
                onOpenTrial();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-none cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
