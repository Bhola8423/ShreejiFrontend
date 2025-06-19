import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;