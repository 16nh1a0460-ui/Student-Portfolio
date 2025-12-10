export interface StudentProfile {
  name: string;
  id: string;
  grade: string;
  academicYear: string;
  dob: string;
  contact: string;
  email: string;
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
  term4: number | null;
  final: number | null;
  remarks: string;
}

export interface Skill {
  id: string;
  category: string;
  description: string;
  date: string;
  verifiedBy: string;
  icon: 'star' | 'medal' | 'palette' | 'trophy';
}

export interface AttendanceRecord {
  month: string;
  totalDays: number;
  present: number;
  absent: number;
  late: number;
}

export interface Project {
  id: string;
  title: string;
  subject: string;
  description: string;
  skillsUsed: string[];
  score: string;
  date: string;
}

export interface TeacherRemark {
  id: string;
  date: string;
  teacher: string;
  category: string;
  comment: string;
}

export interface FullStudentData {
  profile: StudentProfile;
  grades: SubjectGrade[];
  skills: Skill[];
  attendance: AttendanceRecord[];
  projects: Project[];
  remarks: TeacherRemark[];
}