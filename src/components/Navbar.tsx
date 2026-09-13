import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { IAMHLogo } from './InstitutionalBadges';
import { EVENT_DETAILS } from '../data/conclaveData';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Program Focus', href: '#program-focus' },
    { label: 'Participation', href: '#participation' },
    { label: 'Venue', href: '#venue' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Floating Oval Pill Navbar Container */}
        <div
          className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl shadow-black/50 py-2 px-3 sm:px-5'
              : 'bg-slate-900/85 backdrop-blur-lg border border-slate-800/80 shadow-xl py-2.5 px-3.5 sm:px-6'
          } flex items-center justify-between gap-2 sm:gap-4`}
        >
          {/* Brand Logo & Title */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full py-0.5 px-1 sm:px-2 shrink-0"
            aria-label="Indian Academy of Mental Health Conclave Home"
          >
            <div className="relative shrink-0 flex items-center justify-center">
              <IAMHLogo size={36} className="h-9 w-9 sm:h-10 sm:w-10 transition-transform duration-200 group-hover:scale-105" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-white text-xs sm:text-sm tracking-tight leading-tight">
                  IAMH CONCLAVE
                </span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950">
                  2026
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-normal line-clamp-1">
                BHU Varanasi • 6 Oct
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links - Pill list */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-800/40 border border-slate-700/40 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all focus:outline-none focus:ring-1 focus:ring-amber-400"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Helpline on medium+ screens */}
            <a
              href={`tel:${EVENT_DETAILS.contactPhone}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-amber-300 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-full transition-all"
              title="Helpline Call"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="tabular-nums font-mono text-[11px]">{EVENT_DETAILS.contactPhone}</span>
            </a>

            {/* Primary Register CTA */}
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-full shadow-md hover:shadow-amber-400/25 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-900 hidden xs:block" />
              <span>Register</span>
              <span className="hidden sm:inline">School</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu: Floating Pill-styled Card */}
        {isOpen && (
          <div className="pointer-events-auto mt-2 w-full max-w-lg rounded-3xl bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl p-4 sm:p-5 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="p-2.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                School Mental Health Conclave
              </span>
              <span className="text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                {EVENT_DETAILS.date}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left px-3 py-2.5 rounded-2xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/90 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2">
              <a
                href={`tel:${EVENT_DETAILS.contactPhone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-800/90 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Helpline: {EVENT_DETAILS.contactPhone}</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-full shadow flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Register Your School</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
