import React, { createContext, useContext, useState } from 'react';

// Create the context
const BagContext = createContext();

// Create the provider
export function BagProvider({ children }) {
  const [bagUpdate, setBagUpdate] = useState(false);

  const triggerBagUpdate = () => {
    setBagUpdate(!bagUpdate);
  };

  return (
    <BagContext.Provider value={{ bagUpdate, triggerBagUpdate }}>
      {children}
    </BagContext.Provider>
  );
}

// Create a custom hook that shortcuts the process of calling useContext
export function useBagUpdate() {
  return useContext(BagContext);
}
