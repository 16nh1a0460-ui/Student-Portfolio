import React from 'react';
import { Project } from '../types';
import { FolderGit2, CheckCircle } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <FolderGit2 className="w-6 h-6 mr-2 text-indigo-600" />
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                {project.score}
              </span>
            </div>
            
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-3">{project.subject}</p>
            
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.skillsUsed.map((skill, idx) => (
                <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center text-xs text-gray-400">
              <CheckCircle className="w-3 h-3 mr-1" />
              Completed on {project.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};