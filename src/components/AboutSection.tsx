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
          
          {/* Left Column: Concept Note Direct Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            
            <div className="relative pl-6 border-l-4 border-blue-600">
              <p className="font-medium text-slate-900 text-lg sm:text-xl leading-snug">
                In today's rapidly changing social, academic and digital environment, children and adolescents face a range of behavioural, emotional, psychological and social challenges.
              </p>
            </div>

            <p>
              Academic pressure, changing family dynamics, peer relationships, excessive digital exposure, social media, competition and evolving expectations can influence the emotional and psychological well-being of young people.
            </p>

            <p>
              Schools have a critical role not only in academic development, but also in promoting emotional well-being, healthy relationships, resilience, positive behaviour and psychological adjustment.
            </p>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 via-sky-50/50 to-emerald-50/40 border border-blue-100 shadow-2xs">
              <p className="font-semibold text-slate-900 leading-snug">
                The School Mental Health Conclave aims to create greater awareness and build practical skills among students, teachers and school leadership to address these challenges effectively.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Evidence-Based Psychiatric Literacy</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Non-Escalating Behaviour Management</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Student Empathy &amp; Peer Support</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Institutional Care Protocols</span>
              </div>
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
