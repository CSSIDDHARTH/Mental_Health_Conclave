import React from 'react';
import { 
  Brain, 
  Search, 
  ShieldCheck, 
  HeartHandshake, 
  MessageCircle, 
  Compass, 
  Sparkles, 
  School, 
  UserCheck 
} from 'lucide-react';
import { KEY_OBJECTIVES } from '../data/conclaveData';

export const ObjectivesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6" };
    switch (iconName) {
      case 'Brain': return <Brain {...iconProps} className="w-6 h-6 text-blue-700" />;
      case 'Search': return <Search {...iconProps} className="w-6 h-6 text-sky-700" />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} className="w-6 h-6 text-emerald-700" />;
      case 'HeartHandshake': return <HeartHandshake {...iconProps} className="w-6 h-6 text-teal-700" />;
      case 'MessageCircle': return <MessageCircle {...iconProps} className="w-6 h-6 text-indigo-700" />;
      case 'Compass': return <Compass {...iconProps} className="w-6 h-6 text-amber-700" />;
      case 'Sparkles': return <Sparkles {...iconProps} className="w-6 h-6 text-purple-700" />;
      case 'School': return <School {...iconProps} className="w-6 h-6 text-cyan-700" />;
      case 'UserCheck': return <UserCheck {...iconProps} className="w-6 h-6 text-emerald-800" />;
      default: return <Brain {...iconProps} className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="objectives" className="py-20 bg-slate-50/80 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-100">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Strategic Framework</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We Aim To Achieve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Nine key institutional objectives designed to translate psychiatric knowledge into daily classroom empathy and actionable school practices.
          </p>
        </div>

        {/* 9 Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_OBJECTIVES.map((obj) => (
            <div
              key={obj.id}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-50/50 transition-all">
                    {getIcon(obj.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    0{obj.id}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                  {obj.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {obj.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-700 group-hover:text-blue-800">
                <span>Core Conclave Focus</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
