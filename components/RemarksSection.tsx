import React from 'react';
import { TeacherRemark } from '../types';
import { MessageSquareQuote, UserCircle } from 'lucide-react';

interface RemarksSectionProps {
  remarks: TeacherRemark[];
}

export const RemarksSection: React.FC<RemarksSectionProps> = ({ remarks }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <MessageSquareQuote className="w-6 h-6 mr-2 text-teal-600" />
        Teacher Remarks
      </h2>

      <div className="space-y-6">
        {remarks.map((remark) => (
          <div key={remark.id} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <UserCircle className="w-10 h-10 text-gray-300" />
            </div>
            <div className="flex-grow bg-teal-50 rounded-lg p-4 relative">
              <div className="absolute top-4 left-0 w-3 h-3 bg-teal-50 transform -translate-x-1/2 rotate-45 border-b border-l border-white/0"></div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800">{remark.teacher}</span>
                <span className="text-xs text-gray-500">{remark.date}</span>
              </div>
              
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full bg-white">
                  {remark.category}
                </span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed font-body">
                "{remark.comment}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};