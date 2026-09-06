import React, { useState } from 'react';
import {
  Play,
  ArrowRight,
  Sparkles,
  Bot,
  CheckCircle2,
  GitPullRequest,
  Flame,
  ShieldCheck,
  Zap,
  Activity,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'orchestrator' | 'tasks' | 'velocity'>('orchestrator');
  const [completedDemoTask, setCompletedDemoTask] = useState<number | null>(null);
  const { isLight, isMidnight } = useTheme();

  return (
    <section
      id="hero"
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-200 ${
        isLight
          ? 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
          : isMidnight
          ? 'bg-gradient-to-b from-[#060913] via-[#0c1222] to-[#060913]'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
      }`}
    >
      {/* Background ambient lighting effects */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[500px] blur-[130px] pointer-events-none rounded-full ${
        isLight
          ? 'bg-gradient-to-tr from-cyan-400/10 via-indigo-400/10 to-violet-400/5'
          : isMidnight
          ? 'bg-gradient-to-tr from-cyan-500/20 via-indigo-600/20 to-blue-600/15'
          : 'bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-violet-600/10'
      }`} />
      
      {/* Subtle grid texture */}
      <div 
        className={`absolute inset-0 pointer-events-none ${isLight ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isLight ? '#0f172a' : '#ffffff'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Text Container */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Release Badge */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-inner backdrop-blur-md ${
            isLight
              ? 'bg-white/90 border border-slate-300 text-cyan-800 shadow-sm'
              : 'bg-slate-900/90 border border-cyan-500/30 text-cyan-300'
          }`}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className={`font-semibold ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>NOVA 2.0 Released</span>
            <span className={isLight ? 'text-slate-300' : 'text-slate-600'}>•</span>
            <span className={`flex items-center gap-1 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Autonomous Team Intelligence
              <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Build Better.{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Work Smarter.
            </span>
          </h1>

          {/* Subheadline from prompt */}
          <p className={`text-lg sm:text-xl md:text-2xl font-normal max-w-3xl mx-auto leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive tasks, and collaborate efficiently.
          </p>

          {/* CTA Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              id="hero-primary-cta"
              onClick={onOpenTrial}
              type="button"
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 hover:from-cyan-400 hover:via-indigo-500 hover:to-indigo-600 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onOpenDemo}
              type="button"
              className={`w-full sm:w-auto px-7 py-4 text-base font-semibold rounded-xl border transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group shadow-lg ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-slate-200'
                  : 'bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 text-cyan-500 fill-cyan-500/30 ml-0.5" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className={`flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm pt-2 ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Setup in 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Product Preview Mockup Window */}
        <div className="mt-14 lg:mt-20 max-w-6xl mx-auto">
          <div className={`relative rounded-2xl p-2 sm:p-4 backdrop-blur-xl border shadow-2xl transition-colors duration-200 ${
            isLight
              ? 'bg-white border-slate-200/90 shadow-2xl shadow-slate-300/70 ring-1 ring-slate-900/5'
              : isMidnight
              ? 'bg-[#0a0f1d]/90 border-[#1a2744] shadow-2xl shadow-blue-950/40 ring-1 ring-white/10'
              : 'bg-slate-950/90 border-slate-800/90 shadow-2xl shadow-cyan-950/30 ring-1 ring-white/10'
          }`}>
            {/* Top Mac style window chrome */}
            <div className={`flex flex-wrap items-center justify-between pb-3 sm:pb-4 border-b gap-3 px-2 pt-1 ${
              isLight ? 'border-slate-200' : 'border-slate-800/80'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className={`ml-3 text-xs font-mono hidden sm:inline-block ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  nova-workspace // sprint-48-q3.ai
                </span>
              </div>

              {/* Interactive Mockup Tabs */}
              <div className={`flex items-center gap-1 p-1 rounded-lg border ${
                isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/90 border-slate-800'
              }`}>
                <button
                  id="mockup-tab-orchestrator"
                  type="button"
                  onClick={() => setActiveTab('orchestrator')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'orchestrator'
                      ? isLight
                        ? 'bg-white text-cyan-800 border border-slate-300 shadow-xs font-semibold'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI Orchestrator
                </button>
                <button
                  id="mockup-tab-tasks"
                  type="button"
                  onClick={() => setActiveTab('tasks')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'tasks'
                      ? isLight
                        ? 'bg-white text-cyan-800 border border-slate-300 shadow-xs font-semibold'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Neural Tasks
                </button>
                <button
                  id="mockup-tab-velocity"
                  type="button"
                  onClick={() => setActiveTab('velocity')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'velocity'
                      ? isLight
                        ? 'bg-white text-cyan-800 border border-slate-300 shadow-xs font-semibold'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Live Velocity
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Nova Agent #4 Active</span>
              </div>
            </div>

            {/* Inner Dashboard Viewport */}
            <div className={`p-3 sm:p-6 rounded-xl mt-2 border ${
              isLight
                ? 'bg-slate-50/80 border-slate-200'
                : 'bg-slate-950/60 border-slate-900'
            }`}>
              {activeTab === 'orchestrator' && (
                <div className="space-y-4">
                  {/* Real-time telemetry bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                      isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/80 border-slate-800'
                    }`}>
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Active Workflows</div>
                        <div className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>42 Autonomous Agents</div>
                      </div>
                    </div>
                    <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                      isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/80 border-slate-800'
                    }`}>
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600">
                        <GitPullRequest className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Automated PR Triage</div>
                        <div className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>18 Merged Today</div>
                      </div>
                    </div>
                    <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                      isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/80 border-slate-800'
                    }`}>
                      <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600">
                        <Flame className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Time Saved This Sprint</div>
                        <div className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>48.5 Engineering Hrs</div>
                      </div>
                    </div>
                  </div>

                  {/* Live Agent Stream */}
                  <div className={`rounded-xl border p-4 space-y-3 ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
                  }`}>
                    <div className={`flex items-center justify-between text-xs border-b pb-2 ${
                      isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800/80 text-slate-400'
                    }`}>
                      <span className={`font-semibold flex items-center gap-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                        <Bot className="w-4 h-4 text-cyan-500" />
                        Autonomous Agent Execution Feed (Live)
                      </span>
                      <span className="font-mono text-[11px] text-cyan-600 font-medium">Streaming Event Stream v2.4</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className={`flex items-start gap-3 p-2.5 rounded-lg border transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                          : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                      }`}>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <div className="flex-1 text-xs">
                          <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Agent Alpha (DevOps)</span>
                          <span className={`ml-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                            Detected schema migration conflict on PR #412. Generated automated backward-compatible rollback script and tagged @marcus.
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">12s ago</span>
                      </div>

                      <div className={`flex items-start gap-3 p-2.5 rounded-lg border transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                          : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                      }`}>
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                        <div className="flex-1 text-xs">
                          <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Agent Cortex (Project Synth)</span>
                          <span className={`ml-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                            Synthesized 14 customer Slack tickets into Jira Epic &quot;AI Workflow Templates&quot; with full acceptance criteria.
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">1m ago</span>
                      </div>

                      <div className={`flex items-start gap-3 p-2.5 rounded-lg border transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                          : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                      }`}>
                        <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                        <div className="flex-1 text-xs">
                          <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Agent Sentinel (Security)</span>
                          <span className={`ml-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                            Audit complete: Verified zero sensitive API credentials in client bundles. SOC2 audit hash #8839 generated.
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">3m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tasks' && (
                <div className="space-y-3">
                  <div className={`text-xs flex items-center justify-between pb-2 border-b ${
                    isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800 text-slate-400'
                  }`}>
                    <span className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                      Intelligent Task Matrix • Interactive Demo
                    </span>
                    <span className="text-[11px] text-cyan-600 font-medium">Click a task to preview AI resolution</span>
                  </div>

                  {[
                    { id: 1, title: 'Synthesize Q3 Performance Bottlenecks from DataDog logs', team: 'Backend', priority: 'High', autoEta: '12m automated' },
                    { id: 2, title: 'Auto-generate API Documentation from OpenAPI Specs & PRs', team: 'Platform', priority: 'Medium', autoEta: '4m automated' },
                    { id: 3, title: 'Draft Release Notes for v2.4 across Slack & Discord announcements', team: 'Product', priority: 'High', autoEta: 'Ready to dispatch' }
                  ].map((task) => {
                    const isDone = completedDemoTask === task.id;
                    return (
                      <div
                        key={task.id}
                        onClick={() => setCompletedDemoTask(isDone ? null : task.id)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                          isDone
                            ? isLight
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                              : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                            : isLight
                            ? 'bg-white border-slate-200 hover:border-cyan-400 text-slate-800 shadow-xs'
                            : 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/50 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                            isDone 
                              ? 'bg-emerald-500 border-emerald-400 text-white' 
                              : isLight
                              ? 'border-slate-300 bg-slate-100'
                              : 'border-slate-700 bg-slate-800'
                          }`}>
                            {isDone && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <div className={`text-sm font-medium ${
                              isDone 
                                ? 'line-through text-emerald-700' 
                                : isLight 
                                ? 'text-slate-900' 
                                : 'text-white'
                            }`}>
                              {task.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                              <span>{task.team}</span>
                              <span>•</span>
                              <span className={isLight ? 'text-cyan-700 font-medium' : 'text-cyan-400'}>{task.autoEta}</span>
                            </div>
                          </div>
                        </div>

                        <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                          task.priority === 'High' 
                            ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' 
                            : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'velocity' && (
                <div className="space-y-4">
                  <div className={`flex items-center justify-between text-xs border-b pb-2 ${
                    isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800 text-slate-400'
                  }`}>
                    <span className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>Sprint 48 Delivery Trajectory</span>
                    <span className="text-emerald-600 font-semibold">+38% Above Historical Baseline</span>
                  </div>

                  {/* Visual simulated burndown / velocity bars */}
                  <div className="grid grid-cols-6 gap-2 h-28 items-end pt-4 px-2">
                    {[
                      { day: 'Mon', height: 'h-12', label: '14 pts' },
                      { day: 'Tue', height: 'h-16', label: '22 pts' },
                      { day: 'Wed', height: 'h-20', label: '28 pts' },
                      { day: 'Thu', height: 'h-24', label: '36 pts' },
                      { day: 'Fri', height: 'h-28', label: '45 pts', highlight: true },
                      { day: 'Est. Mon', height: 'h-24', label: '38 pts', projected: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className={`text-[10px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</span>
                        <div
                          className={`w-full rounded-t-md transition-all ${
                            item.highlight
                              ? 'bg-gradient-to-t from-cyan-600 to-cyan-400 shadow-lg shadow-cyan-500/20'
                              : item.projected
                              ? isLight
                                ? 'bg-slate-200 border-t-2 border-dashed border-cyan-500'
                                : 'bg-slate-800 border-t-2 border-dashed border-cyan-400'
                              : isLight
                              ? 'bg-slate-200 hover:bg-slate-300'
                              : 'bg-slate-800 hover:bg-slate-700'
                          } ${item.height}`}
                        />
                        <span className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{item.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-700 shadow-xs' 
                      : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-500" />
                      <span>NOVA predictive engine projects sprint completion 1.8 days ahead of schedule.</span>
                    </div>
                    <span className="text-emerald-600 font-semibold font-mono">Confidence: 98.7%</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
