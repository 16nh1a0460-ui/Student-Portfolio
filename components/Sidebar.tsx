import React from 'react';
import { 
  LayoutDashboard, 
  UserCircle, 
  ClipboardCheck, 
  FileSpreadsheet, 
  BookOpen, 
  Award, 
  ScrollText,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const { logout, user } = useAuth();
  
  const menuItems = [
    { id: 'cover', label: 'Cover Page', icon: LayoutDashboard },
    { id: 'profile', label: 'Student Profile', icon: UserCircle },
    { id: 'observations', label: 'Observations', icon: ClipboardCheck },
    { id: 'activities', label: 'Activity Logs', icon: FileSpreadsheet },
    { id: 'guest', label: 'Guest Lectures', icon: BookOpen },
    { id: 'assessment', label: 'Assessment', icon: Award },
    { id: 'certificates', label: 'Certificates', icon: ScrollText },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Container */}
      <aside className={`fixed top-0 left-0 z-40 h-screen w-64 bg-slate-900 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
         <div className="h-16 flex items-center justify-center border-b border-slate-800">
            <h1 className="text-xl font-bold tracking-wider">EduFolio <span className="text-orange-500">.</span></h1>
         </div>

         <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-orange-600 text-white shadow-lg' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
         </nav>

         <div className="p-4 border-t border-slate-800 bg-slate-950">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                 <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-sm">
                    {user?.name.charAt(0)}
                 </div>
                 <div className="text-sm font-medium truncate w-24">
                    {user?.name}
                 </div>
              </div>
           </div>
           
           <button 
             onClick={logout}
             className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors text-sm"
           >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
           </button>
         </div>
      </aside>
    </>
  );
};