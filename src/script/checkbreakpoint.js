'use client'
import React, { useEffect, useState } from 'react';

const getBreakpoint = () => {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  };

  const width = window.innerWidth;

  if (width < breakpoints.sm) {
    return 'sm';
  } else if (width < breakpoints.md) {
    return 'md';
  } else if (width < breakpoints.lg) {
    return 'lg';
  } else if (width < breakpoints.xl) {
    return 'xl';
  } else {
    return '2xl';
  }
};

const checkBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(getBreakpoint);

  const handleResize = () => {
    setCurrentBreakpoint(getBreakpoint());
  };

  useEffect(() => {
    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentBreakpoint;
};

export default checkBreakpoint;