import React, { useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { TimelineEntry } from '../types';
import { PhotoGrid } from './PhotoGrid';
import { SongList } from './SongList';

interface TimelineProps {
  entries: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  // Synchronize scrolling between panels
  useEffect(() => {
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;

    if (!leftPanel || !rightPanel) return;

    const handleScroll = (e: Event) => {
      const source = e.target as HTMLDivElement;
      const target = source === leftPanel ? rightPanel : leftPanel;
      target.scrollTop = source.scrollTop;
    };

    leftPanel.addEventListener('scroll', handleScroll);
    rightPanel.addEventListener('scroll', handleScroll);

    return () => {
      leftPanel.removeEventListener('scroll', handleScroll);
      rightPanel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 min-h-screen bg-gray-900">
      <div 
        ref={leftPanelRef}
        className="overflow-y-auto border-r border-purple-800 scroll-smooth"
      >
        {entries.map((entry) => (
          <div 
            key={`photos-${entry.date}`} 
            className="border-b border-purple-800"
            id={`photos-${entry.date}`}
          >
            <div className="sticky top-0 bg-gray-900/95 p-4 backdrop-blur-sm z-10">
              <h2 className="text-lg font-semibold text-purple-300">
                {format(new Date(entry.date), 'MMMM d, yyyy')}
              </h2>
            </div>
            <PhotoGrid photos={entry.photos} />
          </div>
        ))}
      </div>
      <div 
        ref={rightPanelRef}
        className="overflow-y-auto scroll-smooth"
      >
        {entries.map((entry) => (
          <div 
            key={`songs-${entry.date}`} 
            className="border-b border-purple-800"
            id={`songs-${entry.date}`}
          >
            <div className="sticky top-0 bg-gray-900/95 p-4 backdrop-blur-sm z-10">
              <h2 className="text-lg font-semibold text-purple-300">
                {format(new Date(entry.date), 'MMMM d, yyyy')}
              </h2>
            </div>
            <SongList songs={entry.songs} />
          </div>
        ))}
      </div>
    </div>
  );
};