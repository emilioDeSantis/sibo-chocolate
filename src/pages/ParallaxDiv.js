
// import React, { useEffect, useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';


// const ParallaxDiv = ({children, scrollSpeed, marginTop, fadeInThreshold, fadeOutThreshold}) => {
//     const [scrollOffset, setScrollOffset] = useState(0);
//     const [vwToPixels, setVwToPixels] = useState(0);

//     useEffect(() => {
//         setVwToPixels({
//             fadeIn: fadeInThreshold? fadeInThreshold * (window.innerWidth / 100) : -1000,
//             fadeOut: fadeOutThreshold? fadeOutThreshold * (window.innerWidth / 100) : 1000000
//         });
//         console.log(window.innerWidth);
//     }, [fadeInThreshold, fadeOutThreshold]);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollOffset(window.pageYOffset);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);


//     const [{ springScrollOffset }, setSpring] = useSpring(() => ({ springScrollOffset: 0 }));

//     setSpring({ springScrollOffset: scrollOffset });

//     const style = {
//         position: 'fixed',
//         transform: springScrollOffset.to(value => `translateY(${-value * scrollSpeed}px)`),
//         marginTop: marginTop,
//         willChange: 'transform opacity',
//         transition: 'opacity 1.2s ease-in-out',
//         opacity: springScrollOffset.to(value => {
//             if (value >= vwToPixels.fadeIn && value <= vwToPixels.fadeOut) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         }),
//     };

//     return (
//         <animated.div style={style}>
//             {children}
//         </animated.div>
//     );
// }

// export default ParallaxDiv;

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ParallaxDiv = ({ children, scrollSpeed, marginTop, fadeInThreshold, fadeOutThreshold }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [vwToPixels, setVwToPixels] = useState({
    fadeIn: -1000,
    fadeOut: 1000000
  });

  useEffect(() => {
    const updateVwToPixels = () => {
      setVwToPixels({
        fadeIn: fadeInThreshold ? fadeInThreshold * (window.innerWidth / 100) : -1000,
        fadeOut: fadeOutThreshold ? fadeOutThreshold * (window.innerWidth / 100) : 1000000
      });
    };

    // Initial setup
    updateVwToPixels();

    // Update on window resize
    const handleResize = () => {
      updateVwToPixels();
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fadeInThreshold, fadeOutThreshold]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [{ springScrollOffset }, setSpring] = useSpring(() => ({ springScrollOffset: 0 }));

  useEffect(() => {
    setSpring({ springScrollOffset: scrollOffset });
  }, [scrollOffset, setSpring]);

  const style = {
    position: 'fixed',
    transform: springScrollOffset.to(value => `translateY(${-value * scrollSpeed}px)`),
    marginTop: marginTop,
    willChange: 'transform opacity',
    transition: 'opacity 1.2s ease-in-out',
    opacity: springScrollOffset.to(value => {
      if (value >= vwToPixels.fadeIn && value <= vwToPixels.fadeOut) {
        return 1;
      } else {
        return 0;
      }
    }),
  };

  return (
    <animated.div style={style}>
      {children}
    </animated.div>
  );
};

export default ParallaxDiv;
