import React, { useState } from 'react';
import { PhoneCall, MapPin, Calendar, Heart, ShieldCheck, Mail, ArrowUp, ExternalLink, Sparkles } from 'lucide-react';
import { IAMHLogo } from './InstitutionalBadges';
import { EVENT_DETAILS } from '../data/conclaveData';
import { PolicyModal } from './PolicyModals';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About IAMH', href: '#about' },
    { label: 'Conclave Objectives', href: '#objectives' },
    { label: 'Program Focus', href: '#program-focus' },
    { label: 'Delegate Participation', href: '#participation' },
    { label: 'Venue & Location', href: '#venue' },
    { label: 'Contact & Helpline', href: '#contact' },
  ];

  const focusThemes = [
    'Student Emotional Wellbeing',
    'Early Behavioral Identification',
    'Teacher Mental Health & Burnout',
    'School Counseling Infrastructure',
    'Safe & Inclusive Classrooms',
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-[#081528] via-[#050e1c] to-[#020710] text-slate-300 overflow-hidden">
        {/* Subtle Glowing Decorative Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Golden Indian Motif Accent Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
            
            {/* Column 1: Organization & Identity (Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md shrink-0">
                  <IAMHLogo size={52} className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-black text-white text-lg sm:text-xl tracking-tight leading-tight">
                      Indian Academy of Mental Health
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-amber-400 mt-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>School Mental Health Conclave 2026</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    In Academic Collaboration with Dept. of Psychiatry, IMS-BHU
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2">
                A landmark national summit bringing educators, school leaders, psychologists, and clinicians together to cultivate mentally healthy students, resilient teachers, and supportive classrooms across India.
              </p>

              {/* Verified Summit Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Non-commercial Educational Initiative for Schools</span>
              </div>
            </div>

            {/* Column 2: Quick Links (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-amber-400"></span>
                <span>Conclave Navigation</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Event Overview & Venue Card (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-blue-400"></span>
                <span>Event Quick Glance</span>
              </h4>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 shadow-inner">
                {/* Date & Time */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{EVENT_DETAILS.date} ({EVENT_DETAILS.day})</p>
                    <p className="text-[11px] text-slate-400">{EVENT_DETAILS.time}</p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{EVENT_DETAILS.venueName}</p>
                    <p className="text-[11px] text-slate-400">Banaras Hindu University, Varanasi</p>
                    <a
                      href="#venue"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#venue');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] text-amber-300 font-semibold hover:underline mt-0.5"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Contact Helpline */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Helpline &amp; Inquiries:</span>
                    <a
                      href={`tel:${EVENT_DETAILS.contactPhone}`}
                      className="block font-mono text-sm font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
                    >
                      {EVENT_DETAILS.contactPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* National Mental Health Awareness Helpline Strip */}
          <div className="my-8 p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/60 to-blue-950/60 border border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <div className="w-7 h-7 rounded-full bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Heart className="w-3.5 h-3.5 fill-sky-400/20" />
              </div>
              <p className="text-slate-300">
                <strong className="text-white">National Student &amp; Youth Support:</strong> In case of urgent emotional crisis, reach Government of India’s 24/7 Tele-MANAS helpline at <strong className="text-amber-300 font-mono">14416</strong>.
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-[11px] font-semibold transition-colors shrink-0"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Sub-footer: Policies, Copyright, Legal Notice */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-800/60">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Indian Academy of Mental Health (IAMH). All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-slate-400">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
              >
                Terms of Participation
              </button>
              <span className="text-slate-700">•</span>
              <span className="text-slate-500">BHU Varanasi</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Policy & Terms Modal Dialog */}
      <PolicyModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'privacy'}
      />
    </>
  );
};
