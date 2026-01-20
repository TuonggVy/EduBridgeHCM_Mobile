// Types for the EduBridgeHCM Mobile App

export interface School {
  id: string;
  name: string;
  logo: string;
  address: string;
  ward: string;
  district: string;
  description: string;
  programs: string[];
  tuition: {
    min: number;
    max: number;
  };
  cutoffScores: {
    year: number;
    score: number;
  }[];
  images: string[];
  rating: number;
  phone: string;
  email: string;
  website: string;
}

export interface AIRecommendation {
  schoolId: string;
  schoolName: string;
  logo: string;
  probability: number;
  reasons: string[];
  matchScore: number;
  district: string;
  tuition: number;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

export interface CounselingSession {
  id: string;
  counselorId: string;
  counselorName: string;
  counselorAvatar: string;
  schoolId: string;
  schoolName: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  scheduledDate: string;
  messages: Message[];
  rating?: number;
  feedback?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  grade: number;
  mathScore: number;
  literatureScore: number;
  englishScore: number;
  preferredDistricts: string[];
  tuitionBudget: number;
  savedSchools: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'deadline' | 'cutoff' | 'counseling' | 'general';
  timestamp: string;
  read: boolean;
  schoolId?: string;
}

export type RootStackParamList = {
  Main: undefined;
  SchoolDetail: { schoolId: string };
  Chat: { sessionId: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  AIRecommendation: undefined;
  Counseling: undefined;
  Profile: undefined;
};
