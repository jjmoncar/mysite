import React, { useState, useEffect } from "react";
import { Cpu, Terminal } from "lucide-react";

interface DiagnosticConsoleProps {
  t: {
    systemActive: string;
    latency: string;
    clickDiagnostics: string;
    telemetryTitle: string;
    operMode: string;
    cpuLoad: string;
    ram: string;
    uptime: string;
    aiModel: string;
    ingress: string;
    changeProfile: string;
    diagnosticLabel: string;
  };
}

export default function DiagnosticConsole({ t }: DiagnosticConsoleProps) {
  const [latency, setLatency] = useState(0.04);
  const [cpu, setCpu] = useState(12.4);
  const [mem, setMem] = useState("1.84 GB");
  const [uptime, setUptime] = useState("02:44:12");
  const [isExpanded, setIsExpanded] = useState(false);
  const [systemMode, setSystemMode] = useState<"Optimal" | "Maximum" | "Eco">("Optimal");

  useEffect(() => {
    // Smoothly simulate fluctuations
    const interval = setInterval(() => {
      setLatency((prev) => {
        const factor = systemMode === "Maximum" ? 0.02 : systemMode === "Eco" ? 0.09 : 0.04;
        const randomness = (Math.random() - 0.5) * 0.01;
        return parseFloat(Math.max(0.01, factor + randomness).toFixed(3));
      });

      setCpu((prev) => {
        const factor = systemMode === "Maximum" ? 38.5 : systemMode === "Eco" ? 4.2 : 11.8;
        const randomness = (Math.random() - 0.5) * 1.5;
        return parseFloat(Math.max(1.0, factor + randomness).toFixed(1));
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [systemMode]);

  // Keep uptime counter moving
  useEffect(() => {
    let secs = 44 * 3600 + 12 * 60 + 5;
    const interval = setInterval(() => {
      secs++;
      const hrs = Math.floor(secs / 3600);
      const mins = Math.floor((secs % 3600) / 60);
      const remainingSecs = secs % 60;
      setUptime(
        `${hrs.toString().padStart(2, "0")}:${mins
          .toString()
          .padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Absolute Compact Widget floating on top of image */}
      <div
        id="system-status-trigger"
        onClick={() => setIsExpanded(!isExpanded)}
        className="glass-panel p-4 rounded-xl border-l-[3px] border-l-primary-container border-primary/20 cursor-pointer shadow-lg hover:bg-black/80 transition-all duration-300 transform hover:scale-105 active:scale-95 group text-left max-w-xs select-none"
      >
        <div className="flex items-center justify-between gap-12 font-mono">
          <div>
            <div className="text-[10px] tracking-widest text-primary-container font-black flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              {t.systemActive}
            </div>
            <div className="text-sm font-bold text-white mt-1 font-mono">
              {t.latency} <span className="text-primary-container">{latency}ms</span>
            </div>
          </div>
          <Cpu className="text-primary-container/70 group-hover:text-primary-container transition-colors" size={18} />
        </div>
        <div className="text-[9px] text-on-surface-variant/70 mt-2 text-right tracking-tight font-mono">
          {t.clickDiagnostics}
        </div>
      </div>

      {/* Floating Detailed Console Overlay */}
      {isExpanded && (
        <div className="absolute left-0 lg:left-0 md:left-unset md:right-0 top-full mt-4 w-80 glass-panel rounded-xl p-5 border border-primary-container/30 shadow-[0_10px_40px_rgba(0,0,0,0.9)] z-50 animate-slideUp font-mono">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-outline-variant/30">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Terminal size={12} className="text-primary-container" /> {t.telemetryTitle}
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs text-on-surface-variant hover:text-white"
            >
              [X]
            </button>
          </div>

          <div className="space-y-3 text-[11px] text-on-surface-variant">
            <div className="flex justify-between">
              <span>{t.operMode}</span>
              <span className="text-white font-bold">{systemMode}</span>
            </div>

            <div className="flex justify-between">
              <span>{t.cpuLoad}</span>
              <span className="text-primary font-bold">{cpu}%</span>
            </div>

            <div className="flex justify-between">
              <span>{t.ram}</span>
              <span className="text-white font-bold">{mem}</span>
            </div>

            <div className="flex justify-between">
              <span>{t.uptime}</span>
              <span className="text-white font-semibold">{uptime}</span>
            </div>

            <div className="flex justify-between">
              <span>{t.aiModel}</span>
              <span className="text-primary-container font-semibold">Gemini Flash-v3.5</span>
            </div>

            <div className="flex justify-between">
              <span>{t.ingress}</span>
              <span className="text-slate-300">us-east1 (Run)</span>
            </div>
          </div>

          {/* Interactive Simulation Preset Buttons */}
          <div className="mt-4 pt-3 border-t border-outline-variant/30">
            <div className="text-[10px] text-primary mb-2 uppercase tracking-wide">{t.changeProfile}</div>
            <div className="grid grid-cols-3 gap-1.5">
              {(["Optimal", "Maximum", "Eco"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSystemMode(mode)}
                  className={`px-1 py-1 text-[9px] font-bold border rounded-sm transition-all uppercase tracking-tight ${
                    systemMode === mode
                      ? "bg-primary-container/20 border-primary-container text-primary-container"
                      : "border-outline-variant/30 text-on-surface-variant hover:text-white"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 text-[9px] text-[#ffb59a]/60 text-center uppercase tracking-widest italic antialiased leading-tight">
            {t.diagnosticLabel}
          </div>
        </div>
      )}
    </div>
  );
}
