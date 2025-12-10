import React from 'react';
import { Observation } from '../types';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

interface ObservationSheetProps {
  observations: Observation;
}

export const ObservationSheet: React.FC<ObservationSheetProps> = ({ observations }) => {
  const strengthsList = [
    "School Leader", "Class Representative", "Section Leader", 
    "Subject Leader", "Team Leader", "Group Leader", 
    "Team Member", "Group Member", "NCC Rank Holder", 
    "NSS Rank Holder", "Sports Person", "Cultural Wing"
  ];

  const expectationsList = [
    "Regularity", "Discipline", "Listening Skills", "Writing Skills", 
    "Drawing Skills", "Hard-work", "SMART Work", "Speaking Skills",
    "Reasoning Skills", "Arithmetic Skills", "Presentation Skills",
    "Participation", "Creativity", "Team Work", "Stage Activeness", 
    "Language / Vocabulary Skills", "Subject (Theory + Practicals)", 
    "Health Consciousness", "Self Motivation", "Responsibility", 
    "Green / Environment Skills", "Computer & Technical Skills", 
    "Job Related Skills", "Class Teacher Guidance", 
    "Vocational Teacher Guidance", "Career Guidance"
  ];

  const renderChecklist = (items: string[], selected: string[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, idx) => {
        const isSelected = selected.includes(item);
        return (
          <div key={idx} className={`flex items-center p-3 rounded-lg border transition-all ${isSelected ? 'bg-indigo-50 border-indigo-200' : 'bg-gray-50 border-transparent opacity-60'}`}>
            <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${isSelected ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-300'}`}>
              {isSelected && <CheckCircle2 className="w-3 h-3 text-white" />}
            </div>
            <span className={`text-sm ${isSelected ? 'font-medium text-indigo-900' : 'text-gray-500'}`}>{item}</span>
          </div>
        )
      })}
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-10 animate-fade-in">
      <div className="flex items-center border-b pb-4 mb-6">
        <ClipboardList className="w-6 h-6 mr-3 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Class Teacher Observations</h2>
      </div>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-50 p-2 rounded-md border-l-4 border-indigo-500">The Student Status in the School</h3>
        {renderChecklist(strengthsList, observations.strength)}
      </section>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-50 p-2 rounded-md border-l-4 border-indigo-500">The Student Specialty</h3>
        <div className="p-4 border border-dashed border-gray-300 rounded-lg bg-yellow-50 text-gray-700 italic">
          "{observations.specialty}"
        </div>
      </section>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-50 p-2 rounded-md border-l-4 border-indigo-500">Class Teacher Expects from the student</h3>
        {renderChecklist(expectationsList, observations.expectations)}
      </section>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-50 p-2 rounded-md border-l-4 border-indigo-500">Qualities providing advantage</h3>
        <p className="text-sm text-gray-500 mb-4">(Honesty / Courage / Braveness / Attitude / Any other)</p>
        <div className="flex flex-wrap gap-2">
           {observations.qualities.map((q, i) => (
             <span key={i} className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-full font-medium text-sm">
               {q}
             </span>
           ))}
        </div>
      </section>
      
      <div className="pt-10 flex justify-between items-end border-t border-gray-100 mt-10">
         <div className="text-center">
            <div className="w-32 h-10 border-b border-gray-400 mb-2"></div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Student Signature</p>
         </div>
         <div className="text-center">
            <div className="w-32 h-10 border-b border-gray-400 mb-2"></div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Class Teacher Signature</p>
         </div>
         <div className="text-center">
            <div className="w-32 h-10 border-b border-gray-400 mb-2"></div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Vocational Trainer Signature</p>
         </div>
      </div>
    </div>
  );
};
