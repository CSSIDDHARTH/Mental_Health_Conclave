import React from 'react';
import { Users, GraduationCap, Crown, CheckCircle2 } from 'lucide-react';

interface ParticipationSectionProps {
  onRegisterClick: () => void;
}

export const ParticipationSection: React.FC<ParticipationSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="participation" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Users className="w-3.5 h-3.5 text-blue-700" />
            <span>Institutional Delegation Format</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Participation From Each School
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Each school nominates a structured, multi-tier delegation — enabling unified learning and real institutional change.
          </p>
        </div>

        {/* 3 Compact Delegation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">

          {/* Students Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold font-mono text-emerald-800">50–80</span>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-0.5">Student Delegates</h3>
            <p className="text-[11px] font-semibold text-emerald-700 mb-3 uppercase tracking-wider">Learners</p>
            <ul className="space-y-1.5 text-xs text-slate-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5 shrink-0">•</span>Interactive awareness workshops</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5 shrink-0">•</span>Mental health literacy sessions</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5 shrink-0">•</span>Peer empathy activities</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Participation Certificate</span>
            </div>
          </div>

          {/* Teachers Card */}
          <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[10px] font-bold uppercase px-3 py-0.5 rounded-full">
              Certified Training
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold font-mono text-blue-900">10–20</span>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-0.5">Teacher Cohort</h3>
            <p className="text-[11px] font-semibold text-blue-700 mb-3 uppercase tracking-wider">Educators</p>
            <ul className="space-y-1.5 text-xs text-slate-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 shrink-0">•</span>Early identification training</li>
              <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 shrink-0">•</span>Emotion management skills</li>
              <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 shrink-0">•</span>Psychological safety frameworks</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-700">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Training &amp; Participation Certificate</span>
            </div>
          </div>

          {/* School Leadership Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                <Crown className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold font-mono text-amber-800">1</span>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-0.5">School Principal</h3>
            <p className="text-[11px] font-semibold text-amber-700 mb-3 uppercase tracking-wider">Institutional Head</p>
            <ul className="space-y-1.5 text-xs text-slate-600 flex-1">
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5 shrink-0">•</span>Policy-level mental health guidance</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5 shrink-0">•</span>Institutional framework development</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5 shrink-0">•</span>Student welfare system strategy</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-amber-800">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>School Recognition Certificate</span>
            </div>
          </div>

        </div>

        {/* Compact footnote */}
        <div className="max-w-3xl mx-auto px-5 py-3 rounded-xl bg-white border border-slate-200 text-center text-xs text-slate-500 shadow-xs">
          <strong className="text-slate-700">Why this structure?</strong>{' '}
          Bridges the gap between student experience, teacher perception, and executive leadership — enabling whole-school change.
        </div>

      </div>
    </section>
  );
};
