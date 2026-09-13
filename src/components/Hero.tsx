import React from 'react';
import { Calendar, Clock, MapPin, AlertCircle, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';
import { IAMHLogo, IMSBHULogo, IndianLotusDivider } from './InstitutionalBadges';

interface HeroProps {
  onOpenRegister: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExplore }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f0f5fc] via-[#f7fafc] to-[#ffffff]">
      {/* Delicate background watermarks & Indian geometric/botanical elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-mandala-pattern" />
      
      {/* Ambient background soft glowing blobs */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Institutional Header Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white shadow-sm border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-display">
              {EVENT_DETAILS.badge}
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
            <span>Organized by IAMH</span>
            <span className="text-slate-300">•</span>
            <span>With IMS-BHU Psychiatry CoE</span>
          </div>
        </div>

        {/* Central Core Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Display Typography */}
          <h1 className="font-display font-extrabold tracking-tight text-slate-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6">
            <span className="block text-slate-900">SCHOOL</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-800 to-teal-800">
              MENTAL HEALTH
            </span>
            <span className="block text-slate-800">CONCLAVE</span>
          </h1>

          <IndianLotusDivider className="w-56 h-6 mx-auto mb-6 opacity-70" />

          {/* Supporting Statement */}
          <p className="font-display text-lg sm:text-xl md:text-2xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            Building Mentally Healthy Students, Empowered Teachers &amp; Supportive Schools
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <span>Register Your School</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>
            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 active:scale-[0.98] rounded-xl border border-slate-300/80 shadow-2xs hover:shadow transition-all"
            >
              <BookOpen className="w-4 h-4 text-sky-700" />
              <span>Explore the Conclave</span>
            </button>
          </div>
        </div>

        {/* Event Key Cards: Date, Time, Venue with Tentative Status */}
        <div className="max-w-4xl mx-auto mt-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-lg p-5 sm:p-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Date Card */}
              <div className="flex items-start gap-4 pt-3 md:pt-0">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-100 shrink-0">
                  <Calendar className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">Conclave Date</span>
                  <p className="text-lg font-bold text-slate-900 mt-0.5">{EVENT_DETAILS.date}</p>
                  <p className="text-xs font-semibold text-slate-500">{EVENT_DETAILS.day}</p>
                </div>
              </div>

              {/* Time Card */}
              <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-5">
                <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-100 shrink-0">
                  <Clock className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Program Schedule</span>
                  <p className="text-lg font-bold text-slate-900 mt-0.5">{EVENT_DETAILS.time}</p>
                  <p className="text-xs font-semibold text-slate-500">Comprehensive Day Sessions</p>
                </div>
              </div>

              {/* Venue Card with Tentative Label */}
              <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-5">
                <div className="p-3 bg-amber-50 text-amber-900 rounded-xl border border-amber-100 shrink-0">
                  <MapPin className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Conclave Venue</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                    {EVENT_DETAILS.venueName}
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    {EVENT_DETAILS.venueInstitution}
                  </p>
                </div>
              </div>
            </div>

            {/* Crucial Tentative Venue Notice Bar */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2 text-amber-900 bg-amber-50/90 px-3 py-1.5 rounded-lg border border-amber-200/80 font-medium">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span><strong>Notice:</strong> {EVENT_DETAILS.venueStatus}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dedicated delegation: Students (50-80) + Teachers (10-20) + Principal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Host Trust Banner */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-600 text-xs font-medium">
          <div className="flex items-center gap-2.5">
            <IAMHLogo size={28} className="h-7 w-7" />
            <span className="font-semibold text-slate-800">Indian Academy of Mental Health</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-2.5">
            <IMSBHULogo size={28} className="h-7 w-7" />
            <span className="font-semibold text-slate-800">Dept. of Psychiatry, IMS-BHU</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="text-slate-500 font-normal">
            Centre of Excellence
          </div>
        </div>

      </div>
    </section>
  );
};
