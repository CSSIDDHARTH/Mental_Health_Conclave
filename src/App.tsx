import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventInfoStrip } from './components/EventInfoStrip';
import { AboutSection } from './components/AboutSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { ProgramFocusSection } from './components/ProgramFocusSection';
import { TeacherTrainingSection } from './components/TeacherTrainingSection';
import { ClassroomWellbeingSection } from './components/ClassroomWellbeingSection';
import { TeacherWellbeingSection } from './components/TeacherWellbeingSection';
import { SchoolEcosystemSection } from './components/SchoolEcosystemSection';
import { ParticipationSection } from './components/ParticipationSection';
import { ParticipationFeeSection } from './components/ParticipationFeeSection';
import { CertificationSection } from './components/CertificationSection';
import { CollaboratorsSection } from './components/CollaboratorsSection';
import { VenueSection } from './components/VenueSection';
import { RegistrationSection } from './components/RegistrationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EVENT_DETAILS } from './data/conclaveData';

export default function App() {
  const handleRegisterRedirect = () => {
    window.open(EVENT_DETAILS.registrationUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfe] text-slate-800 font-sans selection:bg-sky-200 selection:text-slate-900">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenRegister={handleRegisterRedirect} />

      {/* Main Landing Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenRegister={handleRegisterRedirect} onExplore={scrollToAbout} />

        {/* 2. Key Event Info Strip */}
        <EventInfoStrip />

        {/* 3. About the Conclave */}
        <AboutSection />

        {/* 4. Strategic Objectives (What We Aim To Achieve) */}
        <ObjectivesSection />

        {/* 5. Program Focus (Understanding the Child Behind the Behaviour) */}
        <ProgramFocusSection />

        {/* 6. Teacher Training (Understanding Behaviour, Managing Emotions, Building Connections) */}
        <TeacherTrainingSection />

        {/* 7. Positive Classroom Environment (Listen -> Understand -> Connect -> Respond -> Support) */}
        <ClassroomWellbeingSection />

        {/* 8. Teacher Mental Health & Well-being */}
        <TeacherWellbeingSection />

        {/* 9. A Mentally Healthy School Ecosystem */}
        <SchoolEcosystemSection />

        {/* 10. School Participation Structure (Delegation breakdown) */}
        <ParticipationSection onRegisterClick={handleRegisterRedirect} />

        {/* 11. Participation Fee Section (₹11,000 /- Per School) */}
        <ParticipationFeeSection onRegisterClick={handleRegisterRedirect} />

        {/* 12. Certification & Recognition */}
        <CertificationSection />

        {/* 13. Collaborating Organizations (IAMH & IMS-BHU Psychiatry CoE) */}
        <CollaboratorsSection />

        {/* 14. Venue (Tentative Notice Display) */}
        <VenueSection />

        {/* 15. Registration Form */}
        <RegistrationSection />

        {/* 16. Contact Section (Official Helpline: 9696384984) */}
        <ContactSection onRegisterClick={handleRegisterRedirect} />
      </main>

      {/* 17. Footer */}
      <Footer />
    </div>
  );
}
