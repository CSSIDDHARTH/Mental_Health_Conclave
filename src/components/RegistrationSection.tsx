import React, { useState } from 'react';
import { 
  QrCode, 
  ExternalLink, 
  Copy, 
  Check, 
  Smartphone, 
  ShieldCheck, 
  PhoneCall, 
  Users, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { EVENT_DETAILS, DELEGATION_STRUCTURE } from '../data/conclaveData';
import { IAMHLogo } from './InstitutionalBadges';

export const RegistrationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  // Default Google Form link - easily customizable
  const googleFormUrl = "https://forms.google.com";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(googleFormUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="registration" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden border-t border-slate-200">
      {/* Background Decorative Blur Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300 shadow-sm">
            <QrCode className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Delegation Registration</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Register via Google Forms
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            School principals, administrators, and coordinators can complete the official registration through our verified Google Form. Scan the QR code with your phone camera or click the direct link below.
          </p>
        </div>

        {/* Main Registration Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: QR Code Showcase (Span 6) */}
            <div className="lg:col-span-6 p-8 sm:p-12 bg-gradient-to-br from-[#0c1e38] via-[#09172d] to-[#060e1d] text-white flex flex-col items-center justify-between text-center relative">
              
              {/* Top badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-amber-300 font-semibold mb-6">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Mobile Registration</span>
              </div>

              {/* QR Code Container with High-Tech Targeting Corners */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square relative p-5 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center my-4 group">
                
                {/* Targeting Corners */}
                <span className="absolute top-2 left-2 w-5 h-5 border-t-4 border-l-4 border-amber-500 rounded-tl-lg pointer-events-none" />
                <span className="absolute top-2 right-2 w-5 h-5 border-t-4 border-r-4 border-amber-500 rounded-tr-lg pointer-events-none" />
                <span className="absolute bottom-2 left-2 w-5 h-5 border-b-4 border-l-4 border-amber-500 rounded-bl-lg pointer-events-none" />
                <span className="absolute bottom-2 right-2 w-5 h-5 border-b-4 border-r-4 border-amber-500 rounded-br-lg pointer-events-none" />

                {/* QR Code Graphic / Image Fallback */}
                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <img
                    src="/registration-qr.png"
                    alt="Scan QR Code to register on Google Forms"
                    onError={(e) => {
                      // If custom image is not found, fallback to generated SVG QR
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById('qr-svg-fallback');
                      if (fallback) fallback.style.display = 'block';
                    }}
                    className="w-full h-full object-contain rounded-xl"
                  />

                  {/* Fallback Beautiful Detailed QR SVG */}
                  <div id="qr-svg-fallback" className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                    <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                      {/* Standard QR Code Finder Patterns */}
                      {/* Top-Left Finder */}
                      <rect x="5" y="5" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="11" width="14" height="14" rx="2" fill="currentColor" />
                      {/* Top-Right Finder */}
                      <rect x="69" y="5" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="75" y="11" width="14" height="14" rx="2" fill="currentColor" />
                      {/* Bottom-Left Finder */}
                      <rect x="5" y="69" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="75" width="14" height="14" rx="2" fill="currentColor" />
                      
                      {/* Simulated QR Data Matrix Pattern */}
                      <rect x="36" y="8" width="5" height="5" />
                      <rect x="46" y="8" width="5" height="5" />
                      <rect x="56" y="8" width="5" height="5" />
                      <rect x="36" y="18" width="5" height="5" />
                      <rect x="51" y="18" width="5" height="5" />
                      <rect x="41" y="28" width="5" height="5" />
                      <rect x="56" y="28" width="5" height="5" />

                      <rect x="8" y="36" width="5" height="5" />
                      <rect x="18" y="36" width="5" height="5" />
                      <rect x="28" y="36" width="5" height="5" />
                      <rect x="13" y="46" width="5" height="5" />
                      <rect x="23" y="56" width="5" height="5" />

                      {/* Center Cluster */}
                      <rect x="36" y="36" width="28" height="28" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                      <rect x="40" y="40" width="20" height="20" rx="4" fill="#0f2347" />
                      <circle cx="50" cy="50" r="5" fill="#f59e0b" />

                      <rect x="69" y="36" width="5" height="5" />
                      <rect x="79" y="36" width="5" height="5" />
                      <rect x="89" y="36" width="5" height="5" />
                      <rect x="74" y="46" width="5" height="5" />
                      <rect x="84" y="56" width="5" height="5" />

                      <rect x="36" y="69" width="5" height="5" />
                      <rect x="46" y="69" width="5" height="5" />
                      <rect x="56" y="69" width="5" height="5" />
                      <rect x="41" y="79" width="5" height="5" />
                      <rect x="51" y="84" width="5" height="5" />
                      <rect x="61" y="79" width="5" height="5" />

                      <rect x="69" y="69" width="6" height="6" />
                      <rect x="80" y="69" width="6" height="6" />
                      <rect x="74" y="80" width="6" height="6" />
                      <rect x="85" y="85" width="6" height="6" />
                    </svg>
                  </div>
                </div>

                {/* Scan notice banner under QR */}
                <div className="mt-2 text-center">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Google Forms Registration QR
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Scan with any Camera or Google Lens
                  </span>
                </div>
              </div>

              {/* Action buttons below QR */}
              <div className="w-full space-y-2.5 mt-2">
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 text-sm font-bold shadow-lg hover:shadow-amber-400/30 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>Open Google Form Directly</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Google Form Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Google Form Link</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right Column: Instructions & Delegation Essentials (Span 6) */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              
              <div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
                  How School Registration Works
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Follow 3 simple steps to confirm your school’s delegation for 6 October 2026.
                </p>

                {/* 3 Step Process */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 font-black text-sm flex items-center justify-center shrink-0 border border-amber-300/60">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Scan or Click the Google Form</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Access the official form through the QR code on your mobile phone or open the link on your computer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-700 font-black text-sm flex items-center justify-center shrink-0 border border-blue-300/60">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Submit Delegation &amp; Contact Details</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Provide school affiliation, nominated coordinator details, and estimated student/teacher numbers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 font-black text-sm flex items-center justify-center shrink-0 border border-emerald-300/60">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Confirmation &amp; Hall Passes Dispatched</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        IAMH &amp; IMS-BHU secretariat will verify your submission and issue hall access passes and conclave kits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delegation Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-300 uppercase tracking-wider">Delegation Guidelines</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-semibold">
                    {EVENT_DETAILS.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Recommended Delegation:</span>
                    <strong className="text-white font-semibold">50–80 Students + 10–20 Teachers</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Institutional Fee:</span>
                    <strong className="text-amber-400 font-bold text-sm">₹11,000 /- Per School</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>6 October 2026</span>
                  </span>
                  <span className="text-slate-400 text-[11px]">BHU Varanasi</span>
                </div>
              </div>

              {/* Direct Inquiries & Helpline Strip */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <span className="text-slate-700 font-medium">Need registration help? </span>
                    <a
                      href={`tel:${EVENT_DETAILS.contactPhone}`}
                      className="font-mono font-bold text-amber-900 hover:underline"
                    >
                      {EVENT_DETAILS.contactPhone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${EVENT_DETAILS.contactPhone}`}
                  className="px-3 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold text-xs transition-colors shrink-0"
                >
                  Call Desk
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
