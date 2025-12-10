import React from 'react';
import { AttendanceRecord } from '../types';
import { CalendarCheck, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface AttendanceSectionProps {
  attendance: AttendanceRecord[];
}

export const AttendanceSection: React.FC<AttendanceSectionProps> = ({ attendance }) => {
  const totalPresent = attendance.reduce((acc, curr) => acc + curr.present, 0);
  const totalDays = attendance.reduce((acc, curr) => acc + curr.totalDays, 0);
  const totalAbsent = totalDays - totalPresent;
  const percentage = Math.round((totalPresent / totalDays) * 100);

  const pieData = [
    { name: 'Present', value: totalPresent },
    { name: 'Absent', value: totalAbsent },
  ];
  const COLORS = ['#10b981', '#ef4444'];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <CalendarCheck className="w-6 h-6 mr-2 text-green-600" />
          Attendance
        </h2>
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
          percentage >= 95 ? 'bg-green-100 text-green-700' :
          percentage >= 85 ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {percentage}% Overall
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Chart */}
        <div className="w-full lg:w-1/3 h-48 flex justify-center">
           <ResponsiveContainer width="100%" height="100%">
             <PieChart>
               <Pie
                 data={pieData}
                 cx="50%"
                 cy="50%"
                 innerRadius={40}
                 outerRadius={60}
                 fill="#8884d8"
                 paddingAngle={5}
                 dataKey="value"
               >
                 {pieData.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                 ))}
               </Pie>
               <Tooltip />
               <Legend verticalAlign="bottom" height={36}/>
             </PieChart>
           </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="w-full lg:w-2/3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 uppercase text-xs">
                <th className="text-left py-2 font-semibold">Month</th>
                <th className="text-center py-2 font-semibold">Total</th>
                <th className="text-center py-2 font-semibold">Present</th>
                <th className="text-center py-2 font-semibold">Absent</th>
                <th className="text-center py-2 font-semibold">Late</th>
                <th className="text-right py-2 font-semibold">%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {attendance.map((record, idx) => {
                const monthPct = Math.round((record.present / record.totalDays) * 100);
                return (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-3 font-medium text-gray-700">{record.month}</td>
                    <td className="py-3 text-center text-gray-600">{record.totalDays}</td>
                    <td className="py-3 text-center text-green-600 font-medium">{record.present}</td>
                    <td className="py-3 text-center text-red-500">{record.absent}</td>
                    <td className="py-3 text-center text-yellow-600">{record.late}</td>
                    <td className="py-3 text-right">
                       <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                         monthPct >= 95 ? 'text-green-700 bg-green-50' : 
                         monthPct >= 85 ? 'text-yellow-700 bg-yellow-50' : 
                         'text-red-700 bg-red-50'
                       }`}>
                         {monthPct}%
                       </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {percentage < 90 && (
         <div className="mt-4 flex items-center p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Attendance below 90%. Please submit absence notes to the office.</span>
         </div>
      )}
    </div>
  );
};