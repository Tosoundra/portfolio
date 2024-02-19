import { useLayoutEffect, useState } from 'react';

export const useCalculateDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width < 768);
  const [isTabled, setIsTablet] = useState(width >= 768 && width < 1024);

  const calculateDimensions = () => {
    const newWidth = window.innerWidth;

    setWidth(newWidth);
    setIsMobile(newWidth < 768);
    setIsTablet(newWidth >= 768 && newWidth < 1024);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', calculateDimensions);
    return () => {
      window.removeEventListener('resize', calculateDimensions);
    };
  }, [isMobile, isTabled]);

  return { isMobile, isTabled };
};
