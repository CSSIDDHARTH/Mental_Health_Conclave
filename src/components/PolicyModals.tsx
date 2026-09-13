import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { EVENT_DETAILS } from '../data/conclaveData';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-6 h-6 text-blue-800" />
            ) : (
              <FileText className="w-6 h-6 text-amber-700" />
            )}
            <h3 className="font-display text-xl font-bold text-slate-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Participation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Information Handling:</strong> The Indian Academy of Mental Health (IAMH) and the collaborating Department of Psychiatry, IMS-BHU respect the institutional privacy of participating schools, principals, educators, and students.
              </p>
              <p>
                <strong>Data Collection &amp; Use:</strong> Details submitted through the School Delegation Registration form (including school names, representative contacts, email addresses, and delegation headcounts) are used exclusively for conclave coordination, participant badge generation, certification processing, and post-conclave report distribution.
              </p>
              <p>
                <strong>Protection of Student Privacy:</strong> No personal psychological data or individual student evaluations are published or disseminated. Conclave activities are structured strictly around educational awareness and socio-emotional literacy.
              </p>
              <p>
                <strong>Contact for Privacy Queries:</strong> For inquiries regarding recorded registration records, please contact the IAMH secretariat at <span className="font-semibold text-slate-900">{EVENT_DETAILS.contactPhone}</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Delegation Composition:</strong> Each registered school may nominate a designated delegation of 50 to 80 students, 10 to 20 teachers, and the Principal (1), as specified in the official concept note.
              </p>
              <p>
                <strong>2. Participation Fee:</strong> The institutional participation fee is fixed at <span className="font-bold text-slate-900">{EVENT_DETAILS.participationFee}</span> per school. This fee covers all sessions, workshops, materials, and certificates for the entire designated school delegation.
              </p>
              <p>
                <strong>3. Venue Status Notice:</strong> As explicitly highlighted in all conclave literature, the venue (Swatantrata Bhawan – Shatabdi Auditorium, Banaras Hindu University, Varanasi) is tentative and subject to final institutional confirmation. Registered delegations will receive prompt written updates from IAMH.
              </p>
              <p>
                <strong>4. Certification:</strong> Certificates of Participation for students, Professional Training Certificates for teachers, and the Official Recognition Certificate and Conclave Report for participating schools will be awarded upon program completion.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
          >
            Understood &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
};
