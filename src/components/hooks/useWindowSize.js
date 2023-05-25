import { useEffect, useState } from 'react';

const useWindowSize = () => {
  // This is the key change: We're providing some default values.
  const [windowSize, setWindowSize] = useState({
    width: process.browser ? window.innerWidth : 0, // default width
  });

  useEffect(() => {
    if (!process.browser) {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this is run on mount and unmount

  return windowSize;
};

export default useWindowSize;
