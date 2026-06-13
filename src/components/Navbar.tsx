import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Language } from "../translations";

interface NavbarProps {
  onScrollToSection: (id: string) => void;
  activeSection: string;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  labels: {
    home: string;
    services: string;
    projects: string;
    contact: string;
    ctaButton: string;
  };
}

export default function Navbar({
  onScrollToSection,
  activeSection,
  currentLanguage,
  onLanguageChange,
  labels
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: labels.home, id: "home" },
    { label: labels.services, id: "services" },
    { label: labels.projects, id: "projects" },
    { label: labels.contact, id: "contact" }
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" }
  ];

  return (
    <nav
      id="top-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-black/95 backdrop-blur-xl border-b border-primary-container/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <div
          onClick={() => onScrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="font-mono text-black font-extrabold text-lg">J</span>
          </div>
          <span className="font-display text-2xl font-black text-white tracking-tight group-hover:text-primary transition-colors">
            JJSERVICES
          </span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className={`font-sans text-xs tracking-widest uppercase transition-all duration-300 relative py-1 cursor-pointer font-semibold ${
                activeSection === item.id
                  ? "text-primary-container"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-container animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Language & CTA Controls */}
        <div className="hidden md:flex items-center gap-6">
          {/* Custom Language Selector Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container border border-outline-variant/30 text-white hover:border-primary-container/50 transition-all text-xs font-mono font-semibold"
              aria-label="Select Language"
            >
              <Globe size={13} className="text-primary-container" />
              <span className="uppercase">{currentLanguage}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-black/95 border border-primary-container/30 backdrop-blur-md rounded shadow-xl py-1 z-50 animate-fadeIn text-xs">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-primary-container/10 transition-colors flex items-center justify-between font-mono ${
                      currentLanguage === lang.code ? "text-primary-container font-extrabold" : "text-white"
                    }`}
                  >
                    <span>{lang.label}</span>
                    <span className="text-sm">{lang.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onScrollToSection("contact")}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-primary-container text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,92,0,0.5)] scale-100 hover:scale-105 active:scale-95 cursor-pointer rounded-sm"
          >
            {labels.ctaButton}
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile Language buttons directly visible in header */}
          <div className="flex bg-surface-container/80 border border-outline-variant/30 rounded p-0.5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`w-7 h-7 flex items-center justify-center text-xs font-mono font-bold uppercase transition-all rounded-sm ${
                  currentLanguage === lang.code
                    ? "bg-primary-container text-black"
                    : "text-on-surface-variant hover:text-white"
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-on-surface hover:text-primary-container transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-primary-container/20 backdrop-blur-3xl animate-fadeIn">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase font-bold tracking-widest transition-colors py-2 ${
                  activeSection === item.id
                    ? "text-primary-container"
                    : "text-on-surface"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onScrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-primary-container text-black py-3 font-semibold text-xs uppercase tracking-widest text-center"
            >
              {labels.ctaButton}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
