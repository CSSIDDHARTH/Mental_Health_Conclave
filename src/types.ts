export interface RegistrationFormData {
  schoolName: string;
  representativeName: string;
  designation: string;
  phoneNumber: string;
  email: string;
  city: string;
  studentsCount: string;
  teachersCount: string;
  message: string;
}

export interface SubmittedRegistration extends RegistrationFormData {
  id: string;
  submittedAt: string;
  registrationNumber: string;
  feeAmount: string;
  status: 'Received' | 'Verified';
}

export interface ObjectiveItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FocusArea {
  id: string;
  category: 'Emotional & Psychological' | 'Academic & Cognitive' | 'Behavioural & Social';
  title: string;
  detail: string;
}

export interface EcosystemStakeholder {
  role: string;
  description: string;
  responsibility: string;
  iconName: string;
}
