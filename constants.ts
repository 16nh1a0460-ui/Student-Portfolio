import { FullStudentData } from './types';

export const MOCK_STUDENT_DATA: FullStudentData = {
  profile: {
    name: "Alex Johnson",
    id: "STU-2024-8892",
    grade: "10 - Science A",
    academicYear: "2024-2025",
    dob: "2008-05-14",
    contact: "+1 (555) 012-3456",
    email: "alex.j@school.edu",
    address: "42 Maple Avenue, Springfield, IL",
    parentName: "Sarah Johnson",
    emergencyContact: "+1 (555) 987-6543",
    photoUrl: "https://picsum.photos/300/300"
  },
  grades: [
    { subject: "Mathematics", teacher: "Mr. Anderson", term1: 88, term2: 92, term3: 85, term4: 90, final: 89, remarks: "Consistent performance." },
    { subject: "Physics", teacher: "Ms. Curie", term1: 78, term2: 82, term3: 88, term4: null, final: null, remarks: "Showing great improvement." },
    { subject: "English Lit", teacher: "Mr. Poe", term1: 95, term2: 94, term3: 96, term4: null, final: null, remarks: "Exceptional writing skills." },
    { subject: "History", teacher: "Mrs. Carter", term1: 85, term2: 80, term3: 82, term4: null, final: null, remarks: "Needs more participation." },
    { subject: "Computer Science", teacher: "Mr. Turing", term1: 98, term2: 99, term3: 97, term4: null, final: null, remarks: "Outstanding coder." }
  ],
  skills: [
    { id: '1', category: 'Leadership', description: 'Class Representative', date: '2024-09-01', verifiedBy: 'Principal Skinner', icon: 'medal' },
    { id: '2', category: 'Arts', description: '1st Place in District Art Fair', date: '2024-11-15', verifiedBy: 'Ms. Ross', icon: 'palette' },
    { id: '3', category: 'Sports', description: 'Varsity Soccer Team Captain', date: '2024-10-05', verifiedBy: 'Coach Ted', icon: 'trophy' },
    { id: '4', category: 'Academic', description: 'Honor Roll - Semester 1', date: '2025-01-10', verifiedBy: 'Academic Dean', icon: 'star' }
  ],
  attendance: [
    { month: "September", totalDays: 20, present: 20, absent: 0, late: 0 },
    { month: "October", totalDays: 22, present: 21, absent: 1, late: 0 },
    { month: "November", totalDays: 19, present: 19, absent: 0, late: 1 },
    { month: "December", totalDays: 15, present: 14, absent: 1, late: 0 },
    { month: "January", totalDays: 20, present: 20, absent: 0, late: 0 }
  ],
  projects: [
    { id: '101', title: "Sustainable Energy Model", subject: "Physics", description: "Built a working miniature wind turbine to demonstrate renewable energy.", skillsUsed: ["Engineering", "Data Analysis", "Presentation"], score: "A", date: "2024-12-10" },
    { id: '102', title: "Modern Macbeth Adaptation", subject: "English", description: "Wrote and directed a short play setting Macbeth in a corporate boardroom.", skillsUsed: ["Writing", "Directing", "Collaboration"], score: "A+", date: "2024-11-20" },
    { id: '103', title: "Portfolio Website", subject: "Comp Sci", description: "Developed a personal portfolio using HTML/CSS/JS.", skillsUsed: ["Coding", "Design", "Logic"], score: "98/100", date: "2025-01-15" }
  ],
  remarks: [
    { id: 'r1', date: '2024-09-15', teacher: 'Mr. Anderson', category: 'Behavior', comment: 'Alex is a pleasure to have in class. Always helpful to peers.' },
    { id: 'r2', date: '2024-11-02', teacher: 'Mrs. Carter', category: 'Academic', comment: 'Homework submission was late this week. Please ensure better time management.' },
    { id: 'r3', date: '2025-01-20', teacher: 'Mr. Turing', category: 'Achievement', comment: 'Alex solved a complex algorithm problem that stumped the rest of the class. Brilliant work.' }
  ]
};