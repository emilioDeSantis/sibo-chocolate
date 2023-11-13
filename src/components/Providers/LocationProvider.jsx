import React, { createContext, useContext, useState } from 'react';

// Create a context for categories
export const LocationContext = createContext();

// Create a provider component
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('cr');

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use categories
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationContext');
  }
  return context;
};
