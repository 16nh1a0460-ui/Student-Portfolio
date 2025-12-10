import React from 'react';
import { AssessmentItem } from '../types';
import { BookOpenCheck } from 'lucide-react';

interface AssessmentSheetProps {
  assessment: AssessmentItem[];
}

export const AssessmentSheet: React.FC<AssessmentSheetProps> = ({ assessment }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto animate-fade-in relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-xl"></div>
      
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-2">Assessment Period</h2>
        <div className="flex justify-center space-x-2 text-sm text-gray-500 font-mono">
           <span>From: _________</span>
           <span>To: _________</span>
        </div>
        <p className="mt-4 text-xs bg-yellow-50 text-yellow-800 inline-block px-3 py-1 rounded border border-yellow-200">
           Note: Please tick below whichever is applicable. Max Marks: 10
        </p>
      </div>

      <div className="overflow-hidden border border-gray-300 rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-300">
               <th className="px-4 py-4 border-r border-gray-300 w-16 text-center">Sl No</th>
               <th className="px-4 py-4 border-r border-gray-300">Criteria</th>
               <th className="px-4 py-4 border-r border-gray-300 w-20 text-center bg-red-50">0</th>
               <th className="px-4 py-4 border-r border-gray-300 w-20 text-center bg-yellow-50">1</th>
               <th className="px-4 py-4 w-20 text-center bg-green-50">2</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
             {assessment.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                   <td className="px-4 py-4 border-r border-gray-300 text-center font-medium">{item.slNo}</td>
                   <td className="px-4 py-4 border-r border-gray-300 text-gray-700">{item.criteria}</td>
                   <td className="px-4 py-4 border-r border-gray-300 text-center bg-red-50/30">
                     <div className={`w-6 h-6 rounded-full border border-gray-300 mx-auto ${item.obtained === 0 ? 'bg-red-500 border-red-600 shadow-inner' : ''}`}></div>
                   </td>
                   <td className="px-4 py-4 border-r border-gray-300 text-center bg-yellow-50/30">
                     <div className={`w-6 h-6 rounded-full border border-gray-300 mx-auto ${item.obtained === 1 ? 'bg-yellow-400 border-yellow-500 shadow-inner' : ''}`}></div>
                   </td>
                   <td className="px-4 py-4 text-center bg-green-50/30">
                     <div className={`w-6 h-6 rounded-full border border-gray-300 mx-auto ${item.obtained === 2 ? 'bg-green-500 border-green-600 shadow-inner' : ''}`}></div>
                   </td>
                </tr>
             ))}
          </tbody>
          <tfoot>
             <tr className="bg-gray-50 font-bold">
               <td colSpan={2} className="px-4 py-3 text-right text-gray-600 border-r border-gray-300">Total Score</td>
               <td colSpan={3} className="px-4 py-3 text-center text-indigo-600 text-lg">
                  {assessment.reduce((acc, curr) => acc + curr.obtained, 0)} / {assessment.length * 2}
               </td>
             </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-6 text-xs text-gray-500 space-y-1">
         <p>2 = Exceeds Performance Standards</p>
         <p>1 = Achieved Performance Standards</p>
         <p>0 = No Progress</p>
      </div>

      <div className="mt-10 pt-10 border-t border-gray-200">
         <h3 className="text-xl font-bold mb-4 flex items-center">
            <BookOpenCheck className="w-5 h-5 mr-2" />
            Conclusion
         </h3>
         <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 min-h-[100px] text-gray-700 italic">
            "Here the student will write his / her option about the activities performed by them. This component can be also taken to provide the marks for writing skills"
         </div>
      </div>
    </div>
  );
};
