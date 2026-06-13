import React from "react";
import { Shield, FileText, X, Clock } from "lucide-react";

interface LegalModalProps {
  mode: "privacy" | "terms" | null;
  onClose: () => void;
  t: {
    privacyTitle: string;
    privacyLastUpdated: string;
    privacySections: { title: string; paragraphs: string[] }[];
    termsTitle: string;
    termsLastUpdated: string;
    termsSections: { title: string; paragraphs: string[] }[];
    closeBtn: string;
  };
}

export default function LegalModal({ mode, onClose, t }: LegalModalProps) {
  if (!mode) return null;

  const isPrivacy = mode === "privacy";
  const title = isPrivacy ? t.privacyTitle : t.termsTitle;
  const updatedDate = isPrivacy ? t.privacyLastUpdated : t.termsLastUpdated;
  const sections = isPrivacy ? t.privacySections : t.termsSections;

  return (
    <div 
      id="legalModalOverlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === "legalModalOverlay") {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl glass-panel text-white rounded-lg border border-primary-container/30 overflow-hidden shadow-[0_0_50px_rgba(255,92,0,0.25)] flex flex-col max-h-[85vh]">
        {/* Top glowing gradient border line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-container to-transparent" />

        {/* Modal Header */}
        <div className="p-6 flex justify-between items-start border-b border-outline-variant/30 bg-surface-container-low">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-primary-container/10 rounded border border-primary-container/20 text-primary-container">
              {isPrivacy ? <Shield size={24} /> : <FileText size={24} />}
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-tight">
                {title}
              </h2>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono text-slate-400">
                <Clock size={11} className="text-[#ffb59a]" />
                <span>{updatedDate}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 max-h-[calc(85vh-130px)] scrollbar-thin scrollbar-thumb-primary-container/20">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary-container font-black">
                {section.title}
              </h3>
              <div className="space-y-2.5">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p 
                    key={pIdx} 
                    className="font-sans text-xs sm:text-sm leading-relaxed text-slate-300 antialiased"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary-container hover:bg-[#ff711f] text-black font-semibold text-xs uppercase tracking-widest transition-all rounded-sm cursor-pointer hover:shadow-[0_0_15px_rgba(255,92,0,0.35)]"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
