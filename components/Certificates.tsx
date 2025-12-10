import React from 'react';
import { VocationalProfile } from '../types';

interface CertificateProps {
  profile: VocationalProfile;
}

export const Certificates: React.FC<CertificateProps> = ({ profile }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      
      {/* Certificate Page */}
      <div className="bg-white p-12 shadow-lg border-4 border-double border-gray-200 relative">
        <div className="border border-gray-800 h-full p-8 flex flex-col justify-between">
           <div className="text-center">
             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2">
               To whomsoever it may concern
             </h2>
           </div>

           <div className="text-lg leading-loose text-justify font-serif text-gray-800">
             <p className="mb-4">
               This is to certify that <strong>{profile.studentName}</strong> (Student Roll Number: <strong>{profile.rollNo}</strong>) has prepared this Portfolio by himself / herself that supports his / her claim of competence acquired from learning and experience for the completion of certificate qualification under NSQF Andhra Pradesh at Secondary / Higher Secondary stage.
             </p>
             <p>
               Session year for example <strong>{profile.yearOfStudy}</strong> under the supervision of <strong>{profile.vtpName}</strong> (VTs Name).
             </p>
           </div>

           <div className="flex justify-between items-end mt-16 pt-8">
             <div className="text-center">
               <p className="font-bold border-t border-gray-400 pt-2 w-32 mx-auto">Signature</p>
               <p className="text-xs uppercase">Head of the school</p>
             </div>
             <div className="text-center">
               <p className="font-bold border-t border-gray-400 pt-2 w-32 mx-auto">Signature</p>
               <p className="text-xs uppercase">Vocational Trainer</p>
             </div>
           </div>
        </div>
      </div>

      {/* Acknowledgement Page */}
      <div className="bg-white p-12 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10 uppercase tracking-widest border-b pb-4">
            Acknowledgement
          </h2>
          
          <div className="prose font-serif text-gray-700 leading-relaxed italic">
             <p>
               I take this opportunity to express my deep sense of gratitude towards my <strong>(Name of the Vocational Teacher)</strong> for his guidance and encouragement during the preparation of my Portfolio. Without his effective planning and experience, it would not have been possible to successfully complete my portfolio within the stipulated time.
             </p>
             <br />
             <p>
               I would like to thank <strong>(Name of the Principal)</strong> for providing me on opportunity to undertake the course.
             </p>
             <br />
             <p>
               I would also like to thank all the teachers of my school for providing me with their much needed support.
             </p>
          </div>

          <div className="mt-16 pt-8">
             <div className="w-48 border-b border-gray-800 mb-2"></div>
             <p className="font-bold">Student Signature :</p>
             <div className="mt-4">
               <p>Student Name : <span>{profile.studentName}</span></p>
               <p>Roll Number : <span>{profile.rollNo}</span></p>
               <p>Class : <span>{profile.classNo}</span></p>
               <p>Section : <span>{profile.section}</span></p>
             </div>
          </div>
      </div>
    </div>
  );
};
