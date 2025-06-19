import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (end === 0) return;
    
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < end) {
          return Math.min(prev + increment, end);
        }
        clearInterval(timer);
        return end;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return (
    <span>
      {prefix}{Math.floor(count)}{suffix}
    </span>
  );
};

export default AnimatedCounter;