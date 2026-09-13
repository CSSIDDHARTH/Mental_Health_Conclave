import React from 'react';
import { Building2, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { IAMHLogo, IMSBHULogo, IndianLotusDivider } from './InstitutionalBadges';
import { EVENT_DETAILS } from '../data/conclaveData';

export const CollaboratorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            <HeartHandshake className="w-3.5 h-3.5 text-blue-700" />
            <span>Academic &amp; Clinical Leadership</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            In Collaboration With
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Uniting professional psychiatric excellence with proactive school mental health advocacy across India.
          </p>

          <IndianLotusDivider className="w-48 h-6 mx-auto mt-4 opacity-70" />
        </div>

        {/* 2 Main Partner Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Organization 1: IMS-BHU Department of Psychiatry */}
          <div className="bg-[#fcfdfe] rounded-3xl p-8 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <IMSBHULogo size={64} className="h-16 w-16" />
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full">
                  Centre of Excellence
                </span>
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-slate-500">Collaborating Organization</span>
              <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-1">
                Department of Psychiatry
              </h3>
              <p className="text-sm font-semibold text-blue-900 mt-0.5">
                Centre of Excellence, IMS-BHU
              </p>
              <p className="text-xs text-slate-500">
                Institute of Medical Sciences, Banaras Hindu University, Varanasi
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                The Department of Psychiatry at IMS-BHU serves as a premier Centre of Excellence in psychiatric education, clinical mental health services, adolescent psychological intervention, and community outreach.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Academic &amp; Clinical Knowledge Partner</span>
            </div>
          </div>

          {/* Organization 2: Indian Academy of Mental Health (IAMH) */}
          <div className="bg-[#fcfdfe] rounded-3xl p-8 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <IAMHLogo size={64} className="h-16 w-16" />
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/80 rounded-full">
                  Lead Organizer
                </span>
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-slate-500">Organizing Body</span>
              <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-1">
                Indian Academy of Mental Health
              </h3>
              <p className="text-sm font-semibold text-emerald-900 mt-0.5">
                IAMH
              </p>
              <p className="text-xs text-slate-500">
                Promoting Mental Health Literacy, Teacher Training &amp; Youth Well-being
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                The Indian Academy of Mental Health (IAMH) spearheads structured nationwide initiatives to demystify psychological distress, empower educators with actionable tools, and foster compassionate school ecosystems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Program Organizer &amp; Conclave Secretariat</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
