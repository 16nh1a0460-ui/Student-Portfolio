import React from 'react';
import { SubjectGrade } from '../types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AcademicSectionProps {
  grades: SubjectGrade[];
}

export const AcademicSection: React.FC<AcademicSectionProps> = ({ grades }) => {
  const chartData = grades.map(g => ({
    name: g.subject.split(' ')[0], // Shorten name for chart
    Score: g.term3 || g.term2 || g.term1 // Current score approximation
  }));

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-brand-600" />
          Academic Performance
        </h2>
        <span className="text-sm text-gray-500 mt-2 md:mt-0">Current Term: Term 3</span>
      </div>

      <div className="p-6">
        <div className="mb-8 h-64 w-full">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
               <XAxis dataKey="name" tick={{fill: '#6b7280', fontSize: 12}} axisLine={false} tickLine={false} />
               <YAxis tick={{fill: '#6b7280', fontSize: 12}} axisLine={false} tickLine={false} />
               <Tooltip 
                 contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                 cursor={{fill: '#f3f4f6'}}
               />
               <Bar dataKey="Score" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={40} />
             </BarChart>
           </ResponsiveContainer>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-3 font-semibold">Subject</th>
                <th className="px-6 py-3 font-semibold">Teacher</th>
                <th className="px-4 py-3 text-center">T1</th>
                <th className="px-4 py-3 text-center">T2</th>
                <th className="px-4 py-3 text-center">T3</th>
                <th className="px-4 py-3 text-center">T4</th>
                <th className="px-4 py-3 text-center">Final</th>
                <th className="px-6 py-3">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {grades.map((grade, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{grade.subject}</td>
                  <td className="px-6 py-4 text-gray-600">{grade.teacher}</td>
                  <td className="px-4 py-4 text-center font-mono text-gray-700">{grade.term1}</td>
                  <td className="px-4 py-4 text-center font-mono text-gray-700">{grade.term2}</td>
                  <td className="px-4 py-4 text-center font-mono font-bold text-brand-700 bg-brand-50 rounded-lg">{grade.term3}</td>
                  <td className="px-4 py-4 text-center text-gray-400">{grade.term4 ?? '-'}</td>
                  <td className="px-4 py-4 text-center font-bold text-gray-900">{grade.final ?? '-'}</td>
                  <td className="px-6 py-4 text-gray-600 italic border-l border-gray-50">{grade.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};