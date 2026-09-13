# School Mental Health Conclave 2026

Official event landing website for the **School Mental Health Conclave 2026**, organized by the **Indian Academy of Mental Health (IAMH)** in collaboration with the **Department of Psychiatry, Centre of Excellence, IMS-BHU**.

The event is held on the occasion of **World Mental Health Day 2026** (Tuesday, 6 October 2026).

---

## 1. Overview & Key Facts

* **Event Date:** Tuesday, 6 October 2026
* **Event Hours:** 10:30 AM – 4:00 PM
* **Tentative Venue:** Swatantrata Bhawan – Shatabdi Auditorium, Banaras Hindu University (BHU), Varanasi *(Tentative Venue – Subject to Final Confirmation)*
* **Organized By:** Indian Academy of Mental Health (IAMH)
* **Collaborating Organization:** Department of Psychiatry, Centre of Excellence, IMS-BHU
* **Helpline Contact:** `9696384984` (`tel:9696384984`)
* **Participation Fee:** `₹11,000 /- Per School`
* **Delegation Composition:**
  * **Students:** 50 – 80 learners
  * **Teachers:** 10 – 20 educators
  * **School Leadership:** Principal – 1
* **Certifications:**
  * Students: *Participation Certificate (Mental Health Awareness & Learning Experience)*
  * Teachers: *Training & Participation Certificate (Professional Mental Health Training Experience)*
  * Schools: *Official Participation / Recognition Certificate* + *Conclave Participation Report*

---

## 2. Technology Stack

* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite 6
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React
* **Architecture:** Modular, component-driven, accessible, and responsive (Mobile, Tablet, Desktop)

---

## 3. Project Structure

```text
├── index.html                       # HTML5 entry with fonts, SEO meta tags, and SVG favicon
├── metadata.json                    # Platform metadata
├── package.json                     # Dependencies & scripts
├── public/                          # Static assets directory
├── src/
│   ├── App.tsx                      # Primary page layout & section sequencer
│   ├── main.tsx                     # React root mount
│   ├── index.css                    # Tailwind CSS v4 & custom typography
│   ├── types.ts                     # TypeScript data interfaces & form models
│   ├── data/
│   │   └── conclaveData.ts          # Authentic content from official concept note & poster
│   └── components/
│       ├── Navbar.tsx               # Sticky navigation with mobile menu & quick CTA
│       ├── Hero.tsx                 # High-impact institutional hero section
│       ├── EventInfoStrip.tsx       # Key fact strip with tentative venue badge
│       ├── AboutSection.tsx         # "Building Mentally Healthy Schools" (split layout)
│       ├── ObjectivesSection.tsx    # 9 strategic objectives cards with hover states
│       ├── ProgramFocusSection.tsx  # 13 focus areas categorized into 3 pillars
│       ├── TeacherTrainingSection.tsx # 8 teacher learning outcomes
│       ├── ClassroomWellbeingSection.tsx # 5-step flow + 10 classroom pillars
│       ├── TeacherWellbeingSection.tsx   # 10 teacher wellness topics
│       ├── SchoolEcosystemSection.tsx   # Stakeholder collaboration & 6-stage continuum
│       ├── ParticipationSection.tsx # Delegation structure (Students/Teachers/Principal)
│       ├── ParticipationFeeSection.tsx # Transparent ₹11,000 /- pricing card
│       ├── CertificationSection.tsx # 3 certificate cards + conclave report
│       ├── CollaboratorsSection.tsx # Profiles of IAMH and IMS-BHU Psychiatry CoE
│       ├── VenueSection.tsx         # BHU venue details with tentative notice & map link
│       ├── RegistrationSection.tsx  # 9-field registration form with validation & slip
│       ├── ContactSection.tsx       # Clickable phone helpline (9696384984)
│       ├── Footer.tsx               # Institutional footer with quick links
│       ├── InstitutionalBadges.tsx  # Scalable vector seals for IAMH and IMS-BHU
│       └── PolicyModals.tsx         # Accessible Privacy Policy & Terms modals
```

---

## 4. Local Development & Setup

### Prerequisites
* Node.js 18+ (Node 20 or 22 recommended)
* npm 9+ or pnpm / yarn

### Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Start the Vite dev server
npm run dev

# 3. Open browser
http://localhost:3000
```

### Production Build & Linting
```bash
# Validate TypeScript
npm run lint

# Compile production bundle to /dist
npm run build
```

---

## 5. Asset Placement Instructions

If you have high-resolution PNG/SVG files for the IAMH logo or BHU emblems:
1. Place image files into the `/public` directory (e.g. `/public/iamh-logo.png`).
2. You can reference them directly with `<img src="/iamh-logo.png" alt="IAMH Logo" referrerPolicy="no-referrer" />`.
3. High-fidelity SVG vector seals are built into `src/components/InstitutionalBadges.tsx` and render crisply at any scale without external dependencies.

---

## 6. Connecting the Registration Form to a Real Backend

The registration form in `src/components/RegistrationSection.tsx` is built with real-time validation and generates a unique acknowledgment slip code (e.g., `IAMH-SMHC-XXXXXX`) stored in client state.

Here is how you can connect it to any real backend:

### Option A: Google Forms / Google Sheets (Zero-Code Backend)
1. Create a Google Form with fields corresponding to the 9 inputs.
2. Get the pre-filled link or `formResponse` URL and entry IDs (e.g., `entry.12345678`).
3. In `src/components/RegistrationSection.tsx`, update `handleSubmit`:
```typescript
const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
const formDataBody = new FormData();
formDataBody.append("entry.1000001", formData.schoolName);
formDataBody.append("entry.1000002", formData.representativeName);
formDataBody.append("entry.1000003", formData.phoneNumber);
// ... remaining fields

await fetch(googleFormUrl, {
  method: "POST",
  mode: "no-cors",
  body: formDataBody,
});
```

### Option B: Firebase Firestore
1. Install Firebase: `npm install firebase`.
2. Initialize Firebase in `src/lib/firebase.ts`.
3. In `handleSubmit`:
```typescript
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

await addDoc(collection(db, "school_registrations"), {
  ...formData,
  submittedAt: new Date().toISOString(),
  registrationNumber: regId,
  feeAmount: "₹11,000 /-",
  status: "Received"
});
```

### Option C: Custom REST API / Express
Replace the simulated timeout in `handleSubmit` with:
```typescript
const response = await fetch("/api/register-school", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});
const result = await response.json();
```

---

## 7. Deployment Instructions

### A. Deploying on Vercel
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your site will be live on a secure HTTPS URL in under 60 seconds.

### B. Deploying on Hostinger
#### Static Web Hosting / Shared Hosting:
1. Run the build command locally:
   ```bash
   npm run build
   ```
2. This creates a production-ready `dist` folder.
3. Log in to your Hostinger hPanel.
4. Navigate to **File Manager** -> `public_html`.
5. Upload all the files **inside** the `dist/` folder directly into `public_html`.
6. Ensure an `.htaccess` file is present in `public_html` for single-page routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 8. Fact Compliance & Integrity Notice

This website adheres strictly to the official event poster and concept note:
* **No invented dates or timings:** 6 October 2026, 10:30 AM – 4:00 PM.
* **Accurate organizer branding:** Indian Academy of Mental Health (IAMH) & Department of Psychiatry, Centre of Excellence, IMS-BHU.
* **Exact fee:** ₹11,000 /- Per School.
* **Tentative venue condition:** Highlighted prominently throughout all venue and event badges.
* **Official contact:** 9696384984 (`tel:9696384984`).
#   M e n t a l _ H e a l t h _ C o n c l a v e  
 