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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-100">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Strategic Framework</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We Aim To Achieve
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Nine key objectives translating psychiatric knowledge into daily classroom empathy and school practice.
          </p>
        </div>

        {/* 9 Compact Objectives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEY_OBJECTIVES.map((obj) => (
            <div
              key={obj.id}
              className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 group-hover:bg-blue-50/60 transition-colors">
                {getIcon(obj.iconName)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400">0{obj.id}</span>
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                  {obj.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
