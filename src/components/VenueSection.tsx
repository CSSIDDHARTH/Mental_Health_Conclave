import React, { useState } from 'react';
import { MapPin, AlertCircle, Compass, Train, Navigation, Building, ExternalLink, Plane, Copy, Check } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Swatantrata Bhawan, Banaras Hindu University, Varanasi, Uttar Pradesh 221005');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="venue" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300/80 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Venue Location</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Venue &amp; Location
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Banaras Hindu University (BHU), Varanasi, Uttar Pradesh, India
          </p>
        </div>

        {/* Venue Container */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          
          {/* Status Banner */}
          <div className="bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent border-b border-amber-200/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-amber-950">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <p className="text-xs sm:text-sm font-semibold">
                <strong>Official Designated Venue:</strong> {EVENT_DETAILS.venueStatus}
              </p>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 border border-amber-300">
              BHU Campus, Varanasi
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Details Column */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Auditorium &amp; Complex</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  {EVENT_DETAILS.venueName}
                </h3>
                <p className="text-base sm:text-lg font-bold text-blue-900 mt-1 flex items-center gap-2">
                  <span>Banaras Hindu University (BHU)</span>
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Varanasi, Uttar Pradesh – 221005, India
                </p>

                {/* Quick actions for location */}
                <div className="flex flex-wrap gap-2.5 mt-4">
                  <a
                    href="https://maps.google.com/?q=Swatantrata+Bhawan+BHU+Varanasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-300" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                    title="Copy full venue address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Tentative Venue Notice */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-1.5 text-xs text-slate-700">
                <p className="font-bold text-amber-950 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-700" />
                  Notice to Participating Schools &amp; Delegates:
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Swatantrata Bhawan is BHU's premier central auditorium equipped with state-of-the-art acoustic and presentation facilities. Entry passes and hall registration desks will be operational from 8:30 AM on 6 October 2026.
                </p>
              </div>

              {/* Transit & Commute Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-800 shrink-0">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Varanasi Cantt</h4>
                    <p className="text-[11px] text-slate-500">~9 km from BHU Gate</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">IMS-BHU CoE</h4>
                    <p className="text-[11px] text-slate-500">Within campus bounds</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">VNS Airport</h4>
                    <p className="text-[11px] text-slate-500">LBS Airport ~30 km</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Embedded Interactive Google Map */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-2xl border-2 border-slate-200/90 overflow-hidden shadow-lg bg-slate-900 flex-1 flex flex-col">
                
                {/* Map top bar */}
                <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold tracking-wide">Live Google Map Locator</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Swatantrata+Bhawan+BHU+Varanasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
                  >
                    <span>Full Screen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Google Map iframe container */}
                <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-100">
                  <iframe
                    title="Google Map location of Swatantrata Bhawan, BHU Varanasi"
                    src="https://maps.google.com/maps?q=Swatantrata+Bhawan,+Banaras+Hindu+University,+Varanasi,+Uttar+Pradesh+221005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    aria-label="Google Map showing Swatantrata Bhawan BHU"
                  ></iframe>
                </div>

                {/* Footer strip on map card */}
                <div className="px-4 py-3 bg-slate-800/90 border-t border-slate-700/80 flex items-center justify-between gap-3 text-slate-300 text-xs">
                  <p className="truncate text-slate-300">
                    <span className="font-semibold text-white">Landmark:</span> Near IMS-BHU / Malaviya Bhawan
                  </p>
                  <a
                    href="https://maps.google.com/?q=Swatantrata+Bhawan+BHU+Varanasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-amber-300 hover:underline shrink-0"
                  >
                    <span>Open in App</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
