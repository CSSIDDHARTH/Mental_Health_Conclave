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

        {/* 3 Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CERTIFICATION_TIERS.map((tier) => (
            <div
              key={tier.audience}
              className="bg-white rounded-3xl p-7 border-2 border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle certificate border accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    {tier.audience}
                  </span>
                  <Award className="w-6 h-6 text-amber-600" />
                </div>

                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 mb-4">
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {tier.certificateTitle}
                  </h3>
                  <p className="text-xs font-semibold text-blue-800 mt-1">
                    {tier.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Authorized Dual Institutional Signatures</span>
                </div>
                {tier.extra && (
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    <FileText className="w-4 h-4 shrink-0" />
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
