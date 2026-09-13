import { ObjectiveItem, FocusArea, EcosystemStakeholder } from '../types';

export const EVENT_DETAILS = {
  title: "School Mental Health Conclave",
  year: "2026",
  badge: "WORLD MENTAL HEALTH DAY 2026",
  tagline: "Building Mentally Healthy Students, Empowered Teachers & Supportive Schools",
  date: "6 OCTOBER 2026",
  day: "Tuesday",
  time: "10:30 AM – 4:00 PM",
  venueName: "Swatantrata Bhawan – Shatabdi Auditorium",
  venueInstitution: "Banaras Hindu University (BHU), Varanasi",
  venueStatus: "Tentative Venue – Subject to Final Confirmation",
  organizer: "Indian Academy of Mental Health (IAMH)",
  collaborator: "Department of Psychiatry, Centre of Excellence, IMS-BHU",
  contactPhone: "9696384984",
  participationFee: "₹11,000 /-",
  feeScope: "Per School (covers designated delegation of students, teachers, and school leadership)",
  visionStatement: "Every Child Deserves a Mentally Healthy School.",
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSennJI_E2ImGjPBwe8pOtfUPG54PH4gQWG0_JtixShWNaTFMw/viewform",
};

export const DELEGATION_STRUCTURE = {
  students: {
    min: 50,
    max: 80,
    label: "Students",
    description: "Adolescent learners participating in interactive awareness workshops, mental health literacy sessions, and peer empathy activities.",
  },
  teachers: {
    min: 10,
    max: 20,
    label: "Teachers",
    description: "Educators receiving structured training on early identification, psychological safety, emotion management, and supportive classroom dynamics.",
  },
  leadership: {
    count: "Principal – 1",
    label: "School Leadership",
    description: "School Principal or Head of Institution guiding policy, institutional mental health framework development, and student welfare systems.",
  }
};

export const KEY_OBJECTIVES: ObjectiveItem[] = [
  {
    id: 1,
    title: "Child & Adolescent Mental Health Awareness",
    description: "Promote widespread awareness about developmental, behavioural, and emotional aspects of youth well-being among school communities.",
    iconName: "Brain"
  },
  {
    id: 2,
    title: "Understanding Psychological Factors",
    description: "Help educators and leaders understand the psychological and developmental factors underlying children's classroom behaviours.",
    iconName: "Search"
  },
  {
    id: 3,
    title: "Practical Management Strategies",
    description: "Equip teachers with actionable, constructive techniques for managing behavioural challenges and emotional distress without escalation.",
    iconName: "ShieldCheck"
  },
  {
    id: 4,
    title: "Psychologically Safe Classrooms",
    description: "Develop emotionally supportive environments where students feel secure, respected, validated, and genuinely heard.",
    iconName: "HeartHandshake"
  },
  {
    id: 5,
    title: "Strengthening Communication & Trust",
    description: "Foster meaningful teacher–student bonds based on active listening, empathy, mutual respect, and positive rapport.",
    iconName: "MessageCircle"
  },
  {
    id: 6,
    title: "Promoting Positive Behaviour & Adjustment",
    description: "Guide students toward healthy socio-emotional adaptation, self-esteem, peer collaboration, and constructive conflict resolution.",
    iconName: "Compass"
  },
  {
    id: 7,
    title: "Teacher Well-being & Burnout Prevention",
    description: "Directly address the mental health and emotional needs of teachers to prevent occupational fatigue and foster resilience.",
    iconName: "Sparkles"
  },
  {
    id: 8,
    title: "Institutional Mental Health Ecosystems",
    description: "Encourage educational institutions to establish sustainable frameworks, supportive protocols, and preventive mental health cultures.",
    iconName: "School"
  },
  {
    id: 9,
    title: "Early Identification & Appropriate Referral",
    description: "Train staff in recognizing early warning signs of psychological concerns and facilitating timely professional interventions.",
    iconName: "UserCheck"
  }
];

export const PROGRAM_FOCUS_AREAS: FocusArea[] = [
  // Behavioural & Social
  {
    id: "f1",
    category: "Behavioural & Social",
    title: "Behavioural difficulties",
    detail: "Understanding disruptive patterns, impulsivity, and non-compliance through a psychological developmental lens rather than mere discipline."
  },
  {
    id: "f2",
    category: "Behavioural & Social",
    title: "Anger and aggression",
    detail: "Root triggers behind emotional outbursts, verbal defiance, and peer friction; providing safe de-escalation avenues."
  },
  {
    id: "f3",
    category: "Behavioural & Social",
    title: "Peer relationship difficulties",
    detail: "Navigating bullying dynamics, social exclusion, peer pressure, conflict resolution, and healthy relationship skills."
  },
  {
    id: "f4",
    category: "Behavioural & Social",
    title: "Social adjustment problems",
    detail: "Supporting transition phases, unfamiliar environments, classroom socialization, and cultural adaptation in diverse classrooms."
  },
  {
    id: "f5",
    category: "Behavioural & Social",
    title: "Excessive digital and social media use",
    detail: "Addressing screen addiction, cyber-vulnerability, gaming overuse, impaired sleep habits, and digital attention fracturing."
  },

  // Emotional & Psychological
  {
    id: "f6",
    category: "Emotional & Psychological",
    title: "Anxiety and excessive worrying",
    detail: "Identifying somatic complaints, phobias, panic sensations, performance apprehension, and catastrophic thought patterns."
  },
  {
    id: "f7",
    category: "Emotional & Psychological",
    title: "Emotional dysregulation",
    detail: "Assisting children experiencing rapid emotional shifts, overwhelm, tearfulness, or prolonged distress in finding balance."
  },
  {
    id: "f8",
    category: "Emotional & Psychological",
    title: "Low self-esteem and confidence",
    detail: "Countering harsh self-criticism, fear of failure, feelings of inadequacy, and social hesitation."
  },
  {
    id: "f9",
    category: "Emotional & Psychological",
    title: "Emotional withdrawal and isolation",
    detail: "Recognizing quiet signs of sadness, detachment, diminished interest in activities, and unspoken distress."
  },
  {
    id: "f10",
    category: "Emotional & Psychological",
    title: "Emerging psychological concerns",
    detail: "Spotting subtle signs that require collaborative clinical evaluation, psychological triage, and family engagement."
  },

  // Academic & Cognitive
  {
    id: "f11",
    category: "Academic & Cognitive",
    title: "Academic and examination stress",
    detail: "Mitigating competitive overload, fear of grading consequences, parental expectations, and evaluation-induced tension."
  },
  {
    id: "f12",
    category: "Academic & Cognitive",
    title: "Attention and concentration difficulties",
    detail: "Distinguishing between cognitive fatigue, processing differences, attention deficits, and situational disengagement."
  },
  {
    id: "f13",
    category: "Academic & Cognitive",
    title: "School-related stress and adjustment difficulties",
    detail: "Assisting with morning school refusal, attendance avoidance, curriculum transitions, and academic alienation."
  }
];

export const TEACHER_LEARNING_OUTCOMES = [
  {
    id: 1,
    title: "What may be behind a child's difficult behaviour",
    description: "Disentangle the hidden emotional distress, developmental delays, domestic stress, or cognitive bottlenecks behind disruptive conduct."
  },
  {
    id: 2,
    title: "How to respond without escalating the situation",
    description: "Master non-reactive de-escalation postures, measured vocal tone, and calming physical positioning during classroom friction."
  },
  {
    id: 3,
    title: "How to emotionally settle an upset, anxious or angry child",
    description: "Deploy grounded breathing, validating language, and structured grounding strategies to help dysregulated students regain composure."
  },
  {
    id: 4,
    title: "How to communicate effectively with children",
    description: "Adopt non-judgmental inquiry, open-ended question formats, and active listening that makes students feel heard and respected."
  },
  {
    id: 5,
    title: "How to build trust and psychological safety in the classroom",
    description: "Establish consistent norms, eliminate fear of public humiliation, and normalize mistakes as natural components of learning."
  },
  {
    id: 6,
    title: "How to use positive and constructive behaviour-management strategies",
    description: "Shift from punitive penalties to restorative solutions, positive reinforcement, and collaborative problem-solving."
  },
  {
    id: 7,
    title: "How to identify early warning signs of psychological difficulties",
    description: "Identify behavioral regression, persistent academic drops, sudden social withdrawal, and somatic complaints early."
  },
  {
    id: 8,
    title: "When and how to seek professional psychological support",
    description: "Understand clear ethical referral pathways to school counsellors, psychologists, and clinical child psychiatrists."
  }
];

export const CLASSROOM_FLOW_STEPS = [
  { step: 1, label: "Listen", detail: "Give undivided attention without rushing to judge or interrupt." },
  { step: 2, label: "Understand", detail: "Identify underlying psychological factors and emotional needs." },
  { step: 3, label: "Connect", detail: "Form an empathetic bridge so the student feels safe and recognized." },
  { step: 4, label: "Respond", detail: "Adopt constructive, calm, and de-escalating responses." },
  { step: 5, label: "Support", detail: "Provide continuous guidance, scaffolding, and professional resources." }
];

export const CLASSROOM_DIMENSIONS = [
  "Positive classroom communication",
  "Empathy and active listening",
  "Emotional safety",
  "Positive discipline",
  "Healthy boundaries",
  "Inclusive classroom practices",
  "Respectful teacher–student relationships",
  "Peer support",
  "Emotional regulation",
  "Conflict-resolution skills"
];

export const TEACHER_WELLBEING_TOPICS = [
  { title: "Stress management", desc: "Techniques to manage daily classroom friction and heavy institutional demands." },
  { title: "Emotional regulation", desc: "Practices to stay grounded and preserve personal calm during intense moments." },
  { title: "Work–life balance", desc: "Creating sustainable boundaries between educational duties and home life." },
  { title: "Prevention of professional burnout", desc: "Identifying chronic fatigue early and building proactive restorative habits." },
  { title: "Managing difficult situations", desc: "Handling challenging parent dialogues and crisis interactions with confidence." },
  { title: "Interpersonal adjustment", desc: "Adapting gracefully to shifting faculty expectations and curriculum pressures." },
  { title: "Healthy communication with colleagues", desc: "Fostering mutual peer support and transparent staff room communication." },
  { title: "Managing workplace stress", desc: "Navigating administrative deadlines, exam responsibilities, and evaluations." },
  { title: "Emotional resilience", desc: "Cultivating adaptive inner strength to handle continuous educational changes." },
  { title: "Maintaining personal psychological well-being", desc: "Prioritizing self-compassion, physical health, and professional fulfillment." }
];

export const ECOSYSTEM_STAKEHOLDERS: EcosystemStakeholder[] = [
  {
    role: "Students",
    description: "Active participants developing emotional literacy, peer support, and resilience.",
    responsibility: "Learning self-advocacy, emotional awareness, and mutual empathy among peers.",
    iconName: "Users"
  },
  {
    role: "Teachers",
    description: "Frontline mentors observing classroom shifts and providing daily emotional safety.",
    responsibility: "Applying positive classroom practices, early identification, and supportive guidance.",
    iconName: "GraduationCap"
  },
  {
    role: "Principals",
    description: "Visionary leaders setting school-wide mental health priorities and culture.",
    responsibility: "Allocating time, resources, teacher wellness support, and institutional protocols.",
    iconName: "Award"
  },
  {
    role: "Parents",
    description: "Crucial partners sustaining emotional health and continuity beyond school hours.",
    responsibility: "Collaborative home-school communication, positive parenting, and non-stigmatizing care.",
    iconName: "Home"
  },
  {
    role: "School Leadership",
    description: "Management trustees and boards ensuring policy integration and clinical tie-ups.",
    responsibility: "Institutional commitment, child safety frameworks, and professional counselling staff.",
    iconName: "Shield"
  }
];

export const CONTINUUM_PROGRESSION = [
  { stage: "Awareness", desc: "Recognizing mental health as foundational to life and learning." },
  { stage: "Prevention", desc: "Fostering resilience, healthy classrooms, and protective buffers." },
  { stage: "Early Identification", desc: "Spotting behavioral and emotional warning signs before crisis." },
  { stage: "Support", desc: "Providing empathetic classroom accommodations and guidance." },
  { stage: "Referral", desc: "Connecting students to trained counsellors and psychiatrists." },
  { stage: "Recovery", desc: "Ensuring compassionate reintegration, sustained care, and thriving." }
];

export const CERTIFICATION_TIERS = [
  {
    audience: "For Students",
    certificateTitle: "Participation Certificate",
    subtitle: "Mental Health Awareness & Learning Experience",
    description: "Awarded to student delegates acknowledging active completion of mental health literacy, socio-emotional skill workshops, and peer empathy activities.",
    badgeColor: "emerald"
  },
  {
    audience: "For Teachers",
    certificateTitle: "Training & Participation Certificate",
    subtitle: "Professional Mental Health Training Experience",
    description: "Formal training certification documenting professional development in classroom psychological safety, positive behaviour management, and early identification.",
    badgeColor: "sky"
  },
  {
    audience: "For Participating Schools",
    certificateTitle: "Official Participation / Recognition Certificate",
    subtitle: "Recognition for Participation in the School Mental Health Initiative",
    description: "Institutional institutional citation presented to the school principal acknowledging leadership in fostering a mentally healthy educational environment.",
    badgeColor: "amber",
    extra: "Includes Comprehensive Conclave Participation Report"
  }
];
