import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Timeline } from './components/Timeline';
import { Header } from './components/Header';
import { SpacedRepetitionTheory } from './components/SpacedRepetitionTheory';
import { timelineData } from './data/mockData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main className="border-t border-purple-800">
          <Routes>
            <Route path="/" element={<Timeline entries={timelineData} />} />
            <Route path="/spaced-repetition" element={<SpacedRepetitionTheory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;