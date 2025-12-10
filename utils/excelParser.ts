import * as XLSX from 'xlsx';
import { INITIAL_PORTFOLIO_DATA } from '../constants';

// Note: In a full implementation, we would map all the new fields.
// For now, we are keeping the type definitions aligned to prevent build errors
// while acknowledging that the Excel import logic needs a major overhaul to match 
// the complex PDF structure.

export const parseExcelData = async (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        // Check if XLSX is loaded correctly
        if (!XLSX || !XLSX.read) {
          throw new Error("XLSX library not loaded correctly");
        }
        
        const workbook = XLSX.read(data, { type: 'binary' });

        // For this demo, we simply resolve with the initial data 
        // because mapping the specific PDF fields from a generic excel is complex.
        console.log("Workbook loaded:", workbook.SheetNames);
        resolve(INITIAL_PORTFOLIO_DATA);

      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => reject(error);
    reader.readAsBinaryString(file);
  });
};

export const downloadTemplate = () => {
  if (!XLSX || !XLSX.utils) {
    console.error("XLSX library not available");
    return;
  }
  
  const wb = XLSX.utils.book_new();

  // Simple template placeholder
  const profileData = [{
    studentName: "Student Name",
    tradeName: "Trade",
    schoolName: "School"
  }];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(profileData), "Profile");

  XLSX.writeFile(wb, "Vocational_Portfolio_Template.xlsx");
};