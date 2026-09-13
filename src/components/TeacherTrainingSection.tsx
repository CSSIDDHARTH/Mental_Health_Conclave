import React from 'react';
import { GraduationCap, CheckCircle2, ShieldAlert, HeartHandshake, UserPlus, Sparkles } from 'lucide-react';
import { TEACHER_LEARNING_OUTCOMES } from '../data/conclaveData';

export const TeacherTrainingSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-700">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Dedicated Teacher Development</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Understanding Behaviour.<br className="hidden sm:inline" />
            Managing Emotions.<br className="hidden sm:inline" />
            Building Connections.
          </h2>

          <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              Teachers are often the first adults to observe changes in a child's behaviour, emotions and classroom functioning.
            </p>
          </div>
        </div>

        {/* 8 Core Learning Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {TEACHER_LEARNING_OUTCOMES.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/60 hover:bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 hover:border-sky-500/50 transition-all duration-200 flex items-start gap-4 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-sky-400" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400">Module {item.id}</span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delegation Badge Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-850 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-400/20 text-amber-300 rounded-xl shrink-0">
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Teacher Delegation Per School</h4>
              <p className="text-xs text-slate-400">10 to 20 teachers nominated per participating school for certified training</p>
            </div>
          </div>
          <div className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Official Training &amp; Participation Certificate Awarded
          </div>
        </div>

      </div>
    </section>
  );
};
