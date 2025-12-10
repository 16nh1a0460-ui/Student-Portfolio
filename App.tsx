import React from 'react';
import { MOCK_STUDENT_DATA } from './constants';
import { ProfileCard } from './components/ProfileCard';
import { AcademicSection } from './components/AcademicSection';
import { SkillsSection } from './components/SkillsSection';
import { AttendanceSection } from './components/AttendanceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { RemarksSection } from './components/RemarksSection';
import { AIBox } from './components/AIBox';
import { GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-12">
      {/* Navigation / Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-brand-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight">EduFolio</span>
            </div>
            <div className="flex items-center space-x-4">
               <div className="text-sm text-right hidden sm:block">
                 <p className="font-medium text-gray-900">Welcome, Admin</p>
                 <p className="text-xs text-gray-500">School Portal v2.5</p>
               </div>
               <img src="https://ui-avatars.com/api/?name=Admin+User&background=0284c7&color=fff" alt="User" className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Profile Section */}
        <div className="mb-8">
          <ProfileCard profile={MOCK_STUDENT_DATA.profile} />
        </div>

        {/* AI Insight Section */}
        <AIBox data={MOCK_STUDENT_DATA} />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Stats) */}
          <div className="lg:col-span-2 space-y-8">
            <AcademicSection grades={MOCK_STUDENT_DATA.grades} />
            <ProjectsSection projects={MOCK_STUDENT_DATA.projects} />
          </div>

          {/* Right Column (Sidebar Stats) */}
          <div className="space-y-8">
            <AttendanceSection attendance={MOCK_STUDENT_DATA.attendance} />
            <SkillsSection skills={MOCK_STUDENT_DATA.skills} />
            <RemarksSection remarks={MOCK_STUDENT_DATA.remarks} />
          </div>

        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm py-8">
        &copy; {new Date().getFullYear()} EduFolio School Systems. All rights reserved.
      </footer>
    </div>
  );
};

export default App;