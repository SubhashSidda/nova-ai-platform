import React, { useState } from 'react';
import { WORKFLOW_PILLARS } from '../data/landingData';
import {
  CheckCircle2,
  Workflow,
  Sparkles,
  Database,
  Cpu,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ProductShowcase: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(WORKFLOW_PILLARS[0].id);
  const { isLight, isMidnight } = useTheme();

  const activePillar = WORKFLOW_PILLARS.find((p) => p.id === selectedPillarId) || WORKFLOW_PILLARS[0];

  return (
    <section
      id="product"
      className={`py-24 border-t relative transition-colors duration-200 ${
        isLight
          ? 'bg-slate-100/60 border-slate-200'
          : isMidnight
          ? 'bg-gradient-to-b from-[#060913] via-[#0c1222] to-[#060913] border-[#1a2744]'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLight
              ? 'bg-indigo-50 border border-indigo-200 text-indigo-800'
              : 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400'
          }`}>
            <Workflow className="w-3.5 h-3.5" />
            <span>Under The Hood</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            How NOVA’s AI Engine Integrates Into Your Daily Workflow
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            NOVA isn&apos;t another chat window. It&apos;s an intelligent operating layer that lives inside your existing tools, orchestrating tasks autonomously from conception to release.
          </p>
        </div>

        {/* Interactive 3-Pillar Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto">
          {WORKFLOW_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillar.id;
            return (
              <button
                key={pillar.id}
                id={`workflow-pill-${pillar.id}`}
                type="button"
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-white border-cyan-500 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-gradient-to-br from-slate-900 to-slate-800/90 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : isLight
                    ? 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-600'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-semibold ${
                    isSelected 
                      ? isLight ? 'text-cyan-700' : 'text-cyan-400' 
                      : isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {pillar.title.split('.')[0]}.
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />}
                </div>
                <div className={`text-base font-bold mt-1.5 ${
                  isSelected 
                    ? isLight ? 'text-slate-900' : 'text-white' 
                    : isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {pillar.title.split('.')[1] || pillar.title}
                </div>
                <div className={`text-xs mt-1 line-clamp-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {pillar.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase Layout: 2-Column Split */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-10 border shadow-2xl transition-colors duration-200 ${
          isLight
            ? 'bg-white border-slate-200 shadow-xl'
            : isMidnight
            ? 'bg-[#0a0f1d]/80 border-[#1a2744]'
            : 'bg-slate-950/80 border-slate-800'
        }`}>
          {/* Left Column: Deep Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`inline-block px-3 py-1 rounded-md text-xs font-mono font-semibold ${
              isLight
                ? 'bg-cyan-50 border border-cyan-200 text-cyan-800'
                : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
            }`}>
              {activePillar.mockupTag}
            </div>

            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              {activePillar.subtitle}
            </h3>

            <p className={`text-base leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {activePillar.description}
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-3 pt-2">
              {activePillar.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className={`text-sm sm:text-base font-medium ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className={`pt-4 flex items-center gap-4 text-xs ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <span className={`flex items-center gap-1.5 font-semibold ${
                isLight ? 'text-cyan-700' : 'text-cyan-400'
              }`}>
                <Sparkles className="w-4 h-4" />
                Autonomous Engine Active
              </span>
              <span>•</span>
              <span>Zero training on client data</span>
            </div>
          </div>

          {/* Right Column: Visual Interactive Interactive Workflow Diagram */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-xl space-y-4 font-mono text-xs">
              {/* Terminal-like Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 font-semibold">nova-agent-runtime --trace</span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  HEALTHY // LATENCY 18ms
                </span>
              </div>

              {/* Dynamic Content based on selected pillar */}
              {activePillar.id === 'ingestion' && (
                <div className="space-y-3 text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-cyan-400 font-semibold flex items-center gap-2">
                      <Database className="w-3.5 h-3.5" />
                      Incoming Webhooks & Streams
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      &gt; Slack: #proj-search-v3 - @sarah approved search ranking architecture.
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      &gt; GitHub: commit 9b88f3a on main (feat: add vector embeddings cache).
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-200">
                    <div className="font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      Semantic Graph Indexed:
                    </div>
                    <span>
                      Knowledge node linked: &quot;Vector Search Cache&quot; connected with PR #841 and Jira PROJ-42. 0 human input required.
                    </span>
                  </div>
                </div>
              )}

              {activePillar.id === 'reasoning' && (
                <div className="space-y-3 text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-indigo-400 font-semibold flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5" />
                      Multi-Agent Collision Detection
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      &gt; Detected PR #842 modifies auth token expiration used by Mobile App v4.2.
                    </p>
                    <p className="text-amber-400/90 text-[11px]">
                      &gt; Warning: Potential breaking API change flagged for Mobile Squad.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/30 text-indigo-200">
                    <div className="font-semibold text-indigo-300 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Agent Action Dispatched:
                    </div>
                    <span>
                      Generated automated migration notes and notified Mobile Lead with synthetic test payload before merge.
                    </span>
                  </div>
                </div>
              )}

              {activePillar.id === 'execution' && (
                <div className="space-y-3 text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-emerald-400 font-semibold flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      Automated Release & Roadmap Sync
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      &gt; Feature Flag #search_vector_enabled toggled for Canary (5%).
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      &gt; Changelog drafted, categorized, and synced to Notion documentation.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
                    <div className="font-semibold text-emerald-300 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Execution Verified:
                    </div>
                    <span>
                      All 18 sprint tickets updated to &quot;Released&quot;. Stakeholder brief emailed with zero meeting overhead.
                    </span>
                  </div>
                </div>
              )}

              {/* Progress visual */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Autonomous orchestration loop</span>
                <span className="text-cyan-400 font-bold">100% synchronized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
