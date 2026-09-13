import React from 'react';
import { Award, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATION_TIERS } from '../data/conclaveData';
import { IAMHLogo } from './InstitutionalBadges';

export const CertificationSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>Formal Institutional Credentials</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certification &amp; Recognition
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            All participating students, teachers, and school leadership receive authorized institutional certifications issued by the Indian Academy of Mental Health (IAMH) and Department of Psychiatry, IMS-BHU.
          </p>
        </div>

        {/* 3 Compact Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CERTIFICATION_TIERS.map((tier) => (
            <div
              key={tier.audience}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 relative overflow-hidden flex flex-col"
            >
              {/* Top colour bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-500" />

              <div className="flex items-center justify-between mb-3 mt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {tier.audience}
                </span>
                <Award className="w-5 h-5 text-amber-500" />
              </div>

              <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1">
                {tier.certificateTitle}
              </h3>
              <p className="text-[11px] font-semibold text-blue-700 mb-3">{tier.subtitle}</p>

              <div className="flex-1 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dual institutional signatures (IAMH &amp; IMS-BHU)</span>
                </div>
                {tier.extra && (
                  <div className="flex items-center gap-1.5 text-amber-800 font-semibold">
                    <FileText className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                    <span>{tier.extra}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Conclave Participation Report Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Institutional Post-Conclave Deliverable</span>
              <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                Conclave Participation Report
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Following the conclave, participating schools receive a documented synthesis report detailing insights, observation patterns, classroom recommendations, and ongoing resources for your school's counsellor and leadership team.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 px-4 py-2.5 rounded-xl shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Included for Participating Schools</span>
          </div>
        </div>

      </div>
    </section>
  );
};
