import React from 'react';
import { PhoneCall, ShieldCheck, HelpCircle, ArrowUpRight, School } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';
import { IAMHLogo } from './InstitutionalBadges';

interface ContactSectionProps {
  onRegisterClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-700">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Event Inquiries</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact IAMH
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have questions regarding school delegation nominations, program modules, or institutional participation? Reach out directly to the organizers.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Official Helpline */}
          <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-5">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Official Conclave Helpline
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-2 mb-1">
                Direct Phone Contact
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Connect with the conclave organizing coordinator for registration and inquiries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <a
                href={`tel:${EVENT_DETAILS.contactPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-sm transition-all w-full justify-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span className="tabular-nums font-mono">{EVENT_DETAILS.contactPhone}</span>
              </a>
              <span className="text-[11px] text-slate-400 block text-center mt-2">
                Click to dial directly from your device
              </span>
            </div>
          </div>

          {/* Card 2: Register Your School */}
          <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-sky-300 flex items-center justify-center mb-5">
                <School className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Institutional Enrolment
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-2 mb-1">
                Register Your School
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Reserve delegation passes for 50-80 students, 10-20 teachers, and Principal.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm transition-all w-full justify-center"
              >
                <span>Complete Registration</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 block text-center mt-2">
                Fee: {EVENT_DETAILS.participationFee} Per School
              </span>
            </div>
          </div>

          {/* Card 3: General Program Enquiries */}
          <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-5">
                <HelpCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Program Information
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-2 mb-1">
                General Program Enquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Inquiries regarding World Mental Health Day 2026 scheduling, certifications, or syllabus.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-center">
                <span className="text-xs font-semibold text-slate-300 block">Call Helpline</span>
                <a
                  href={`tel:${EVENT_DETAILS.contactPhone}`}
                  className="font-mono text-sm font-bold text-amber-300 hover:underline"
                >
                  {EVENT_DETAILS.contactPhone}
                </a>
              </div>
              <span className="text-[11px] text-slate-400 block text-center mt-2">
                Monday to Saturday, 10:00 AM – 6:00 PM
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
