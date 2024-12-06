import React from 'react';
import { motion } from 'framer-motion';
import { Music, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Song } from '../types';

interface SongListProps {
  songs: Song[];
}

export const SongList: React.FC<SongListProps> = ({ songs }) => {
  const navigate = useNavigate();

  const handleEnroll = (songId: string) => {
    console.log(`Enrolled song ${songId} in spaced repetition`);
    navigate('/spaced-repetition');
  };

  return (
    <div className="space-y-4 p-4 sm:p-6">
      {songs.map((song) => (
        <motion.div
          key={song.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 rounded-lg bg-gray-800 p-4 shadow-md hover:bg-gray-750 transition-colors"
        >
          {song.albumCover ? (
            <img
              src={song.albumCover}
              alt={`${song.title} album cover`}
              className="h-16 w-16 rounded-md object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-700">
              <Music className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-semibold text-white">{song.title}</h3>
              <p className="text-sm text-purple-300">{song.artist}</p>
            </div>
            <button
              onClick={() => handleEnroll(song.id)}
              className="flex items-center space-x-1 rounded-md bg-purple-600 px-3 py-1.5 text-sm text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 w-full sm:w-auto justify-center sm:justify-start"
            >
              <Brain className="h-4 w-4" />
              <span>Enroll</span>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};