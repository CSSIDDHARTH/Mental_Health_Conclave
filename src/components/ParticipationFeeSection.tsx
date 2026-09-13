import React from 'react';
import { ArrowRight, Check, ShieldCheck, HelpCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';

interface ParticipationFeeSectionProps {
  onRegisterClick: () => void;
}

export const ParticipationFeeSection: React.FC<ParticipationFeeSectionProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0f2347] to-[#0a192f] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-slate-800 overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-mandala-pattern pointer-events-none" />
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              
              {/* Left Column: Heading, Supporting Text and Inclusions */}
              <div className="space-y-5 text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-300 text-xs font-bold uppercase tracking-widest border border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Transparent Institutional Fee</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Participation Fee
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  {EVENT_DETAILS.feeScope}
                </p>

                {/* Included deliverables checklist */}
                <div className="pt-2 space-y-2.5 text-left inline-block lg:block">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Full delegation pass for <strong>50 to 80 Students</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Professional training cohort for <strong>10 to 20 Teachers</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Institutional Leadership registration for <strong>1 Principal</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Official certificates, training materials &amp; Conclave Participation Report</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing Display & CTA */}
              <div className="w-full lg:w-80 shrink-0">
                <div className="bg-slate-850/90 rounded-2xl p-7 border border-slate-700/80 text-center shadow-lg">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Total All-Inclusive Investment
                  </span>
                  
                  <div className="my-4">
                    <span className="font-display font-black text-4xl sm:text-5xl text-amber-300 tracking-tight block">
                      {EVENT_DETAILS.participationFee}
                    </span>
                    <span className="text-sm font-semibold text-slate-300 mt-1 block">
                      Per School
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-6">
                    Covers the designated participation of students, teachers and school leadership as per the official structure.
                  </p>

                  <button
                    onClick={onRegisterClick}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
                  >
                    <span>Register Your School</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                    Official IAMH Organizers Helpline: <strong className="text-slate-300">{EVENT_DETAILS.contactPhone}</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
