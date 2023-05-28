// components/ColorContext.js
import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [color, setColor] = useState('#D3E4B3');

  const value = {
    color,
    setColor,
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}
