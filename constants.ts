import { PortfolioData } from './types';

// --- Authentication Data ---
export const MOCK_USERS = {
  "chaitanya": "pass123",
  "priya": "pass123",
  "rahul": "pass123"
};

// --- Mock Database of Students ---
const CHAITANYA_DATA: PortfolioData = {
  profile: {
    studentName: "Chaitanya",
    tradeName: "Electronics & Hardware",
    schoolName: "Govt High School, Springfield",
    vtpName: "SkillTree India Pvt Ltd",
    tradeSector: "Electronics",
    courseName: "Field Technician",
    duration: "2 Years",
    level: "L4",
    medium: "English",
    yearOfStudy: "2024-2025",
    classNo: "10",
    section: "A",
    rollNo: "24089",
    aadhar: "XXXX-XXXX-1234",
    socialStatus: "General",
    speciallyAble: "No",
    address: {
      meridian: "North Block",
      street: "Gandhi Road",
      landmark: "Near Water Tank",
      village: "Springfield",
      mandal: "Central",
      district: "Capital Dist",
      state: "Andhra Pradesh",
      pin: "520001"
    },
    contact: {
      studentPhone: "9876543210",
      fatherPhone: "9876543211",
      motherPhone: "9876543212",
      email: "chaitanya.student@edu.in"
    },
    family: {
      fatherName: "Ramesh Kumar",
      motherName: "Sujata Devi",
      rationCard: "WAP-1029384",
      members: [
        { relation: "Father", name: "Ramesh Kumar", occupation: "Farmer" },
        { relation: "Mother", name: "Sujata Devi", occupation: "Homemaker" },
        { relation: "Sister", name: "Ananya", occupation: "Student" }
      ]
    },
    schoolDetails: {
      udise: "2810001001",
      name: "Z.P. High School",
      village: "Springfield",
      mandal: "Central",
      district: "Capital Dist",
      state: "AP",
      pin: "520001"
    },
    interest: {
      whyInterested: "I have always been curious about how electronic gadgets work.",
      statusInSchool: "Regular Student",
      availableTrades: "Electronics, Agriculture, Beauty & Wellness",
      firstTrade: "Electronics"
    },
    photoUrl: "https://picsum.photos/seed/chaitanya/300/300"
  },
  observations: {
    strength: ["School Leader", "Group Leader", "Sports Person"],
    specialty: "Good at soldering and circuit design",
    expectations: ["Regularity", "Discipline", "Team Work"],
    qualities: ["Honesty", "Courage", "Attitude"]
  },
  rolePlays: [
    { slNo: 1, name: "Customer Service Scenerio", dateTime: "10-08-2024 10:00 AM", contribution: "Played the role of technician", skillLearnt: "Communication", problemsFaced: "Nervousness", attemptsToSolve: "Practice", support: "Trainer" },
    { slNo: 2, name: "Safety Drill", dateTime: "15-09-2024 11:00 AM", contribution: "Safety Officer", skillLearnt: "Leadership", problemsFaced: "Crowd control", attemptsToSolve: "Used whistle", support: "Principal" }
  ],
  charts: [
    { slNo: 1, name: "Ohm's Law Diagram", dateTime: "20-08-2024", contribution: "Drawing and Labeling", skillLearnt: "Circuit Theory", problemsFaced: "Scale alignment", attemptsToSolve: "Used graph paper", support: "Teacher" }
  ],
  models: [
    { slNo: 1, name: "Series & Parallel Circuit", dateTime: "05-10-2024", contribution: "Wiring", skillLearnt: "Practical wiring", problemsFaced: "Loose connections", attemptsToSolve: "Soldering", support: "Lab Assistant" }
  ],
  guestLectures: [
    { slNo: 1, name: "Mr. Sharma", designation: "Senior Engineer", topic: "Future of IoT", date: "12-11-2024", skillLearnt: "Career awareness" }
  ],
  assessment: [
    { slNo: 1, criteria: "Knowledge of Content and Clarity on concepts", maxMarks: 10, obtained: 2 },
    { slNo: 2, criteria: "Creativity", maxMarks: 10, obtained: 2 },
    { slNo: 3, criteria: "Writing Skills", maxMarks: 10, obtained: 1 },
    { slNo: 4, criteria: "Clarity of thoughts in Assignments", maxMarks: 10, obtained: 2 },
    { slNo: 5, criteria: "Punctuality", maxMarks: 10, obtained: 2 }
  ],
  achievements: ["Won 1st prize in Science Fair 2024", "NCC Cadet 'A' Certificate"],
  conclusion: "I have successfully completed the Level 4 course in Electronics. I am confident in repairing basic household appliances."
};

const PRIYA_DATA: PortfolioData = {
  profile: {
    studentName: "Priya Sharma",
    tradeName: "Beauty & Wellness",
    schoolName: "Govt Girls High School, Springfield",
    vtpName: "Glamour Skills Foundation",
    tradeSector: "Beauty & Wellness",
    courseName: "Assistant Beauty Therapist",
    duration: "2 Years",
    level: "L4",
    medium: "English",
    yearOfStudy: "2024-2025",
    classNo: "10",
    section: "B",
    rollNo: "24102",
    aadhar: "XXXX-XXXX-9876",
    socialStatus: "OBC",
    speciallyAble: "No",
    address: {
      meridian: "East Zone",
      street: "Market Street",
      landmark: "Opp. City Library",
      village: "Springfield",
      mandal: "North",
      district: "Capital Dist",
      state: "Andhra Pradesh",
      pin: "520002"
    },
    contact: {
      studentPhone: "9988776655",
      fatherPhone: "9988776644",
      motherPhone: "9988776633",
      email: "priya.sharma@edu.in"
    },
    family: {
      fatherName: "Anil Sharma",
      motherName: "Meena Sharma",
      rationCard: "WAP-9988776",
      members: [
        { relation: "Father", name: "Anil Sharma", occupation: "Merchant" },
        { relation: "Mother", name: "Meena Sharma", occupation: "Teacher" }
      ]
    },
    schoolDetails: {
      udise: "2810001002",
      name: "Govt Girls High School",
      village: "Springfield",
      mandal: "North",
      district: "Capital Dist",
      state: "AP",
      pin: "520002"
    },
    interest: {
      whyInterested: "I want to start my own salon in the future.",
      statusInSchool: "Class Representative",
      availableTrades: "Beauty & Wellness, IT/ITeS",
      firstTrade: "Beauty & Wellness"
    },
    photoUrl: "https://picsum.photos/seed/priya/300/300"
  },
  observations: {
    strength: ["Class Representative", "Cultural Wing"],
    specialty: "Excellent communication and makeup skills",
    expectations: ["Creativity", "Presentation Skills", "Hygiene"],
    qualities: ["Honesty", "Attitude", "Patience"]
  },
  rolePlays: [
    { slNo: 1, name: "Client Consultation", dateTime: "12-09-2024", contribution: "Therapist", skillLearnt: "Client handling", problemsFaced: "Difficult client", attemptsToSolve: "Politeness", support: "Trainer" }
  ],
  charts: [
    { slNo: 1, name: "Skin Structure", dateTime: "15-10-2024", contribution: "Illustration", skillLearnt: "Anatomy", problemsFaced: "Color blending", attemptsToSolve: "Used pastels", support: "Teacher" }
  ],
  models: [
    { slNo: 1, name: "Bridal Makeup Look", dateTime: "20-11-2024", contribution: "Makeup Application", skillLearnt: "Aesthetics", problemsFaced: "Time management", attemptsToSolve: "Practice", support: "Peer" }
  ],
  guestLectures: [
    { slNo: 1, name: "Ms. Rekha", designation: "Salon Owner", topic: "Salon Management", date: "05-12-2024", skillLearnt: "Entrepreneurship" }
  ],
  assessment: [
    { slNo: 1, criteria: "Knowledge of Content", maxMarks: 10, obtained: 2 },
    { slNo: 2, criteria: "Creativity", maxMarks: 10, obtained: 2 },
    { slNo: 3, criteria: "Hygiene Maintenance", maxMarks: 10, obtained: 2 },
    { slNo: 4, criteria: "Client Interaction", maxMarks: 10, obtained: 1 },
    { slNo: 5, criteria: "Punctuality", maxMarks: 10, obtained: 2 }
  ],
  achievements: ["Best Makeup Artist - School Annual Day"],
  conclusion: "I feel confident to work as an assistant therapist and plan to pursue advanced courses."
};

const RAHUL_DATA: PortfolioData = {
  profile: {
    studentName: "Rahul Singh",
    tradeName: "Automotive",
    schoolName: "Vocational High School, Springfield",
    vtpName: "AutoSkill Partners",
    tradeSector: "Automotive",
    courseName: "Two Wheeler Service Technician",
    duration: "2 Years",
    level: "L4",
    medium: "English",
    yearOfStudy: "2024-2025",
    classNo: "10",
    section: "C",
    rollNo: "24205",
    aadhar: "XXXX-XXXX-5678",
    socialStatus: "General",
    speciallyAble: "No",
    address: {
      meridian: "West Zone",
      street: "Garage Lane",
      landmark: "Near Bus Depot",
      village: "Springfield",
      mandal: "West",
      district: "Capital Dist",
      state: "Andhra Pradesh",
      pin: "520003"
    },
    contact: {
      studentPhone: "8899776655",
      fatherPhone: "8899776644",
      motherPhone: "8899776633",
      email: "rahul.singh@edu.in"
    },
    family: {
      fatherName: "Vikram Singh",
      motherName: "Kavita Singh",
      rationCard: "WAP-5544332",
      members: [
        { relation: "Father", name: "Vikram Singh", occupation: "Mechanic" },
        { relation: "Mother", name: "Kavita Singh", occupation: "Nurse" }
      ]
    },
    schoolDetails: {
      udise: "2810001003",
      name: "Vocational High School",
      village: "Springfield",
      mandal: "West",
      district: "Capital Dist",
      state: "AP",
      pin: "520003"
    },
    interest: {
      whyInterested: "I love bikes and engines.",
      statusInSchool: "Sports Captain",
      availableTrades: "Automotive, Electrical",
      firstTrade: "Automotive"
    },
    photoUrl: "https://picsum.photos/seed/rahul/300/300"
  },
  observations: {
    strength: ["Sports Person", "Team Leader"],
    specialty: "Engine diagnosis",
    expectations: ["Discipline", "Safety", "Hard-work"],
    qualities: ["Courage", "Physical Strength"]
  },
  rolePlays: [
    { slNo: 1, name: "Workshop Safety", dateTime: "01-09-2024", contribution: "Supervisor", skillLearnt: "Safety Protocols", problemsFaced: "None", attemptsToSolve: "N/A", support: "Trainer" }
  ],
  charts: [
    { slNo: 1, name: "4-Stroke Engine Cycle", dateTime: "10-10-2024", contribution: "Diagram", skillLearnt: "Internal Combustion", problemsFaced: "Complexity", attemptsToSolve: "Simplified steps", support: "Teacher" }
  ],
  models: [
    { slNo: 1, name: "Carburetor Model", dateTime: "15-11-2024", contribution: "Assembly", skillLearnt: "Fuel Systems", problemsFaced: "Part availability", attemptsToSolve: "Recycled parts", support: "Lab Assistant" }
  ],
  guestLectures: [
    { slNo: 1, name: "Mr. Bajaj", designation: "Service Manager", topic: "BS-VI Norms", date: "02-12-2024", skillLearnt: "Technical standards" }
  ],
  assessment: [
    { slNo: 1, criteria: "Technical Knowledge", maxMarks: 10, obtained: 2 },
    { slNo: 2, criteria: "Tool Handling", maxMarks: 10, obtained: 2 },
    { slNo: 3, criteria: "Safety Compliance", maxMarks: 10, obtained: 2 },
    { slNo: 4, criteria: "Diagnosis Skills", maxMarks: 10, obtained: 2 },
    { slNo: 5, criteria: "Punctuality", maxMarks: 10, obtained: 1 }
  ],
  achievements: ["Inter-school Cricket Champion"],
  conclusion: "I want to become a certified automobile engineer."
};

// Export the database map
export const STUDENT_DATABASE: Record<string, PortfolioData> = {
  "chaitanya": CHAITANYA_DATA,
  "priya": PRIYA_DATA,
  "rahul": RAHUL_DATA
};

// Default for initialization before login
export const INITIAL_PORTFOLIO_DATA = CHAITANYA_DATA;