import React, { useState, useEffect } from 'react';
import { STUDENT_DATABASE, INITIAL_PORTFOLIO_DATA } from './constants';
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
import { LoginPage } from './components/LoginPage';
import { AIBox } from './components/AIBox';

// Internal Layout Component that handles the authenticated view
const DashboardLayout: React.FC = () => {
  const { user } = useAuth();
  const [data, setData] = useState<PortfolioData>(INITIAL_PORTFOLIO_DATA);
  const [activeTab, setActiveTab] = useState('cover');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load user specific data when user changes
  useEffect(() => {
    if (user && STUDENT_DATABASE[user.username]) {
      setData(STUDENT_DATABASE[user.username]);
    }
  }, [user]);

  const handleDataLoad = (newData: any) => {
     console.log("Data loaded", newData);
     alert("Data upload simulated. In a real app, this would update your profile.");
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
      <AppContent />
    </AuthProvider>
  );
};

export default App;