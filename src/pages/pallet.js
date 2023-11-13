import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import copy from 'copy-to-clipboard';

// Soft clipping function using sigmoid
function sigmoid(t, x) {
  const k = 10; // steepness factor, adjust as needed
  return 1 / (1 + Math.exp(-k * (t - x)));
}


// function smoothStep(t, x) {
//     let tAdjusted = t - x;

//     let output = 1 / (1 + Math.exp(-10 * tAdjusted));

//     output = (output - 0.5) * 2;
//     if (output > 1) {
//         output = 1;
//     }
//     if (output < 0) {
//         output = 0;
//     }

//     return output;

// }


function customFunction(t, x) {
  // Sigmoid function applied to t
  let d = 1 / (1 + Math.exp(-t));

  // Calculate the difference between t and x
  let difference = Math.abs(t - x);

  // Determine how close x is to 0 or 1
  let closenessToEdge = Math.min(x, 1 - x);

  // Create a weight based on the difference and the closeness to 0 or 1
  let w = difference * closenessToEdge;
  w = w / (1 + w); // Normalize w to be between 0 and 1

  // Combine d and t using w as a weight
  let output = (1 - w) * t + w * d;

  return output;
}



function smoothStep(t, x) {

    let output = t

    if (output > 1) {
        output = 1;
    }
    if (output < 0) {
        output = 0;
    }

    return output;

}


const getContrastTextColor = (color) => {
  // If the color is in hexadecimal, you can convert it to RGB first
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgb = hexToRgb(color) || color; // assuming color is an object with r, g, b if not in hex
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? 'black' : 'white'; // return black if the color is light, else return white
};

const Colors = () => {
  const [colors, setColors] = useState([]);
  const [clickedColor, setClickedColor] = useState(null);
  const [clickedHsl, setClickedHsl] = useState(null);
  const [weight, setWeight] = useState(1);

  // Generate initial colors
  useEffect(() => {
    setColors(generateColors(25));
  }, []);

  // Add scroll listener for infinite scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [colors]);

  // Generate colors
  const generateColors = (count) => {
    let newColors = [];
    for (let i = 0; i < count; i++) {
      let color;
      if (clickedHsl) {
        // Vary HSL based on weight
        let [h, s, l] = clickedHsl;

        h += 360 * (Math.random() - 0.5) * (1 - weight); // vary hue
        s += (Math.random() - 0.5) * 2 * (1 - weight); // vary saturation
        l += (Math.random() - 0.5) * 2 * (1 - weight); // vary lightness

        // Ensure the values stay within the correct ranges using sigmoid
        h = h % 360;
        s = customFunction(s, clickedHsl[1]);
        l = customFunction(l, clickedHsl[2]);

        color = chroma.hsl(h, s, l).hex();
      } else {
        // Generate random HSL color
        color = chroma.hsl(Math.random() * 360, Math.random(), Math.random()).hex();
      }
      newColors.push({ color });

      // Gradually decrease weight here
      if (weight > 0) {
        setWeight(prevWeight => prevWeight - 0.001);
      }
    }
    return newColors;
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 0) {
      const newColors = generateColors(5);
      setColors([...colors, ...newColors]);
    }
  };

  const handleClick = (color) => {
    copy(color);
    setClickedColor(color);
    setClickedHsl(chroma(color).hsl());
    setWeight(1);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {colors.map(({ color }, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'white',
            width: '20%',
            aspectRatio: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            position: 'relative',
            padding: '0.3vw',
            color: getContrastTextColor(color)
          }}
          onClick={() => handleClick(color)}
        >
          <div 
            style={{
              backgroundColor: color,
              width: '100%',
              height: '100%',
              borderRadius: '2vw',
              textAlign: 'center',
              textTransform:'uppercase',
            }}
          >{color}</div>
        </div>
      ))}
    </div>
  );
};

export default Colors;
