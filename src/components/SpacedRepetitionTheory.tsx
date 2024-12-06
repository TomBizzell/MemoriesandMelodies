import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Repeat, Music, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SpacedRepetitionTheory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="mb-6 sm:mb-8 inline-flex items-center text-purple-400 hover:text-purple-300">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Timeline
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 sm:space-y-8 rounded-lg bg-gray-800 p-4 sm:p-8"
        >
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Spaced Repetition & Musical Memories</h1>
            <p className="mt-2 text-purple-300">Enhance your memory through the power of music</p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-700 p-4 sm:p-6">
              <div className="mb-4 flex items-center">
                <Brain className="mr-2 h-5 sm:h-6 w-5 sm:w-6 text-purple-400" />
                <h2 className="text-lg sm:text-xl font-semibold text-white">How It Works</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Spaced repetition is a learning technique that involves reviewing information at gradually increasing intervals. 
                When paired with music, it creates powerful emotional anchors for your memories.
              </p>
            </div>

            <div className="rounded-lg bg-gray-700 p-4 sm:p-6">
              <div className="mb-4 flex items-center">
                <Music className="mr-2 h-5 sm:h-6 w-5 sm:w-6 text-purple-400" />
                <h2 className="text-lg sm:text-xl font-semibold text-white">Music & Memory</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Music has a unique ability to trigger vivid memories and emotions. By deliberately associating songs with 
                specific memories, you create stronger neural connections.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 rounded-lg bg-gray-700 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">The Process</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="mr-3 mt-1 h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-white">Initial Association</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    When you enroll a song, we'll help you consciously connect it with the photos and memories from that time period.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Repeat className="mr-3 mt-1 h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-white">Review Schedule</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    You'll receive prompts to revisit these memories at optimized intervals: 1 day, 5 days, 25 days, and 4 months.
                    Each review strengthens the connection between the song and your memories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-purple-900/50 p-4 sm:p-6">
            <h2 className="mb-4 text-lg sm:text-xl font-semibold text-white">Benefits</h2>
            <ul className="list-inside list-disc space-y-2 text-sm sm:text-base text-purple-200">
              <li>Stronger and more vivid memories of important moments</li>
              <li>Enhanced emotional connection to your personal history</li>
              <li>Better long-term memory retention</li>
              <li>A more meaningful relationship with your music collection</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};