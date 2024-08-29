import React, { createContext, useState } from 'react';

// Create a Context
export const AppContext = createContext();

// Create a Context Provider component
export function AppProvider({ children }) {
  
  const [isRefreshC,setIsRefershC]=useState(true);
  const handleRefresh = (status) => {
    setIsRefershC(status);
  };

  return (
    <AppContext.Provider value={{isRefreshC,handleRefresh }}>
      {children}
    </AppContext.Provider>
  );
}
