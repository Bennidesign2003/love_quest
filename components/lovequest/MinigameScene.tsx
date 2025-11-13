import React from 'react';
import { motion } from 'framer-motion';
import MemoryPairs from './minigames/MemoryPairs';
import BeerClink from './minigames/BeerClink';
import CandleLight from './minigames/CandleLight';
import PickleballRally from './minigames/PickleballRally';

export default function MinigameScene({ scene, onComplete }) {
  const renderMinigame = () => {
    switch (scene.minigame) {
      case 'memorypairs':
        return <MemoryPairs onComplete={onComplete} />;
      case 'beerclink':
        return <BeerClink onComplete={onComplete} />;
      case 'candlelight':
        return <CandleLight onComplete={onComplete} />;
      case 'pickleball':
        return <PickleballRally onComplete={onComplete} />;
      default:
        return <MemoryPairs onComplete={onComplete} />;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {scene.text && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-6"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-800 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block shadow-lg border border-pink-100">
            {scene.text}
          </p>
        </motion.div>
      )}
      {renderMinigame()}
    </motion.div>
  );
}