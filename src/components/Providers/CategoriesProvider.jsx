import React, { createContext, useContext, useState } from 'react';

// Create a context for categories
export const CategoriesContext = createContext();

// Create a provider component
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

// Custom hook to use categories
export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};
