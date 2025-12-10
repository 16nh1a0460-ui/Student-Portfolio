import React from 'react';
import { StudentProfile } from '../types';
import { User, Mail, MapPin, Phone, Calendar, Hash, ShieldAlert } from 'lucide-react';

interface ProfileCardProps {
  profile: StudentProfile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="bg-brand-600 h-32 w-full relative">
        <div className="absolute -bottom-16 left-6 md:left-10">
          <img 
            src={profile.photoUrl} 
            alt={profile.name} 
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-gray-200"
          />
        </div>
      </div>
      
      <div className="pt-20 pb-6 px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
            <p className="text-brand-600 font-medium text-lg">{profile.grade} • {profile.academicYear}</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center bg-brand-50 text-brand-700 px-4 py-2 rounded-full border border-brand-100">
             <Hash className="w-4 h-4 mr-2" />
             <span className="font-mono font-bold">{profile.id}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Date of Birth</p>
              <p className="font-medium text-gray-700">{profile.dob}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>
              <p className="font-medium text-gray-700">{profile.email}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Contact</p>
              <p className="font-medium text-gray-700">{profile.contact}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Address</p>
              <p className="font-medium text-gray-700">{profile.address}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <User className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Parent/Guardian</p>
              <p className="font-medium text-gray-700">{profile.parentName}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-red-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Emergency Contact</p>
              <p className="font-medium text-gray-700">{profile.emergencyContact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};