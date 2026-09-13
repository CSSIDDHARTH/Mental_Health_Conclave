import React from 'react';
import { ArrowRight, Heart, Check, Smile, Sparkles, MessageSquare } from 'lucide-react';
import { CLASSROOM_FLOW_STEPS, CLASSROOM_DIMENSIONS } from '../data/conclaveData';

export const ClassroomWellbeingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
            <Heart className="w-3.5 h-3.5 text-emerald-700" />
            <span>Classroom Culture Transformation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Classroom Management to Classroom Well-being
          </h2>

          <div className="mt-6 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-emerald-950 font-semibold leading-relaxed">
              "A psychologically healthy classroom is one where students feel safe, respected, heard and supported."
            </p>
          </div>
        </div>

        {/* Visual Flow: Listen → Understand → Connect → Respond → Support */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-500">
              The Pedagogical Connection Framework
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 mt-1">
              The 5-Step Empathic Classroom Flow
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {CLASSROOM_FLOW_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center">
                      0{step.step}
                    </span>
                    {idx < CLASSROOM_FLOW_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 absolute -right-2.5 top-8 z-10 bg-white rounded-full" />
                    )}
                  </div>

                  <h4 className="font-display text-lg font-bold text-slate-900 mb-1.5">
                    {step.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 text-[11px] font-semibold text-emerald-700">
                  Step {step.step} of 5
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10 Core Classroom Dimensions */}
        <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Ten Pillars of Classroom Psychological Safety
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Essential dimensions practiced throughout the conclave modules to cultivate thriving student communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {CLASSROOM_DIMENSIONS.map((dim, idx) => (
              <div
                key={dim}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-400 hover:bg-emerald-50/20 transition-all flex items-center gap-2.5"
              >
                <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {dim}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
