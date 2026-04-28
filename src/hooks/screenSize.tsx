"use client";

import React, { useEffect, useState } from "react";

function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: screenWidth < 639,
    isTablet: screenWidth >= 640 && screenWidth <= 1200,
    isLaptop: screenWidth > 1024,
  };
}

export default useScreenSize;
