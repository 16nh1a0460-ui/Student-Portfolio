import React from 'react';
import { VocationalProfile } from '../types';
import { User, School, MapPin, Phone, Users } from 'lucide-react';

interface VocationalProfileProps {
  profile: VocationalProfile;
}

const FieldGroup = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col border-b border-gray-100 pb-2">
    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</span>
    <span className="text-sm font-medium text-gray-800">{value || "-"}</span>
  </div>
);

export const VocationalProfileComponent: React.FC<VocationalProfileProps> = ({ profile }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Vocational Student Details</h2>
          <p className="text-gray-500 text-sm">Complete profile as per admission records</p>
        </div>
        <div className="h-20 w-20 bg-gray-200 rounded-md border-2 border-dashed border-gray-400 flex items-center justify-center overflow-hidden">
            {profile.photoUrl ? (
                <img src={profile.photoUrl} alt="Student" className="w-full h-full object-cover" />
            ) : (
                <User className="text-gray-400" />
            )}
        </div>
      </div>

      {/* Academic Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center">
           <School className="w-4 h-4 mr-2 text-indigo-600" />
           <h3 className="font-semibold text-gray-700">Academic Information</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <FieldGroup label="Trade / Sector" value={profile.tradeSector} />
           <FieldGroup label="Course Name" value={profile.courseName} />
           <FieldGroup label="Level / Job Role" value={profile.level} />
           <FieldGroup label="Duration" value={profile.duration} />
           <FieldGroup label="Medium" value={profile.medium} />
           <FieldGroup label="Year of Study" value={profile.yearOfStudy} />
           <FieldGroup label="Class No" value={profile.classNo} />
           <FieldGroup label="Section" value={profile.section} />
           <FieldGroup label="Roll No" value={profile.rollNo} />
        </div>
      </div>

      {/* Personal Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center">
           <User className="w-4 h-4 mr-2 text-indigo-600" />
           <h3 className="font-semibold text-gray-700">Personal Information</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <FieldGroup label="Full Name" value={profile.studentName} />
              <FieldGroup label="Aadhar Number" value={profile.aadhar} />
              <FieldGroup label="Social Status" value={profile.socialStatus} />
              <FieldGroup label="Specially Able" value={profile.speciallyAble} />
           </div>
           
           <div className="md:col-span-3 border-t border-gray-100 pt-4">
             <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-3 h-3 mr-1" /> Address Details
             </h4>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FieldGroup label="Meridian Name" value={profile.address.meridian} />
                <FieldGroup label="Street" value={profile.address.street} />
                <FieldGroup label="Landmark" value={profile.address.landmark} />
                <FieldGroup label="Village" value={profile.address.village} />
                <FieldGroup label="Mandal" value={profile.address.mandal} />
                <FieldGroup label="District" value={profile.address.district} />
                <FieldGroup label="State" value={profile.address.state} />
                <FieldGroup label="PIN" value={profile.address.pin} />
             </div>
           </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center">
           <Users className="w-4 h-4 mr-2 text-indigo-600" />
           <h3 className="font-semibold text-gray-700">Family Details</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
             <FieldGroup label="Father Name" value={profile.family.fatherName} />
             <FieldGroup label="Mother Name" value={profile.family.motherName} />
             <FieldGroup label="Ration Card No" value={profile.family.rationCard} />
          </div>
          
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
             <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                   <th className="px-4 py-2 text-left border-r border-gray-200">Relation</th>
                   <th className="px-4 py-2 text-left border-r border-gray-200">Name</th>
                   <th className="px-4 py-2 text-left">Occupation</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
                {profile.family.members.map((member, idx) => (
                  <tr key={idx}>
                     <td className="px-4 py-2 border-r border-gray-100">{member.relation}</td>
                     <td className="px-4 py-2 border-r border-gray-100">{member.name}</td>
                     <td className="px-4 py-2">{member.occupation}</td>
                  </tr>
                ))}
             </tbody>
          </table>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center">
           <Phone className="w-4 h-4 mr-2 text-indigo-600" />
           <h3 className="font-semibold text-gray-700">Contact Information</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <FieldGroup label="Student Mobile" value={profile.contact.studentPhone} />
           <FieldGroup label="Father Mobile" value={profile.contact.fatherPhone} />
           <FieldGroup label="Mother Mobile" value={profile.contact.motherPhone} />
           <FieldGroup label="Student Email" value={profile.contact.email} />
        </div>
      </div>

    </div>
  );
};
