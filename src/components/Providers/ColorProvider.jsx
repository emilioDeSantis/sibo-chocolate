// import { createContext, useContext, useEffect, useState } from 'react';

// const ColorContext = createContext();

// export function useColor() {
//   return useContext(ColorContext);
// }

// export function ColorProvider({ children }) {
//   const [color, setColor] = useState('#333333');
//   const [textColor, setTextColor] = useState('#ffffff');

//   useEffect(() => {

//     function isDarkerThan50(hexColor) {
//       // Convert the hex color to RGB (and potentially A)
//       const rgbaColor = hexToRgbA(hexColor);

//       // If the color has an alpha channel, factor it into the brightness calculation
//       // if (rgbaColor.a !== undefined) {
//       //   rgbaColor.r = (1 - rgbaColor.a) + rgbaColor.a * rgbaColor.r;
//       //   rgbaColor.g = (1 - rgbaColor.a) + rgbaColor.a * rgbaColor.g;
//       //   rgbaColor.b = (1 - rgbaColor.a) + rgbaColor.a * rgbaColor.b;
//       // }

//       // Calculate the brightness using the RGB color
//       const brightness =
//           (rgbaColor.r * 299 + rgbaColor.g * 587 + rgbaColor.b * 114) / 1000;

//       // Return true if the brightness is less than 128 (50% brightness)
//       return brightness < 128;
//     }

//     function hexToRgbA(hex) {
//       let c;
//       if (/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex)) {
//           c = hex.substring(1).split('');
//           if (c.length === 3 || c.length === 4) {
//               c = [c[0], c[0], c[1], c[1], c[2], c[2], c[3], c[3]];
//           }
//           c = '0x' + c.join('');
//           return {
//               r: (c >> 24) & 255,
//               g: (c >> 16) & 255,
//               b: (c >> 8) & 255,
//               a: (c & 255) / 255
//           };
//       }
//       throw new Error('Bad Hex');
//     }
    

//     if (isDarkerThan50(color)){
//       setTextColor('#ffffff');
//     } else {
//       setTextColor('#000000');
//     }

//   }, [color]);

//   const value = {
//     color,
//     setColor,
//     textColor,
//     setTextColor,
//   };

//   return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
// }


// components/ColorContext.js
import { createContext, useContext, useEffect, useState } from 'react';

export function isDarkerThan50(hexColor) {

  // Convert the hex color to RGB
  const rgbColor = hexToRgb(hexColor);

  if (!rgbColor) {
    console.log('hex to rbg didint work');
    return (false)
  }

  // Calculate the brightness using the RGB color
  const brightness =
      (rgbColor.r * 299 + rgbColor.g * 587 + rgbColor.b * 114) / 1000;

  // Return true if the brightness is less than 128 (50% brightness)
  return brightness < 128;
}


function hexToRgb(hex) {
  // get rid of teh alpha chanel
  const sixHex = hex.substring(0, 7);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sixHex);
  return result
      ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
      : null;
}

const ColorContext = createContext();

export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [color, setColor] = useState('#333333');
  const [textColor, setTextColor] = useState('#ffffff');

  useEffect(() => {


  if (isDarkerThan50(color)){
    setTextColor('#ffffff')
  } else (
    setTextColor('#000000')
  )

  },[color])

  const value = {
    color,
    setColor,
    textColor,
    setTextColor,
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}
