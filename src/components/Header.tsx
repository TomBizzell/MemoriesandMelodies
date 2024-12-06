import React from 'react';
import { Music, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex space-x-2">
              <Camera className="h-6 sm:h-8 w-6 sm:w-8 text-purple-300" />
              <Music className="h-6 sm:h-8 w-6 sm:w-8 text-purple-300" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
              Memories & Melodies
            </h1>
          </div>
          <p className="text-purple-300 italic text-sm sm:text-base">Your life's soundtrack</p>
        </motion.div>
      </div>
    </header>
  );
};