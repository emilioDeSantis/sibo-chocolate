// components/ColorContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const ColorContext = createContext();

export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [color, setColor] = useState('#333333');
  const [textColor, setTextColor] = useState('#ffffff');

  useEffect(() => {

    function isDarkerThan50(hexColor) {
      // Convert the hex color to RGB
      const rgbColor = hexToRgb(hexColor);

      // Calculate the brightness using the RGB color
      const brightness =
          (rgbColor.r * 299 + rgbColor.g * 587 + rgbColor.b * 114) / 1000;

      // Return true if the brightness is less than 128 (50% brightness)
      return brightness < 128;
  }

  function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
          ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
          : null;
  }
  if (isDarkerThan50(color)){
    setTextColor('#ffffff')
  } else (
    setTextColor('#000000')
  )
    document.body.style.backgroundColor = color;

  },[color])

  const value = {
    color,
    setColor,
    textColor,
    setTextColor,
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}
