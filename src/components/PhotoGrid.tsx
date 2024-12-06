import React from 'react';
import { motion } from 'framer-motion';
import { Photo } from '../types';

interface PhotoGridProps {
  photos: Photo[];
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={photo.url}
            alt={photo.caption}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <p className="text-xs text-white line-clamp-2">{photo.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};