import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PortfolioData } from '../types';
import { STUDENT_DATABASE } from '../constants';

interface DatabaseContextType {
  database: Record<string, PortfolioData>;
  updateDatabase: (newData: Record<string, PortfolioData>) => void;
  getStudentData: (id: string) => PortfolioData | undefined;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize with the static mock database from constants
  const [database, setDatabase] = useState<Record<string, PortfolioData>>(STUDENT_DATABASE);

  const updateDatabase = (newData: Record<string, PortfolioData>) => {
    setDatabase(prev => ({
      ...prev,
      ...newData
    }));
  };

  const getStudentData = (id: string) => {
    return database[id.toLowerCase()];
  };

  return (
    <DatabaseContext.Provider value={{ database, updateDatabase, getStudentData }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};