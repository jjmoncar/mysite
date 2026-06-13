import React from "react";
import { ProjectDetail } from "../types";
import { X, Target, Cpu, TrendingUp, Sparkles, Code2, ShieldAlert } from "lucide-react";

interface ProjectDrawerProps {
  project: ProjectDetail | null;
  onClose: () => void;
  t: {
    detailsTitle: string;
    challengeTitle: string;
    solutionTitle: string;
    techStackTitle: string;
    resultsTitle: string;
    longTermTitle: string;
    closeBtn: string;
  };
}

export default function ProjectDrawer({ project, onClose, t }: ProjectDrawerProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-[#0b0c0f] border-l border-primary-container/20 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col h-full animate-slideLeft">
      {/* Decorative top strip */}
      <div className="w-full h-[4px] bg-gradient-to-r from-primary-container via-primary to-transparent" />

      {/* Header controls */}
      <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-primary-container font-extrabold uppercase bg-primary-container/10 px-2 py-0.5 rounded-sm">
            {project.category}
          </span>
          <h2 className="text-xl md:text-2xl font-display font-black text-white mt-1.5 leading-tight">
            {project.title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-on-surface-variant hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>

      {/* Body scrollable content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
        {/* Project Image banner */}
        <div className="relative aspect-video rounded-md overflow-hidden border border-outline-variant/20 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-1.5 flex-wrap">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[9px] font-mono uppercase bg-black/80 px-2 py-1 border border-primary-container/20 text-[#ffb59a] rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative Intro */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#ffb59a] font-black flex items-center gap-1.5">
            <Sparkles size={11} className="text-primary-container" /> {t.detailsTitle}
          </h3>
          <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded bg-[#131418] border border-red-500/10 hover:border-red-500/20 transition-all space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 font-extrabold flex items-center gap-1.5">
              <ShieldAlert size={12} /> {t.challengeTitle}
            </h4>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded bg-[#131418] border border-primary-container/10 hover:border-primary-container/20 transition-all space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary-container font-extrabold flex items-center gap-1.5">
              <Target size={12} /> {t.solutionTitle}
            </h4>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technical stack list */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#ffb59a] font-black flex items-center gap-1.5">
            <Code2 size={12} /> {t.techStackTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-surface-container rounded-sm border border-outline-variant/30 text-xs font-mono text-white hover:border-primary transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project metrics / benchmarks */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-primary-container font-black flex items-center gap-1.5">
            <TrendingUp size={12} /> {t.resultsTitle}
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-black/50 p-4 rounded-sm border border-outline-variant/20 text-center hover:border-primary/40 transition-all"
              >
                <div className="text-base md:text-lg font-display font-black text-white">
                  {stat.value}
                </div>
                <div className="text-[9px] text-slate-400 uppercase tracking-tighter mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Outcome */}
        <div className="bg-[#101115] p-5 rounded border border-primary/20">
          <h4 className="text-xs font-mono uppercase tracking-widest text-white font-black mb-2 flex items-center gap-1.5">
            <Cpu size={12} className="text-primary-container animate-pulse" /> {t.longTermTitle}
          </h4>
          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            {project.result}
          </p>
        </div>
      </div>

      {/* Drawer footer action */}
      <div className="p-6 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-6 py-2.5 border border-outline-variant text-on-surface hover:text-white hover:bg-white/5 font-semibold text-xs uppercase tracking-widest transition-all rounded-sm cursor-pointer"
        >
          {t.closeBtn}
        </button>
      </div>
    </div>
  );
}
