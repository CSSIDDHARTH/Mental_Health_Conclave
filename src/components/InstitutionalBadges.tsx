import React from 'react';

export const IAMHLogo: React.FC<{ className?: string; size?: number }> = ({ className = "h-12 w-12", size = 48 }) => {
  return (
    <img
      src="/logo.png"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      alt="Indian Academy of Mental Health Official Logo"
    />
  );
};

export const IMSBHULogo: React.FC<{ className?: string; size?: number }> = ({ className = "h-12 w-12", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Department of Psychiatry, IMS-BHU Crest"
    >
      {/* Dignified maroon/navy shield */}
      <circle cx="50" cy="50" r="48" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="2" />
      <circle cx="50" cy="50" r="43" fill="#0f172a" stroke="#ffffff" strokeWidth="0.75" />

      {/* Traditional Indian Sun & Temple arch motif representing BHU tradition */}
      <path
        d="M50 20 L53 28 L61 28 L55 33 L57 41 L50 36 L43 41 L45 33 L39 28 L47 28 Z"
        fill="#fbbf24"
      />
      
      {/* Caduceus / Rod of Asclepius & psychological psyche emblem */}
      <path
        d="M50 34 V70 M45 44 C45 38 55 38 55 44 C55 50 45 52 45 58 C45 64 55 64 55 70"
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Centre of Excellence laurel branches */}
      <path
        d="M26 62 C26 72 37 80 50 80 C63 80 74 72 74 62"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
        strokeDasharray="2 3"
      />

      <text x="50" y="90" textAnchor="middle" fill="#fef3c7" fontSize="7.5" fontWeight="bold" letterSpacing="1">
        IMS-BHU
      </text>
      <text x="50" y="15" textAnchor="middle" fill="#94a3b8" fontSize="4.5" fontWeight="600" letterSpacing="0.8">
        PSYCHIATRY CoE
      </text>
    </svg>
  );
};

export const IndianLotusDivider: React.FC<{ className?: string }> = ({ className = "w-48 h-6 mx-auto text-amber-600/60" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400 to-amber-500"></span>
      <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3C10 7 7 10 7 14C7 17.5 9.5 20 12 20C14.5 20 17 17.5 17 14C17 10 14 7 12 3Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M12 7C9 10 4 12 4 16C4 18.5 6 20 8.5 20C10.5 20 12 18 12 18" />
        <path d="M12 7C15 10 20 12 20 16C20 18.5 18 20 15.5 20C13.5 20 12 18 12 18" />
      </svg>
      <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-amber-400 to-amber-500"></span>
    </div>
  );
};
