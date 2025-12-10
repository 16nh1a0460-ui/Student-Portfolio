export interface VocationalProfile {
  studentName: string;
  tradeName: string;
  schoolName: string;
  vtpName: string;
  // Page 2 Details
  tradeSector: string;
  courseName: string;
  duration: string;
  level: string;
  medium: string;
  yearOfStudy: string;
  classNo: string;
  section: string;
  rollNo: string;
  aadhar: string;
  socialStatus: string;
  speciallyAble: string;
  address: {
    meridian: string;
    street: string;
    landmark: string;
    village: string;
    mandal: string;
    district: string;
    state: string;
    pin: string;
  };
  contact: {
    studentPhone: string;
    fatherPhone: string;
    motherPhone: string;
    email: string;
  };
  family: {
    fatherName: string;
    motherName: string;
    rationCard: string;
    members: Array<{ relation: string; name: string; occupation: string }>;
  };
  schoolDetails: {
    udise: string;
    name: string;
    village: string;
    mandal: string;
    district: string;
    state: string;
    pin: string;
  };
  interest: {
    whyInterested: string;
    statusInSchool: string;
    availableTrades: string;
    firstTrade: string;
  };
  photoUrl: string;
}

export interface Observation {
  strength: string[];
  specialty: string;
  expectations: string[];
  qualities: string[];
}

export interface ActivityLogItem {
  slNo: number;
  name: string;
  dateTime: string;
  contribution: string;
  skillLearnt: string;
  problemsFaced: string;
  attemptsToSolve: string;
  support: string;
}

export interface GuestLecture {
  slNo: number;
  name: string;
  designation: string;
  topic: string;
  date: string;
  skillLearnt: string;
}

export interface AssessmentItem {
  slNo: number;
  criteria: string;
  maxMarks: number;
  obtained: number;
}

export interface PortfolioData {
  profile: VocationalProfile;
  observations: Observation;
  rolePlays: ActivityLogItem[];
  charts: ActivityLogItem[];
  models: ActivityLogItem[];
  guestLectures: GuestLecture[];
  assessment: AssessmentItem[];
  achievements: string[];
  conclusion: string;
}

// Added aliases for compatibility with components
export type FullStudentData = PortfolioData;

export interface User {
  username: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
}

export interface StudentProfile {
  name: string;
  grade: string;
  academicYear: string;
  id: string;
  dob: string;
  email: string;
  contact: string;
  address: string;
  parentName: string;
  emergencyContact: string;
  photoUrl: string;
}

export interface SubjectGrade {
  subject: string;
  teacher: string;
  term1: number;
  term2: number;
  term3: number;
  term4?: number | string;
  final?: number | string;
  remarks: string;
}

export interface Skill {
  id: string | number;
  category: string;
  icon: string;
  date: string;
  description: string;
  verifiedBy: string;
}

export interface AttendanceRecord {
  month: string;
  totalDays: number;
  present: number;
  absent: number;
  late: number;
}

export interface Project {
  id: string | number;
  title: string;
  score: string;
  subject: string;
  description: string;
  skillsUsed: string[];
  date: string;
}

export interface TeacherRemark {
  id: string | number;
  teacher: string;
  date: string;
  category: string;
  comment: string;
}