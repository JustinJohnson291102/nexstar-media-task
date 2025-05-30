import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center bg-white px-3 py-1.5 rounded-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-heading font-bold text-2xl md:text-3xl flex items-center">
        <motion.span 
          className="text-[#FF0000]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          NEX
        </motion.span>
        <motion.span 
          className="text-[#001B5E]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          STAR
        </motion.span>
        <motion.div 
          className="text-sm ml-1 text-gray-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          media & technologies
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logo;