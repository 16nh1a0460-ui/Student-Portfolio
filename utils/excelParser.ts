import * as XLSX from 'xlsx';
import { PortfolioData, ActivityLogItem } from '../types';
import { INITIAL_PORTFOLIO_DATA } from '../constants';

// Helper to normalize object keys (headers) to lowercase/trimmed
const normalizeRowKeys = (row: any): any => {
  if (!row || typeof row !== 'object') return {};
  const newRow: any = {};
  Object.keys(row).forEach(key => {
    // Remove special chars, extra spaces, and lowercase
    const cleanKey = key.toString().trim().toLowerCase().replace(/\s+/g, ' '); 
    newRow[cleanKey] = row[key];
  });
  return newRow;
};

// Helper to find a sheet name case-insensitively
const findSheetName = (wb: XLSX.WorkBook, target: string): string | undefined => {
  return wb.SheetNames.find(n => n.trim().toLowerCase() === target.trim().toLowerCase());
};

export const parseExcelData = async (file: File): Promise<Record<string, PortfolioData>> => {
  // Use generic console log to help debugging in browser
  console.log("Starting Excel Parse for file:", file.name);

  try {
    const buffer = await file.arrayBuffer();
    
    if (!XLSX || typeof XLSX.read !== 'function') {
      throw new Error("XLSX library is not loaded properly.");
    }

    const workbook = XLSX.read(buffer, { type: 'array' });
    console.log("Workbook Sheets found:", workbook.SheetNames);

    const bulkData: Record<string, PortfolioData> = {};

    // 1. Parse Profile Sheet (Master Sheet)
    const profileSheetName = findSheetName(workbook, 'Profile');
    if (!profileSheetName) {
      throw new Error("Missing 'Profile' sheet. Found: " + workbook.SheetNames.join(", "));
    }

    const profileSheet = workbook.Sheets[profileSheetName];
    // use sheet_to_json with default settings
    const rawProfileRows = XLSX.utils.sheet_to_json(profileSheet);
    
    console.log(`Found ${rawProfileRows.length} rows in Profile sheet`);

    // Iterate over each student row in the Profile sheet
    rawProfileRows.forEach((rawRow: any, index) => {
      const row = normalizeRowKeys(rawRow);
      
      // Look for student id key variations
      // Valid keys: 'student id', 'id', 'roll no'
      let rawId = row['student id'] || row['id'] || row['roll no'];
      
      if (!rawId) {
         console.warn(`Row ${index + 1} skipped: No 'Student ID' found. Keys present:`, Object.keys(row));
         return;
      }
      
      // Ensure strict string conversion to avoid '123456789' vs 123456789 issues
      const studentId = String(rawId).toLowerCase().trim();
      
      // Initialize student data structure
      const studentData: PortfolioData = {
        ...INITIAL_PORTFOLIO_DATA,
        profile: { ...INITIAL_PORTFOLIO_DATA.profile },
        observations: { ...INITIAL_PORTFOLIO_DATA.observations },
        rolePlays: [],
        charts: [],
        models: [],
        guestLectures: [],
        assessment: [],
        achievements: [],
        conclusion: ""
      };

      // Map Profile Fields using normalized keys
      studentData.profile = {
        ...studentData.profile,
        studentName: row['student name'] || studentData.profile.studentName,
        tradeName: row['trade name'] || studentData.profile.tradeName,
        schoolName: row['school name'] || studentData.profile.schoolName,
        vtpName: row['vtp name'] || studentData.profile.vtpName,
        tradeSector: row['trade sector'] || studentData.profile.tradeSector,
        courseName: row['course name'] || studentData.profile.courseName,
        duration: row['duration'] || studentData.profile.duration,
        level: row['level'] || studentData.profile.level,
        medium: row['medium'] || studentData.profile.medium,
        yearOfStudy: row['year of study'] || studentData.profile.yearOfStudy,
        classNo: row['class no'] || studentData.profile.classNo,
        section: row['section'] || studentData.profile.section,
        rollNo: row['roll no'] || studentData.profile.rollNo,
        aadhar: row['aadhar no'] || studentData.profile.aadhar,
        socialStatus: row['social status'] || studentData.profile.socialStatus,
        speciallyAble: row['specially able'] || studentData.profile.speciallyAble,
        
        address: {
          meridian: row['address meridian'] || studentData.profile.address.meridian,
          street: row['address street'] || studentData.profile.address.street,
          landmark: row['address landmark'] || studentData.profile.address.landmark,
          village: row['address village'] || studentData.profile.address.village,
          mandal: row['address mandal'] || studentData.profile.address.mandal,
          district: row['address district'] || studentData.profile.address.district,
          state: row['address state'] || studentData.profile.address.state,
          pin: row['address pin'] || studentData.profile.address.pin,
        },
        contact: {
          studentPhone: row['student phone'] || studentData.profile.contact.studentPhone,
          fatherPhone: row['father phone'] || studentData.profile.contact.fatherPhone,
          motherPhone: row['mother phone'] || studentData.profile.contact.motherPhone,
          email: row['email'] || studentData.profile.contact.email,
        },
        family: {
          ...studentData.profile.family,
          fatherName: row['father name'] || studentData.profile.family.fatherName,
          motherName: row['mother name'] || studentData.profile.family.motherName,
          rationCard: row['ration card'] || studentData.profile.family.rationCard,
        },
        interest: {
          ...studentData.profile.interest,
          whyInterested: row['why interested'] || studentData.profile.interest.whyInterested,
          statusInSchool: row['status in school'] || studentData.profile.interest.statusInSchool,
          availableTrades: row['available trades'] || studentData.profile.interest.availableTrades,
          firstTrade: row['first trade'] || studentData.profile.interest.firstTrade,
        },
        photoUrl: row['photo url'] || `https://picsum.photos/seed/${studentId}/300/300`
      };

      bulkData[studentId] = studentData;
    });

    // Helper to get normalized rows for a specific student from a sheet
    const getRowsForStudent = (sheetNameMatch: string, id: string): any[] => {
      const actualSheetName = findSheetName(workbook, sheetNameMatch);
      if (!actualSheetName) return [];
      
      const sheet = workbook.Sheets[actualSheetName];
      const rows = XLSX.utils.sheet_to_json(sheet) as any[];
      
      return rows.map(normalizeRowKeys).filter(r => {
         const rowId = r['student id'] || r['id'];
         // Strict string check
         return rowId && String(rowId).toLowerCase().trim() === id;
      });
    };

    // Populate other data for each student found
    Object.keys(bulkData).forEach(studentId => {
      const data = bulkData[studentId];

      // 2. Observations
      const obsRows = getRowsForStudent('Observations', studentId);
      if (obsRows.length > 0) {
        const row = obsRows[0];
        data.observations = {
          strength: (row['strengths'] || "").split(',').map((s: string) => s.trim()).filter(Boolean),
          specialty: row['specialty'] || "",
          expectations: (row['expectations'] || "").split(',').map((s: string) => s.trim()).filter(Boolean),
          qualities: (row['qualities'] || "").split(',').map((s: string) => s.trim()).filter(Boolean),
        };
      }

      // 3. Activity Logs
      const mapActivity = (r: any, i: number): ActivityLogItem => ({
        slNo: r['sl no'] || i + 1,
        name: r['activity name'] || "Untitled",
        dateTime: r['date time'] || "",
        contribution: r['contribution'] || "",
        skillLearnt: r['skill learnt'] || "",
        problemsFaced: r['problems faced'] || "",
        attemptsToSolve: r['attempts to solve'] || "",
        support: r['support'] || ""
      });

      data.rolePlays = getRowsForStudent('RolePlays', studentId).map(mapActivity);
      data.charts = getRowsForStudent('Charts', studentId).map(mapActivity);
      data.models = getRowsForStudent('Models', studentId).map(mapActivity);

      // 4. Guest Lectures
      data.guestLectures = getRowsForStudent('GuestLectures', studentId).map((r, i) => ({
        slNo: r['sl no'] || i + 1,
        name: r['speaker name'] || "",
        designation: r['designation'] || "",
        topic: r['topic'] || "",
        date: r['date'] || "",
        skillLearnt: r['skill learnt'] || ""
      }));

      // 5. Assessment
      data.assessment = getRowsForStudent('Assessment', studentId).map((r, i) => ({
        slNo: r['sl no'] || i + 1,
        criteria: r['criteria'] || "",
        maxMarks: 10,
        obtained: Number(r['obtained (0-2)']) || 0
      }));

      // 6. Achievements
      data.achievements = getRowsForStudent('Achievements', studentId)
        .map(r => r['achievement'])
        .filter(Boolean);

      // 7. Conclusion
      const conclRows = getRowsForStudent('Conclusion', studentId);
      if (conclRows.length > 0) {
        data.conclusion = conclRows[0]['conclusion text'] || data.conclusion;
      }
    });

    console.log("Parsed Data Result:", bulkData);
    return bulkData;

  } catch (error) {
    console.error("Excel Parse Error details:", error);
    throw error;
  }
};

export const downloadTemplate = () => {
  if (!XLSX || !XLSX.utils) {
    console.error("XLSX library not available");
    alert("Excel library not loaded. Please refresh the page.");
    return;
  }
  
  const wb = XLSX.utils.book_new();

  // 1. Profile Template (Multi-row example)
  const profileData = [
    {
      'Student ID': 'chaitanya',
      'Student Name': 'Chaitanya',
      'Trade Name': 'Electronics',
      'School Name': 'Govt High School',
      'VTP Name': 'SkillTree',
      'Trade Sector': 'Electronics',
      'Course Name': 'Field Technician',
      'Duration': '2 Years',
      'Level': 'L4',
      'Medium': 'English',
      'Year of Study': '2024-2025',
      'Class No': '10',
      'Section': 'A',
      'Roll No': '24089',
      'Aadhar No': '1234-5678-9012',
      'Social Status': 'General',
      'Specially Able': 'No',
      'Address Meridian': 'North',
      'Address Street': 'Main St',
      'Address Landmark': 'Near Temple',
      'Address Village': 'Springfield',
      'Address Mandal': 'Central',
      'Address District': 'Capital',
      'Address State': 'AP',
      'Address PIN': '520001',
      'Student Phone': '9876543210',
      'Father Phone': '9876543211',
      'Mother Phone': '9876543212',
      'Email': 'student@school.com',
      'Father Name': 'Ramesh',
      'Mother Name': 'Sujata',
      'Ration Card': 'WAP123',
      'Why Interested': 'Interest in tech',
      'Status in School': 'Regular',
      'Available Trades': 'Elec, Auto',
      'First Trade': 'Elec',
      'Photo URL': ''
    },
    {
      'Student ID': 'priya',
      'Student Name': 'Priya Sharma',
      'Trade Name': 'Beauty & Wellness',
      'School Name': 'Govt Girls HS',
      'VTP Name': 'Glamour Skills',
      'Trade Sector': 'Beauty',
      'Course Name': 'Therapist',
      'Duration': '2 Years',
      'Level': 'L4',
      'Medium': 'English',
      'Year of Study': '2024-2025',
      'Class No': '10',
      'Section': 'B',
      'Roll No': '24102',
      'Aadhar No': '9876-5432-1098',
      'Social Status': 'OBC',
      'Specially Able': 'No',
      'Address Meridian': 'East',
      'Address Street': 'Market St',
      'Address Landmark': 'Near Library',
      'Address Village': 'Springfield',
      'Address Mandal': 'North',
      'Address District': 'Capital',
      'Address State': 'AP',
      'Address PIN': '520002',
      'Student Phone': '9988776655',
      'Father Phone': '9988776644',
      'Mother Phone': '9988776633',
      'Email': 'priya@school.com',
      'Father Name': 'Anil',
      'Mother Name': 'Meena',
      'Ration Card': 'WAP456',
      'Why Interested': 'Start a salon',
      'Status in School': 'Monitor',
      'Available Trades': 'Beauty, IT',
      'First Trade': 'Beauty',
      'Photo URL': ''
    }
  ];

  // 2. Observations Template
  const observationsData = [
    { 'Student ID': 'chaitanya', 'Strengths': 'Leader, Sports', 'Specialty': 'Soldering', 'Expectations': 'Discipline', 'Qualities': 'Honesty' },
    { 'Student ID': 'priya', 'Strengths': 'Cultural', 'Specialty': 'Makeup', 'Expectations': 'Creativity', 'Qualities': 'Patience' }
  ];

  // 3. Activities Templates
  const activityData = [
    { 'Student ID': 'chaitanya', 'Sl No': 1, 'Activity Name': 'Safety Drill', 'Date Time': '10-08-2024', 'Contribution': 'Leader', 'Skill Learnt': 'Safety', 'Problems Faced': 'None', 'Attempts to Solve': 'N/A', 'Support': 'Teacher' },
    { 'Student ID': 'priya', 'Sl No': 1, 'Activity Name': 'Client Care', 'Date Time': '12-09-2024', 'Contribution': 'Therapist', 'Skill Learnt': 'Service', 'Problems Faced': 'Shyness', 'Attempts to Solve': 'Practice', 'Support': 'Trainer' }
  ];

  // 4. Guest Lectures
  const guestData = [
    { 'Student ID': 'chaitanya', 'Sl No': 1, 'Speaker Name': 'Mr. Sharma', 'Designation': 'Engineer', 'Topic': 'IoT', 'Date': '12-11-2024', 'Skill Learnt': 'Tech Trends' }
  ];

  // 5. Assessment
  const assessmentData = [
    { 'Student ID': 'chaitanya', 'Sl No': 1, 'Criteria': 'Knowledge', 'Obtained (0-2)': 2 },
    { 'Student ID': 'chaitanya', 'Sl No': 2, 'Criteria': 'Creativity', 'Obtained (0-2)': 1 }
  ];

  // 6. Achievements
  const achievementsData = [
    { 'Student ID': 'chaitanya', 'Achievement': '1st Prize Science Fair' },
    { 'Student ID': 'priya', 'Achievement': 'Best Makeup Artist' }
  ];

  // 7. Conclusion
  const conclusionData = [
    { 'Student ID': 'chaitanya', 'Conclusion Text': 'I am confident in electronics.' },
    { 'Student ID': 'priya', 'Conclusion Text': 'I want to be a therapist.' }
  ];

  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(profileData), "Profile");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(observationsData), "Observations");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(activityData), "RolePlays");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(activityData), "Charts");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(activityData), "Models");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(guestData), "GuestLectures");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(assessmentData), "Assessment");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(achievementsData), "Achievements");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(conclusionData), "Conclusion");

  XLSX.writeFile(wb, "Student_Portfolio_Bulk_Template.xlsx");
};