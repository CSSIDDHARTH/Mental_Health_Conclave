import React, { useState } from 'react';
import { Sparkles, Eye, ShieldAlert, BookOpen, Layers } from 'lucide-react';
import { PROGRAM_FOCUS_AREAS } from '../data/conclaveData';
import { FocusArea } from '../types';

export const ProgramFocusSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Emotional & Psychological', 'Academic & Cognitive', 'Behavioural & Social'];

  const filteredAreas = activeCategory === 'All'
    ? PROGRAM_FOCUS_AREAS
    : PROGRAM_FOCUS_AREAS.filter(area => area.category === activeCategory);

  return (
    <section id="program-focus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3 border border-sky-100">
            <Eye className="w-3.5 h-3.5 text-sky-700" />
            <span>Clinical &amp; Classroom Insights</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Understanding the Child Behind the Behaviour
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            The emphasis will be on recognition, early support, appropriate communication and timely professional intervention.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-slate-100/90 rounded-xl border border-slate-200/80 flex-wrap justify-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Focus Areas — Compact Tag Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAreas.map((item: FocusArea) => (
            <div
              key={item.id}
              className="bg-[#fcfdfe] rounded-xl px-4 py-3.5 border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all duration-200 flex items-start gap-3"
            >
              {/* Colour dot accent */}
              <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                item.category === 'Emotional & Psychological'
                  ? 'bg-blue-500'
                  : item.category === 'Academic & Cognitive'
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`} />
              <div className="min-w-0">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  item.category === 'Emotional & Psychological'
                    ? 'text-blue-600'
                    : item.category === 'Academic & Cognitive'
                    ? 'text-amber-700'
                    : 'text-emerald-700'
                }`}>
                  {item.category}
                </span>
                <h3 className="font-display text-sm font-bold text-slate-900 leading-snug mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Summary Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white">
              Holistic Recognition Over Disciplinary Punishment
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              By reframing overt behavioural challenges as signals of unspoken emotional or cognitive strain, educators can intervene constructively before problems intensify.
            </p>
          </div>
          <a
            href="#registration"
            className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-bold shadow transition-all whitespace-nowrap shrink-0"
          >
            Nominate Your School
          </a>
        </div>

      </div>
    </section>
  );
};
