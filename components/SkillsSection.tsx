import React from 'react';
import { Skill } from '../types';
import { Award, Medal, Palette, Trophy, Star } from 'lucide-react';

interface SkillsSectionProps {
  skills: Skill[];
}

const IconMap: Record<string, React.ReactNode> = {
  'star': <Star className="w-5 h-5" />,
  'medal': <Medal className="w-5 h-5" />,
  'palette': <Palette className="w-5 h-5" />,
  'trophy': <Trophy className="w-5 h-5" />,
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Award className="w-6 h-6 mr-2 text-yellow-500" />
        Skills & Achievements
      </h2>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow border border-gray-100">
            <div className={`flex-shrink-0 p-3 rounded-full mr-4 ${
              skill.category === 'Sports' ? 'bg-orange-100 text-orange-600' :
              skill.category === 'Arts' ? 'bg-purple-100 text-purple-600' :
              skill.category === 'Leadership' ? 'bg-blue-100 text-blue-600' :
              'bg-yellow-100 text-yellow-600'
            }`}>
              {IconMap[skill.icon] || <Star />}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-800">{skill.category}</h3>
                <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">{skill.date}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{skill.description}</p>
              <p className="text-xs text-gray-400 mt-1 flex items-center">
                Verified by: <span className="font-medium text-gray-500 ml-1">{skill.verifiedBy}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};