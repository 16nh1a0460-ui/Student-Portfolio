import React from 'react';
import { ActivityLogItem } from '../types';
import { FileText } from 'lucide-react';

interface ActivityLogProps {
  title: string;
  data: ActivityLogItem[];
  colorTheme?: 'blue' | 'green' | 'purple' | 'orange';
}

export const ActivityLog: React.FC<ActivityLogProps> = ({ title, data, colorTheme = 'blue' }) => {
  const themeColors = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8 animate-fade-in">
      <div className={`px-6 py-4 border-b border-gray-200 flex items-center ${themeColors[colorTheme]}`}>
        <FileText className="w-5 h-5 mr-2" />
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-600 font-semibold uppercase text-xs">
              <th className="px-4 py-3 border-r border-gray-200 text-center w-12">Sl No</th>
              <th className="px-4 py-3 border-r border-gray-200 w-48">Name of {title}</th>
              <th className="px-4 py-3 border-r border-gray-200 w-32">Date/Time</th>
              <th className="px-4 py-3 border-r border-gray-200">Contribution</th>
              <th className="px-4 py-3 border-r border-gray-200">Skill Learnt</th>
              <th className="px-4 py-3 border-r border-gray-200">Problems Faced</th>
              <th className="px-4 py-3 border-r border-gray-200">Attempts to Solve</th>
              <th className="px-4 py-3">Support</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-center border-r border-gray-100">{item.slNo}</td>
                  <td className="px-4 py-3 border-r border-gray-100 font-medium text-gray-900">{item.name}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-gray-500 whitespace-nowrap">{item.dateTime}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{item.contribution}</td>
                  <td className="px-4 py-3 border-r border-gray-100">{item.skillLearnt}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-red-500">{item.problemsFaced}</td>
                  <td className="px-4 py-3 border-r border-gray-100 text-green-600">{item.attemptsToSolve}</td>
                  <td className="px-4 py-3">{item.support}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-6 py-8 text-center text-gray-400 italic">
                  No records found.
                </td>
              </tr>
            )}
            
            {/* Empty rows filler to match the PDF look */}
            {Array.from({ length: Math.max(0, 5 - data.length) }).map((_, i) => (
               <tr key={`empty-${i}`} className="h-12">
                 <td className="border-r border-gray-100"></td>
                 <td className="border-r border-gray-100"></td>
                 <td className="border-r border-gray-100"></td>
                 <td className="border-r border-gray-100"></td>
                 <td className="border-r border-gray-100"></td>
                 <td className="border-r border-gray-100"></td>
                 <td className="border-r border-gray-100"></td>
                 <td></td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs text-gray-400 uppercase font-semibold">
          <span>Student Signature</span>
          <span>Vocational Trainer Signature</span>
          <span>Nodal Teacher / Principal Signature</span>
      </div>
    </div>
  );
};
