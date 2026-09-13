import React from 'react';
import { Calendar, Clock, MapPin, Building2, Users2, AlertTriangle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';

export const EventInfoStrip: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          {/* Date & Day */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Event Date</p>
              <p className="text-sm font-bold text-white tracking-tight">
                Tuesday, 6 October 2026
              </p>
              <p className="text-[11px] text-amber-300 font-medium">{EVENT_DETAILS.badge}</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Conclave Hours</p>
              <p className="text-sm font-bold text-white tracking-tight">
                10:30 AM to 4:00 PM
              </p>
              <p className="text-[11px] text-slate-400">Full-day Academic Program</p>
            </div>
          </div>

          {/* Venue with clear tentative notice */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Venue</p>
                <span className="text-[10px] px-1.5 py-0.2 bg-amber-950 text-amber-300 border border-amber-800/80 rounded font-semibold">
                  Tentative
                </span>
              </div>
              <p className="text-xs font-bold text-white line-clamp-1">
                Swatantrata Bhawan – Shatabdi Auditorium
              </p>
              <p className="text-[11px] text-slate-400">BHU, Varanasi</p>
            </div>
          </div>

          {/* Organizers */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Organized &amp; Supported By</p>
              <p className="text-xs font-bold text-white">
                IAMH &amp; Dept. of Psychiatry, IMS-BHU
              </p>
              <p className="text-[11px] text-emerald-300">Centre of Excellence</p>
            </div>
          </div>

        </div>

        {/* Explicit Tentative Disclaimer Sub-banner */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-2 text-center text-xs text-amber-200/90 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{EVENT_DETAILS.venueStatus}</span>
        </div>
      </div>
    </div>
  );
};
