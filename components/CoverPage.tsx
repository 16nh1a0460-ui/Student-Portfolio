import React from 'react';
import { VocationalProfile } from '../types';

interface CoverPageProps {
  profile: VocationalProfile;
}

export const CoverPage: React.FC<CoverPageProps> = ({ profile }) => {
  return (
    <div className="bg-white min-h-[800px] shadow-lg rounded-xl p-8 md:p-16 flex flex-col items-center justify-between border border-gray-200 relative overflow-hidden">
      {/* Background Watermark Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="w-96 h-96 rounded-full bg-green-500 blur-3xl -ml-20"></div>
      </div>

      <div className="w-full relative z-10 text-center space-y-8">
        {/* Header Logos */}
        <div className="flex justify-between items-start w-full border-b-2 border-orange-500 pb-6 mb-8">
           <div className="text-center">
             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-gray-300">
               <span className="text-xs font-bold text-gray-400">NCERT LOGO</span>
             </div>
             <p className="font-bold text-xs uppercase tracking-widest text-gray-600">NCERT</p>
           </div>
           
           <div className="text-center">
              <h1 className="text-6xl font-black text-gray-200 tracking-tighter">25</h1>
              <p className="text-[10px] text-gray-400 uppercase">Years of Excellence</p>
           </div>

           <div className="text-center">
             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-gray-300">
               <span className="text-xs font-bold text-gray-400">PSSCIVE LOGO</span>
             </div>
             <p className="font-bold text-xs uppercase tracking-widest text-gray-600">PSSCIVE BHOPAL</p>
           </div>
        </div>

        {/* Skill India Middle Section */}
        <div className="flex justify-center items-center space-x-8 py-8">
           <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">Skill India</div>
              <div className="text-sm text-gray-500">कौशल भारत - कुशल भारत</div>
           </div>
           <div className="h-12 w-px bg-gray-300"></div>
           <div className="text-center">
              <div className="text-xl font-bold text-gray-800">N S D C</div>
              <div className="text-sm font-semibold text-gray-600">National Skill Development Corporation</div>
              <div className="text-xs text-gray-500 italic">Transforming the skill landscape</div>
           </div>
        </div>

        {/* Main Title */}
        <div className="py-12">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-gray-500 to-green-600 uppercase tracking-widest drop-shadow-sm">
            Student Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-light">Vocational Education & Training</p>
        </div>

        {/* Student Details Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-lg shadow-sm max-w-2xl mx-auto w-full text-left space-y-6">
          <div className="grid grid-cols-3 gap-4 items-center border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-medium uppercase text-sm">Student Name</span>
            <span className="col-span-2 text-2xl font-bold text-gray-800 font-serif">{profile.studentName}</span>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-medium uppercase text-sm">Trade Name</span>
            <span className="col-span-2 text-xl font-semibold text-gray-700">{profile.tradeName}</span>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-medium uppercase text-sm">School Name</span>
            <span className="col-span-2 text-lg text-gray-700">{profile.schoolName}</span>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="text-gray-500 font-medium uppercase text-sm">VTP Name</span>
            <span className="col-span-2 text-lg text-gray-700">{profile.vtpName}</span>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="w-full mt-12 flex items-center justify-center space-x-4 border-t pt-6 border-gray-200">
        <div className="text-center">
           <h3 className="text-lg font-bold text-gray-800">Samagra Shiksha</h3>
           <p className="text-xs text-gray-500">Department of School Education and Literacy</p>
           <p className="text-xs text-gray-500">Ministry of Education, Government of India</p>
        </div>
      </div>
    </div>
  );
};
