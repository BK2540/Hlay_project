'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='hidden md:block fixed bottom-6 right-2 bg-[#2A2A21] rounded-2xl cursor-pointer'>
        {isVisible && (
        <div className='p-6' onClick={scrollToTop}>
        <Image src='/uparrow.png' alt='totop' width={20} height={20}/>
        </div>        
    )}
    </div>
  );
};

export default ScrollToTop;