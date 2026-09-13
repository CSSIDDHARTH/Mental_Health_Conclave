import React from 'react';
import { Shield, Sparkles, BookCheck, Users, HeartHandshake, CheckCircle } from 'lucide-react';
import { IAMHLogo, IMSBHULogo } from './InstitutionalBadges';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Foundational Vision</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Building Mentally Healthy Schools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A comprehensive initiative by the Indian Academy of Mental Health (IAMH) in collaboration with the Department of Psychiatry, Centre of Excellence, IMS-BHU.
          </p>
        </div>

        {/* Split Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Compact Concept Note */}
          <div className="lg:col-span-7 space-y-5 text-slate-700">
            
            <div className="relative pl-4 border-l-4 border-blue-600">
              <p className="font-medium text-slate-900 text-base sm:text-lg leading-snug">
                In today's rapidly changing environment, children and adolescents face growing behavioural, emotional, and psychological challenges that schools are uniquely positioned to address.
              </p>
            </div>

            {/* Compact bullet points replacing three long paragraphs */}
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1 shrink-0">•</span>
                <span>Academic pressure, peer dynamics, and digital exposure impact student emotional well-being.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1 shrink-0">•</span>
                <span>Schools play a critical role beyond academics — in resilience, positive behaviour, and psychological health.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1 shrink-0">•</span>
                <span>The Conclave builds practical skills among students, teachers, and leadership to address these challenges.</span>
              </li>
            </ul>

            {/* Core Pillars — compact inline tags */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Evidence-Based Psychiatric Literacy
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Non-Escalating Behaviour Management
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Student Empathy &amp; Peer Support
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Institutional Care Protocols
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Institutional Dignity Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative background aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl opacity-10 blur-xl"></div>
              
              <div className="relative bg-slate-900 text-white rounded-2xl p-7 sm:p-9 shadow-xl border border-slate-800 overflow-hidden">
                {/* Subtle watermark */}
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <IAMHLogo size={160} />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                    <div>
                      <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">Institutional Mandate</span>
                      <h3 className="text-xl font-bold font-display text-white mt-0.5">Whole-School Well-being</h3>
                    </div>
                    <IAMHLogo size={46} className="h-11 w-11" />
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Mental health in schools is not an isolated crisis intervention. It is the soil in which intellectual curiosity, social confidence, and lifelong emotional resilience take root.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-200">Integrated Triad</h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Uniting Students, Teachers, and Principals on a single collaborative platform.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300 shrink-0">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-200">Clinical &amp; Academic Expertise</h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Guided by senior psychiatry faculty and child mental health practitioners.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-amber-300">World Mental Health Day 2026</span>
                    <span>Banaras Hindu University</span>
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
