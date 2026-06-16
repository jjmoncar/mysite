import React, { useState, useEffect, useRef } from "react";
import {
  Brain,
  View,
  Server,
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle,
  Copy,
  Cpu,
  RefreshCw,
  Clock,
  ExternalLink,
  MessageSquare,
  Shield,
  Code,
  AlertTriangle
} from "lucide-react";
import Navbar from "./components/Navbar";
import DiagnosticConsole from "./components/DiagnosticConsole";
import ServiceModal from "./components/ServiceModal";
import ProjectDrawer from "./components/ProjectDrawer";
import LegalModal from "./components/LegalModal";
import TiltCard from "./components/TiltCard";
import { ServiceDetail, ProjectDetail } from "./types";
import { TRANSLATIONS, Language } from "./translations";

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("pt")) return "pt";
      if (browserLang.startsWith("en")) return "en";
    }
    return "es";
  });

  const t = TRANSLATIONS[language];
  const servicesData = t.servicesData;
  const projectsData = t.projectsData;

  const [activeSection, setActiveSection] = useState("home");
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [legalMode, setLegalMode] = useState<"privacy" | "terms" | null>(null);
  
  // Parallax mouse position state for the robot helmet hero image
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });

  // Contact form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionProgress, setSubmissionProgress] = useState(0);
  const [subStage, setSubStage] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    timestamp: string;
    name: string;
    email: string;
    message: string;
    diagnosticHash: string;
  } | null>(null);

  // Diagnostic parameters for bottom system log easter egg
  const [copidIndicator, setCopyidIndicator] = useState(false);
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([]);

  useEffect(() => {
    if (language === "es") {
      setTelemetryLogs([
        "[SYSTEM] Inicializando malla neural JJSERVICES...",
        "[OK] Renderizador 3D activo (GPU Acceleration)",
        "[INFO] Conexión segura establecida en us-east1 (Run)"
      ]);
    } else if (language === "pt") {
      setTelemetryLogs([
        "[SYSTEM] Inicializando malha neural JJSERVICES...",
        "[OK] Renderizador 3D ativo (GPU Acceleration)",
        "[INFO] Conexão segura estabelecida via us-east1 (Run)"
      ]);
    } else {
      setTelemetryLogs([
        "[SYSTEM] Initializing JJSERVICES neural mesh...",
         "[OK] 3D Renderer active (GPU Acceleration)",
         "[INFO] Secure connection established on us-east1 (Run)"
      ]);
    }
  }, [language]);

  // Section Refs for smooth scroll trigger
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Auto scroll logic
  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    let targetRef: React.RefObject<HTMLDivElement | null> | null = null;
    
    if (id === "home") targetRef = homeRef;
    if (id === "services") targetRef = servicesRef;
    if (id === "projects") targetRef = projectsRef;
    if (id === "contact") targetRef = contactRef;

    if (targetRef && targetRef.current) {
      const topOffset = targetRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }

    // Interactive name input focus on Let's Talk scroll
    if (id === "contact") {
      setTimeout(() => {
        const input = document.getElementById("fullNameInput");
        if (input) input.focus();
      }, 800);
    }
  };

  // Intersection observer to automatically update active nav menu item on scroll
  useEffect(() => {
    const handleScrollUpdate = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = [
        { id: "home", ref: homeRef },
        { id: "services", ref: servicesRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef }
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          const height = section.ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollUpdate);
    return () => window.removeEventListener("scroll", handleScrollUpdate);
  }, []);

  // Parallax mouse moving calculations
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setHeroParallax({ x: x * 30, y: y * 30 });
  };

  const handleHeroMouseLeave = () => {
    setHeroParallax({ x: 0, y: 0 });
  };  // Simulate contact submit steps
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: typeof formErrors = {};
    if (!formName.trim()) errors.name = t.contact.errName;
    if (!formEmail.trim() || !formEmail.includes("@")) {
      errors.email = t.contact.errEmail;
    }
    if (!formMessage.trim()) errors.message = t.contact.errMessage;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitError(null);
    setIsSubmitting(true);
    setSubmissionProgress(10);
    setSubStage(t.contact.stage1);

    const recLog = language === "en" ? `[FORM] Query received from: ${formName}` : language === "pt" ? `[FORM] Consulta recebida de: ${formName}` : `[FORM] Consulta recibida de: ${formName}`;
    const auditLog = language === "en" ? `[FORM] Communicating with secure API...` : language === "pt" ? `[FORM] Comunicando com API segura...` : `[FORM] Comunicando con API segura...`;
    const okLog = language === "en" ? `[OK] Form submitted successfully for ${formName}.` : language === "pt" ? `[OK] Formulário enviado com sucesso para ${formName}.` : `[OK] Formulario enviado exitosamente para ${formName}.`;

    try {
      // Phase 1 loader simulation
      await new Promise(resolve => setTimeout(resolve, 600));
      setSubmissionProgress(35);
      setSubStage(t.contact.stage2);
      addTelemetryLog(recLog);

      // Phase 2 loader simulation
      await new Promise(resolve => setTimeout(resolve, 600));
      setSubmissionProgress(70);
      setSubStage(auditLog);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "05ee4e6a-0715-4995-be06-2e558c68d91f",
          name: formName,
          email: formEmail,
          message: formMessage,
          subject: language === "en" 
            ? `New contact message from ${formName} (JJSERVICES)` 
            : language === "pt" 
            ? `Nova mensagem de contato de ${formName} (JJSERVICES)` 
            : `Nuevo mensaje de contacto de ${formName} (JJSERVICES)`
        })
      });

      let result: any = {};
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const textResponse = await response.text();
        const cleanText = textResponse.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 150);
        throw new Error(cleanText || `Error del servidor (Status ${response.status})`);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Fallo al enviar el mensaje a través de Web3Forms.");
      }

      // Phase 3 finalization
      setSubmissionProgress(100);
      await new Promise(resolve => setTimeout(resolve, 600));
      
      setIsSubmitting(false);
      setSubmittedData({
        id: "JJMC-" + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toLocaleTimeString(),
        name: formName,
        email: formEmail,
        message: formMessage,
        diagnosticHash: "0x" + Math.random().toString(16).substr(2, 8).toUpperCase()
      });
      addTelemetryLog(okLog);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    } catch (err: any) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      setSubmitError(err.message || "Failed to deliver contact request.");
      addTelemetryLog(`[ERROR] ${err.message || "Submission failed"}`);
    }
  };

  const addTelemetryLog = (log: string) => {
    setTelemetryLogs((prev) => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] ${log}`]);
  };

  const copyDiagnosticId = () => {
    if (submittedData) {
      navigator.clipboard.writeText(submittedData.id);
      setCopyidIndicator(true);
      setTimeout(() => setCopyidIndicator(false), 2000);
    }
  };

  // Icon switcher helper for services
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="text-primary-container" size={40} />;
      case "ViewQuilt":
        return <View className="text-primary-container" size={40} />;
      case "CloudSync":
        return <Server className="text-primary-container" size={40} />;
      default:
        return <Brain className="text-primary-container" size={40} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-[#e3e2e7] antialiased selection:bg-primary-container selection:text-black font-sans">
      {/* Dynamic Grid Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="grid-bg w-full h-full" />
      </div>

      {/* Decorative top ambient color blur gradients */}
      <div className="absolute top-[-10%] left-[5%] w-[40%] h-[50%] bg-[#ff5c00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[35%] h-[40%] bg-[#ffb59a]/3 blur-[140px] rounded-full pointer-events-none" />

      {/* Interactive Navigation header */}
      <Navbar
        onScrollToSection={handleScrollToSection}
        activeSection={activeSection}
        currentLanguage={language}
        onLanguageChange={setLanguage}
        labels={t.nav}
      />

      {/* Hero Home Section */}
      <header
        ref={homeRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Hero Context */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[1px] bg-primary-container animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-primary uppercase font-bold">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              {t.hero.titleFirst} <span className="text-primary-container relative inline-block">
                {t.hero.titleHighlight}
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-primary-container/30 rounded-full" />
              </span> {t.hero.titleLast}
            </h1>

            <p className="font-sans text-[#e4beb1]/80 text-sm sm:text-lg leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-3">
              <button
                onClick={() => handleScrollToSection("projects")}
                className="group inline-flex items-center justify-center px-8 py-3.5 bg-primary-container hover:bg-[#ff711f] text-black font-semibold text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_25px_rgba(255,92,0,0.45)] transform hover:scale-105 active:scale-95 duration-200 rounded-sm cursor-pointer"
              >
                {t.hero.btnProjects}
              </button>
              <button
                onClick={() => handleScrollToSection("services")}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-container/50 hover:border-primary-container text-primary-container hover:bg-primary-container/10 font-semibold text-xs uppercase tracking-widest transition-all rounded-sm cursor-pointer"
              >
                {t.hero.btnServices}
              </button>
            </div>
          </div>

          {/* Right Hero Interactive Media with dynamic Parallax */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div
              className="relative w-full max-w-md aspect-square group cursor-pointer"
              onMouseMove={handleHeroMouseMove}
              onMouseLeave={handleHeroMouseLeave}
            >
              {/* Cinematic back glow which glows much warmer on hover */}
              <div className="absolute -inset-6 bg-primary-container/10 group-hover:bg-primary-container/25 blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700" />

              {/* Parallax Image boundary */}
              <div className="relative w-full h-full rounded-xl overflow-hidden glass-panel p-2 border border-primary/20 transition-all duration-300 group-hover:border-primary-container/50">
                <img
                  alt="JJSERVICES AI Client Helmet Avatar"
                  className="w-full h-full object-contain relative z-10 select-none transition-transform"
                  style={{
                    transform: `scale(1.05) translate(${heroParallax.x}px, ${heroParallax.y}px)`,
                    transition: "transform 0.1s linear"
                  }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf2ORJqGeEzcGugMxB7jD5WoS5D3LlR3l0Ut1i85bkrjPfL0zOW2K4xMpJjG-T-5vQVDEknrW4XIHJvn1_hZGzEWXlNV_Xqu7OnrP74s_aKEN2GZftVuKX9df67fp1bkZPrT0OfYavyUao9hU6Jw6IC9pbKKmk122WImSs2nhIKMbMIEyoPMkJtr7CLDcEmqaNW4m2ZfzdolzQkzz7K1BRaZdIU5QoZXtEARlff7Y23y_Gt0oPqxbRB2ciqKTilBkM66NrsGDP06qG"
                  referrerPolicy="no-referrer"
                />

                {/* Cyber grid overlays */}
                <div className="absolute inset-x-0 bottom-4 text-center z-15 pointer-events-none">
                  <span className="inline-block opacity-40 text-[9px] font-mono tracking-widest uppercase bg-black/80 text-[#ffb59a] px-3 py-1 rounded border border-outline-variant/30">
                    SINC MODE ACTIVE
                  </span>
                </div>
              </div>

              {/* Real-time reactive floating telemetry console widget */}
              <div className="absolute bottom-6 -left-6 z-20">
                <DiagnosticConsole t={t.dialogs} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-24 px-6 md:px-12 bg-black border-t border-outline-variant/10 relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white">
              {t.services.titleFirst} <span className="text-primary-container">{t.services.titleHighlight}</span>
            </h2>
            <div className="w-24 h-[3px] bg-primary-container mx-auto rounded-full" />
            <p className="text-[#e4beb1]/70 text-xs md:text-sm max-w-md mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          {/* Core Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <TiltCard key={service.id} className="group">
                <div className="glass-panel p-8 md:p-10 rounded-lg neon-glow flex flex-col justify-between h-full bg-[#0a0706]/90 border border-outline-variant/10 transition-colors duration-300">
                  <div>
                    {/* Glowing icon circle */}
                    <div className="mb-6 p-4 w-16 h-16 rounded-lg bg-black/40 border border-primary-container/20 flex items-center justify-center transition-transform group-hover:scale-110">
                      {renderServiceIcon(service.icon)}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[#ffb59a] transition-colors leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-[#e4beb1]/80 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div className="h-[1px] w-full bg-outline-variant/20 mb-6" />
                    <button
                      onClick={() => setSelectedService(service)}
                      className="group/link text-xs tracking-widest text-[#ff5c00] font-mono font-bold flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
                    >
                      {t.services.learnMore}{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-2"
                      />
                    </button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Featured Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="py-24 px-6 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="font-mono text-xs text-primary-container uppercase tracking-widest block mb-2 font-black">
                {t.projects.badge}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
                {t.projects.title}
              </h2>
            </div>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="font-mono text-xs border-b border-primary-container text-primary-container pb-0.5 hover:text-white hover:border-white transition-colors uppercase tracking-widest"
            >
              {t.projects.cta} ➔
            </button>
          </div>

          {/* Interactive Bento Grid Layout matching design specs */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[820px]">
            
            {/* Project 1 (Large - Spans 2 cols, 2 rows) */}
            <div
              onClick={() => setSelectedProject(projectsData[0])}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-surface-container rounded-lg border border-outline-variant/20 cursor-pointer text-left shadow-lg hover:border-primary-container/40 transition-all duration-500"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-55 group-hover:opacity-70"
                src={projectsData[0].image}
                alt={projectsData[0].title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 z-10 space-y-2">
                <span className="inline-block bg-primary-container/20 border border-primary-container/40 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest text-[#ffb59a] font-black uppercase">
                  {projectsData[0].category}
                </span>
                <h4 className="font-display text-2xl md:text-3xl font-extrabold text-white group-hover:text-primary-container transition-colors leading-tight">
                  {projectsData[0].title}
                </h4>
                <p className="text-on-surface-variant/70 text-xs font-sans line-clamp-2 max-w-sm hidden sm:block">
                  {projectsData[0].shortDesc}
                </p>
              </div>
            </div>

            {/* Project 2 (Wide - Spans 2 cols) */}
            <div
              onClick={() => setSelectedProject(projectsData[1])}
              className="md:col-span-2 group relative overflow-hidden bg-surface-container rounded-lg border border-outline-variant/20 cursor-pointer text-left shadow-lg hover:border-primary-container/40 transition-all duration-500"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-50 group-hover:opacity-65"
                src={projectsData[1].image}
                alt={projectsData[1].title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-1">
                <span className="inline-block bg-primary-container/20 border border-primary-container/40 px-2 py-0.5 rounded text-[9px] font-mono tracking-widest text-[#ffb59a] font-bold uppercase">
                  {projectsData[1].category}
                </span>
                <h4 className="font-display text-xl md:text-2xl font-extrabold text-white group-hover:text-primary-container transition-colors">
                  {projectsData[1].title}
                </h4>
              </div>
            </div>

            {/* Project 3 (Square - Portrait bottom-left inside row 2) */}
            <div
              onClick={() => setSelectedProject(projectsData[2])}
              className="group relative overflow-hidden bg-surface-container rounded-lg border border-outline-variant/20 cursor-pointer text-left shadow-lg hover:border-primary-container/40 transition-all duration-500 min-h-[220px]"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-45 group-hover:opacity-60"
                src={projectsData[2].image}
                alt={projectsData[2].title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-5 left-5 z-10 space-y-1">
                <span className="text-[9px] font-mono text-primary-container tracking-wider block font-bold">
                  {projectsData[2].category}
                </span>
                <h4 className="font-display text-lg font-bold text-white group-hover:text-primary-container transition-colors leading-tight">
                  {projectsData[2].title}
                </h4>
              </div>
            </div>

            {/* Project 4 (Square - Portrait bottom-right inside row 2) */}
            <div
              onClick={() => setSelectedProject(projectsData[3])}
              className="group relative overflow-hidden bg-surface-container rounded-lg border border-outline-variant/20 cursor-pointer text-left shadow-lg hover:border-primary-container/40 transition-all duration-500 min-h-[220px]"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-45 group-hover:opacity-60"
                src={projectsData[3].image}
                alt={projectsData[3].title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-5 left-5 z-10 space-y-1">
                <span className="text-[9px] font-mono text-primary-container tracking-wider block font-bold">
                  {projectsData[3].category}
                </span>
                <h4 className="font-display text-lg font-bold text-white group-hover:text-primary-container transition-colors leading-tight">
                  {projectsData[3].title}
                </h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Consultation Form Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-24 px-6 md:px-12 relative overflow-hidden bg-black/50"
      >
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[50%] bg-[#ff5c00]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-2xl relative z-10">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-display text-4xl font-extrabold text-white">
              {t.contact.title}
            </h2>
            <p className="text-[#e4beb1]/70 text-sm max-w-md mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          {!submittedData ? (
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {submitError && (
                <div className="md:col-span-2 p-5 bg-[#0e0a08] border border-[#ff5c00]/30 rounded-lg text-left flex gap-4 items-start animate-fadeIn">
                  <div className="p-2 bg-[#ff5c00]/10 text-primary-container rounded border border-[#ff5c00]/20">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      {language === "en" ? "EMAIL CONFIGURATION REQUIRED" : language === "pt" ? "CONFIGURAÇÃO POR CONFIGURAR" : "CONFIGURACIÓN DE CORREO REQUERIDA"}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {submitError}
                    </p>
                  </div>
                </div>
              )}
              {/* Full name input */}
              <div className="space-y-2 text-left">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#ffb59a] font-bold">
                  {t.contact.nameLabel}
                </label>
                <input
                  id="fullNameInput"
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-black/60 border border-outline-variant/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container p-4 outline-none text-white text-sm transition-all rounded"
                />
                {formErrors.name && (
                  <span className="text-xs text-red-400 block mt-1">{formErrors.name}</span>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2 text-left">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#ffb59a] font-bold">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full bg-black/60 border border-outline-variant/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container p-4 outline-none text-white text-sm transition-all rounded"
                />
                {formErrors.email && (
                  <span className="text-xs text-red-400 block mt-1">{formErrors.email}</span>
                )}
              </div>

              {/* Message text area */}
              <div className="md:col-span-2 space-y-2 text-left">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#ffb59a] font-bold">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full bg-black/60 border border-outline-variant/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container p-4 outline-none text-white text-sm transition-all rounded resize-none"
                />
                {formErrors.message && (
                  <span className="text-xs text-red-400 block mt-1">{formErrors.message}</span>
                )}
              </div>

              {/* Loading Submission and Stages */}
              {isSubmitting ? (
                <div className="md:col-span-2 text-center py-4 space-y-3">
                  <div className="w-full bg-surface-container h-[4px] rounded-full overflow-hidden">
                    <div
                      className="bg-primary-container h-full transition-all duration-300 rounded-full"
                      style={{ width: `${submissionProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-3 text-xs font-mono text-[#ffb59a]">
                    <RefreshCw className="animate-spin text-primary-container" size={14} />
                    <span>{subStage}</span>
                  </div>
                </div>
              ) : (
                <div className="md:col-span-2 text-center pt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center bg-primary-container hover:bg-[#ff711f] text-black font-display font-extrabold text-xs uppercase tracking-widest px-12 py-4 shadow-[0_4px_30px_rgba(255,92,0,0.15)] hover:shadow-[0_0_30px_rgba(255,92,0,0.4)] transition-all transform hover:scale-105 duration-200 cursor-pointer rounded-sm"
                  >
                    {t.contact.btnSubmit} <Send size={12} className="ml-2 animate-bounce" />
                  </button>
                </div>
              )}
            </form>
          ) : (
            /* Interactive Receipt Diagnostic Summary Block on successful compile template */
            <div className="space-y-6 text-left p-6 md:p-8 bg-[#090b0d] border border-primary-container/20 rounded-lg animate-fadeIn font-mono">
              <div className="flex items-center gap-3 text-emerald-400 pb-4 border-b border-outline-variant/20">
                <CheckCircle size={28} />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-[10.5px] text-emerald-400/80">
                    {t.contact.successSub}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/40 p-4 rounded border border-outline-variant/10">
                  <div>
                    <span className="text-[10px] text-slate-500 block">{t.contact.idLabel}</span>
                    <strong className="text-primary-container text-sm">{submittedData.id}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">{t.contact.hashLabel}</span>
                    <strong className="text-white font-mono">{submittedData.diagnosticHash}</strong>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] text-[#ffb59a] font-bold block">{t.contact.receiptLabel}</span>
                  <div className="bg-black/50 p-4 rounded text-[11px] leading-relaxed text-slate-200 space-y-2">
                    <div>
                      <span className="text-slate-500">{t.contact.nameReceipt} </span> {submittedData.name}
                    </div>
                    <div>
                      <span className="text-slate-500">{t.contact.emailReceipt} </span> {submittedData.email}
                    </div>
                    <div>
                      <span className="text-slate-500">{t.contact.metaReceipt} </span> {submittedData.message}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3 justify-between items-center bg-transparent">
                <button
                  onClick={copyDiagnosticId}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-[11px] uppercase tracking-wider font-mono flex items-center gap-2 border border-outline-variant/30 transition-all rounded"
                >
                  <Copy size={12} />
                  {copidIndicator ? t.contact.btnCopyOk : t.contact.btnCopy}
                </button>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-5 py-2 bg-primary-container text-black text-[11px] uppercase tracking-wider font-bold hover:bg-white transition-all rounded-sm"
                >
                  {t.contact.btnNew}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer statistics console diagnostic widget */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/15 md:py-12 py-8 mt-16 relative z-10 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="font-display font-black text-white text-lg tracking-widest uppercase">
              JJSERVICES
            </span>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              © 2026 JJSERVICES. {t.footer.rights}
            </p>
          </div>

          {/* Socials & Policies */}
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
            <a href="https://www.linkedin.com/in/jjmoncar/" className="text-slate-400 hover:text-primary-container transition-all">
              LINKEDIN
            </a>
            <a href="https://github.com/jjmoncar" className="text-slate-400 hover:text-primary-container transition-all">
              GITHUB
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                setLegalMode("privacy");
              }}
              className="text-slate-400 hover:text-primary-container transition-all cursor-pointer bg-transparent border-none uppercase text-xs tracking-mono font-mono"
            >
              PRIVACY POLICY
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setLegalMode("terms");
              }}
              className="text-slate-400 hover:text-primary-container transition-all cursor-pointer bg-transparent border-none uppercase text-xs tracking-mono font-mono"
            >
              TERMS
            </button>
          </div>
        </div>

        {/* Dynamic telemetric log output at the absolute footer margin */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
          <div className="flex items-center gap-3">
            <Cpu size={12} className="text-primary-container animate-pulse" />
            <div className="space-x-2">
              <span className="text-slate-400">{t.footer.logActivation}:</span>
              <span className="font-mono text-xs text-white">ONLINE</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-black/80 px-4 py-1.5 rounded border border-outline-variant/20 flex gap-2">
              <span className="text-slate-500">{t.footer.logsLabel}:</span>
              <span className="text-[#ffb59a]">{telemetryLogs[telemetryLogs.length - 1]}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Specialty interactive service technical case-study modal popup */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        t={t.services}
      />

      {/* Specialty detailed project architecture sliding layout drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        t={t.projects}
      />

      {/* Structured multi-record translatable legal documents modal component */}
      <LegalModal
        mode={legalMode}
        onClose={() => setLegalMode(null)}
        t={t.legal}
      />
    </div>
  );
}
