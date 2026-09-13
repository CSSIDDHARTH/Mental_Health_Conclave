import React from 'react';
import { Users, GraduationCap, Crown, CheckCircle2, ArrowRight } from 'lucide-react';
import { DELEGATION_STRUCTURE } from '../data/conclaveData';

interface ParticipationSectionProps {
  onRegisterClick: () => void;
}

export const ParticipationSection: React.FC<ParticipationSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="participation" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Users className="w-3.5 h-3.5 text-blue-700" />
            <span>Institutional Delegation Format</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Participation From Each School
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Each participating school can nominate a structured delegation comprising students, teachers and school leadership. This deliberate multi-tier cohort enables meaningful dialogue and unified implementation back in your school.
          </p>
        </div>

        {/* 3 Premium Delegation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Students Card */}
          <div className="bg-white rounded-3xl p-7 border-2 border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-100">
                <Users className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                Student Delegates
              </span>

              <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-4 mb-2">
                Students
              </h3>

              <div className="py-4 my-2 border-y border-slate-100">
                <div className="flex items-baseline justify-between text-slate-900">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Delegation Size</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-mono text-emerald-800">50 – 80</span>
                    <span className="text-xs text-slate-500 block">Learners</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                  <span>Minimum: <strong>50</strong></span>
                  <span>Maximum: <strong>80</strong></span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {DELEGATION_STRUCTURE.students.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Participation Certificates Awarded</span>
            </div>
          </div>

          {/* Teachers Card */}
          <div className="bg-white rounded-3xl p-7 border-2 border-blue-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[11px] font-bold uppercase px-3 py-0.5 rounded-full shadow-xs">
              Certified Training
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 border border-blue-100">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                Educator Cohort
              </span>

              <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-4 mb-2">
                Teachers
              </h3>

              <div className="py-4 my-2 border-y border-slate-100">
                <div className="flex items-baseline justify-between text-slate-900">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Cohort Size</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-mono text-blue-900">10 – 20</span>
                    <span className="text-xs text-slate-500 block">Educators</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                  <span>Minimum: <strong>10</strong></span>
                  <span>Maximum: <strong>20</strong></span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {DELEGATION_STRUCTURE.teachers.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Training &amp; Participation Certificates</span>
            </div>
          </div>

          {/* School Leadership Card */}
          <div className="bg-white rounded-3xl p-7 border-2 border-slate-200/90 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 border border-amber-100">
                <Crown className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                Institutional Head
              </span>

              <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-4 mb-2">
                School Leadership
              </h3>

              <div className="py-4 my-2 border-y border-slate-100">
                <div className="flex items-baseline justify-between text-slate-900">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Institutional Head</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-mono text-amber-800">1</span>
                    <span className="text-xs text-slate-500 block">Principal</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                  <span>Designation:</span>
                  <strong>Principal – 1</strong>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {DELEGATION_STRUCTURE.leadership.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Official School Recognition Certificate</span>
            </div>
          </div>

        </div>

        {/* Short explanation box as requested */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            <strong>Why this structure?</strong> This tripartite format bridges the communication gap between adolescent student experiences, daily teacher perceptions, and executive administrative policy.
          </p>
        </div>

      </div>
    </section>
  );
};
