import React, { useState, useEffect } from 'react';
import { INITIAL_PORTFOLIO_DATA } from './constants';
import { PortfolioData } from './types';
import { Sidebar } from './components/Sidebar';
import { CoverPage } from './components/CoverPage';
import { VocationalProfileComponent } from './components/VocationalProfile';
import { ObservationSheet } from './components/ObservationSheet';
import { ActivityLog } from './components/ActivityLog';
import { AssessmentSheet } from './components/AssessmentSheet';
import { Certificates } from './components/Certificates';
import { DataUploader } from './components/DataUploader';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DatabaseProvider, useDatabase } from './contexts/DatabaseContext';
import { LoginPage } from './components/LoginPage';
import { AIBox } from './components/AIBox';

// Internal Layout Component that handles the authenticated view
const DashboardLayout: React.FC = () => {
  const { user } = useAuth();
  const { getStudentData, updateDatabase } = useDatabase();
  const [data, setData] = useState<PortfolioData>(INITIAL_PORTFOLIO_DATA);
  const [activeTab, setActiveTab] = useState('cover');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load user specific data when user changes or database updates
  useEffect(() => {
    if (user) {
      const studentData = getStudentData(user.username);
      if (studentData) {
        setData(studentData);
      }
    }
  }, [user, getStudentData]); // Depend on getStudentData to react to context updates

  const handleDataLoad = (newDatabaseMap: Record<string, PortfolioData>) => {
     console.log("Bulk Data received in App:", newDatabaseMap);
     
     if (!user) return;

     const userKey = user.username.toLowerCase().trim();
     const loadedKeys = Object.keys(newDatabaseMap);
     
     // 1. Try Exact Match
     if (newDatabaseMap[userKey]) {
        updateDatabase(newDatabaseMap);
        setData(newDatabaseMap[userKey]);
        alert(`Success! Updated portfolio for '${user.username}'.`);
        return;
     }

     // 2. If no exact match, try to find a profile with matching Name
     const matchingKeyByName = loadedKeys.find(key => {
        const profile = newDatabaseMap[key];
        return profile.profile.studentName.toLowerCase().includes(userKey) || 
               user.name.toLowerCase().includes(profile.profile.studentName.toLowerCase());
     });

     if (matchingKeyByName) {
        if (window.confirm(`Your ID '${userKey}' wasn't found, but we found a profile for '${newDatabaseMap[matchingKeyByName].profile.studentName}'. Do you want to load this data?`)) {
           // Map this data to the current user's ID
           const mappedData = { ...newDatabaseMap, [userKey]: newDatabaseMap[matchingKeyByName] };
           updateDatabase(mappedData);
           setData(newDatabaseMap[matchingKeyByName]);
           return;
        }
     }

     // 3. Fallback: If strict match fails, offer to load the first one.
     if (loadedKeys.length > 0) {
        const firstKey = loadedKeys[0];
        const firstProfile = newDatabaseMap[firstKey];
        const confirmMsg = `Strict match failed.\n\nLogged in as: '${userKey}'\nFile contains IDs: ${loadedKeys.join(', ')}\n\nDo you want to FORCE load the data from ID '${firstKey}' (${firstProfile.profile.studentName}) into your profile?`;
        
        if (window.confirm(confirmMsg)) {
           // Create a new map where we explicitly set the current user's data to this loaded data
           const forcedData = {
              ...newDatabaseMap,
              [userKey]: {
                 ...firstProfile,
                 // Keep original data structure
              }
           };
           updateDatabase(forcedData);
           setData(firstProfile);
           alert("Data loaded successfully via manual override.");
        } else {
           // Update database anyway in case they want to log in as the other user later
           updateDatabase(newDatabaseMap);
           alert("Database updated with file content, but your current view was not changed.");
        }
     } else {
        alert("No valid student profiles found in the uploaded file.");
     }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'cover':
        return <CoverPage profile={data.profile} />;
      case 'profile':
        return (
          <div className="space-y-6">
             <AIBox data={data} />
             <VocationalProfileComponent profile={data.profile} />
          </div>
        );
      case 'observations':
        return <ObservationSheet observations={data.observations} />;
      case 'activities':
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Practical Activities Log</h2>
            <ActivityLog title="Role Plays" data={data.rolePlays} colorTheme="blue" />
            <ActivityLog title="Charts Prepared" data={data.charts} colorTheme="purple" />
            <ActivityLog title="Models Prepared" data={data.models} colorTheme="orange" />
          </div>
        );
      case 'guest':
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Guest Lectures</h2>
             {data.guestLectures.map((lecture, idx) => (
               <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
                  <div className="flex justify-between items-start">
                     <div>
                       <h3 className="text-xl font-bold text-indigo-700">{lecture.topic}</h3>
                       <p className="text-gray-600">By {lecture.name}, <span className="italic text-gray-500">{lecture.designation}</span></p>
                     </div>
                     <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm">{lecture.date}</span>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded border border-gray-100">
                     <p className="text-sm text-gray-500 uppercase font-bold mb-1">Key Learning:</p>
                     <p className="text-gray-800">{lecture.skillLearnt}</p>
                  </div>
               </div>
             ))}
          </div>
        );
      case 'assessment':
        return <AssessmentSheet assessment={data.assessment} />;
      case 'certificates':
        return <Certificates profile={data.profile} />;
      default:
        return <CoverPage profile={data.profile} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      <div className="flex-1 md:ml-64 transition-all duration-300">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-30">
           <div className="ml-10 md:ml-0 font-medium text-gray-500">
              Portfolio / <span className="text-gray-900 font-bold capitalize">{activeTab.replace('-', ' ')}</span>
           </div>
           
           <div className="flex items-center space-x-3">
              <div className="scale-90 origin-right">
                <DataUploader onDataLoaded={handleDataLoad} />
              </div>
           </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 md:p-8 max-w-6xl mx-auto">
           {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Main App Component managing Auth State
const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <DashboardLayout /> : <LoginPage />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <AppContent />
      </DatabaseProvider>
    </AuthProvider>
  );
};

export default App;