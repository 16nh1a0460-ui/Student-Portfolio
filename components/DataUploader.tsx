import React, { useRef, useState } from 'react';
import { Upload, Download, FileSpreadsheet, Loader2, CheckCircle2 } from 'lucide-react';
import { parseExcelData, downloadTemplate } from '../utils/excelParser';
import { FullStudentData } from '../types';

interface DataUploaderProps {
  onDataLoaded: (data: FullStudentData) => void;
}

export const DataUploader: React.FC<DataUploaderProps> = ({ onDataLoaded }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setSuccess(false);
    try {
      const parsedData = await parseExcelData(file);
      onDataLoaded(parsedData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to parse excel", error);
      alert("Error parsing Excel file. Please ensure you are using the correct template.");
    } finally {
      setLoading(false);
      // Reset input so same file can be selected again if needed
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex items-center space-x-3">
      <input 
        type="file" 
        accept=".xlsx, .xls" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
      />
      
      <button 
        onClick={downloadTemplate}
        className="hidden md:flex items-center text-sm text-brand-600 hover:text-brand-800 font-medium px-3 py-2 rounded-md hover:bg-brand-50 transition-colors"
        title="Download Excel Template"
      >
        <Download className="w-4 h-4 mr-2" />
        Template
      </button>

      <button 
        onClick={triggerUpload}
        disabled={loading}
        className={`flex items-center px-4 py-2 rounded-lg shadow-sm text-sm font-semibold text-white transition-all
          ${success ? 'bg-green-500 hover:bg-green-600' : 'bg-brand-600 hover:bg-brand-700'}`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : success ? (
          <CheckCircle2 className="w-4 h-4 mr-2" />
        ) : (
          <Upload className="w-4 h-4 mr-2" />
        )}
        {loading ? 'Loading...' : success ? 'Loaded!' : 'Import Data'}
      </button>
    </div>
  );
};