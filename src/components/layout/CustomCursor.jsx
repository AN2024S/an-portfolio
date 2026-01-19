import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    
    // دالة للتحقق مما إذا كان العنصر تحت المؤشر هو زر أو رابط
    const checkHover = (e) => {
      const target = e.target;
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', (e) => {
      moveCursor(e);
      checkHover(e);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 border border-accent rounded-full pointer-events-none z-[999] hidden md:block"
      animate={{ 
        x: position.x - (isHovering ? 24 : 16), 
        y: position.y - (isHovering ? 24 : 16),
        width: isHovering ? 48 : 32,
        height: isHovering ? 48 : 32,
        backgroundColor: isHovering ? "rgba(var(--accent-rgb), 0.15)" : "transparent",
        scale: isHovering ? 1.2 : 1
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
    />
  );
};

export default CustomCursor;