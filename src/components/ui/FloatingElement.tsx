import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  delay = 0, 
  duration = 6 
}) => (
  <div 
    className="animate-float"
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    {children}
  </div>
);

export default FloatingElement;