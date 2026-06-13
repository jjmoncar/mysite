import React from "react";
import { ServiceDetail } from "../types";
import { Brain, View, Server, X, Award, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  t: {
    modalTitle: string;
    overview: string;
    capabilities: string;
    impact: string;
    caseStudyLabel: string;
    client: string;
    challenge: string;
    outcome: string;
    closeBtn: string;
  };
}

export default function ServiceModal({ service, onClose, t }: ServiceModalProps) {
  if (!service) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="text-primary-container" size={32} />;
      case "ViewQuilt":
        return <View className="text-primary-container" size={32} />;
      case "CloudSync":
        return <Server className="text-primary-container" size={32} />;
      default:
        return <Brain className="text-primary-container" size={32} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel text-white rounded-lg border border-primary-container/30 overflow-hidden shadow-[0_0_50px_rgba(255,92,0,0.3)] flex flex-col max-h-[90vh]">
        {/* Header decoration */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-container to-transparent" />

        {/* Modal Header */}
        <div className="p-6 md:p-8 flex justify-between items-start border-b border-outline-variant/30 bg-surface-container-low">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-container/10 rounded-lg border border-primary-container/20">
              {renderIcon(service.icon)}
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#ffb59a]/70 font-mono font-bold block mb-1">
                {t.modalTitle}
              </span>
              <h2 className="text-xl md:text-3xl font-display font-bold md:font-extrabold tracking-tight">
                {service.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-on-surface-variant hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 max-h-[calc(90vh-140px)]">
          {/* Main Long Description */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary-container font-extrabold mb-3">
              {t.overview}
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300">
              {service.longDesc}
            </p>
          </div>

          {/* Core Capabilities */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary-container font-extrabold mb-4">
              {t.capabilities}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-black/40 p-3.5 rounded-sm border border-outline-variant/20 hover:border-primary-container/30 transition-all"
                >
                  <CheckCircle2 size={16} className="text-primary-container mt-1 shrink-0 animate-pulse" />
                  <span className="text-xs md:text-sm text-slate-200">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Dashboard */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary-container font-extrabold mb-4 flex items-center gap-2">
              <TrendingUp size={14} /> {t.impact}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-surface-container to-black p-5 rounded-md border border-outline-variant/30 text-center hover:shadow-[0_4px_20px_rgba(255,92,0,0.1)] transition-all"
                >
                  <div className="text-2xl md:text-3xl font-display font-black text-primary-container mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-sans text-slate-400 font-medium uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Case Study Section */}
          <div className="bg-[#15161a] p-5 md:p-6 rounded-md border-l-2 border-l-primary-container border border-outline-variant/30">
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary-container font-extrabold mb-3 flex items-center gap-2">
              <Sparkles size={14} className="animate-spin" /> {t.caseStudyLabel}
            </h3>
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-400">
                {t.client} <strong className="text-white">{service.caseStudy.client}</strong>
              </div>
              <div className="text-xs md:text-sm text-slate-300">
                <span className="text-primary font-bold">{t.challenge} </span>
                {service.caseStudy.challenge}
              </div>
              <div className="text-xs md:text-sm text-slate-300">
                <span className="text-primary-container font-bold">{t.outcome} </span>
                {service.caseStudy.outcome}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#ff5c00] hover:bg-[#ff7a2d] text-black font-semibold text-xs uppercase tracking-widest transition-all rounded-sm cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
