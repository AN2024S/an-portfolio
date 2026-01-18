import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  return (
    <motion.div 
      className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[999] hidden md:block"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
    />
  );
};

export default CustomCursor;