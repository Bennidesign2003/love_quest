import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import SceneBackground from './SceneBackground';

export default function ChoiceScene({ scene, onChoice }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100 relative overflow-hidden">
        {/* Background */}
        <SceneBackground background={scene.background} />

        {/* Question */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12 relative z-10"
        >
          <div className="inline-block mb-4">
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            "Decision Time"
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed px-4">
            {scene.text}
          </p>
        </motion.div>

        {/* Choices */}
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              onClick={() => onChoice('a')}
              className="w-full h-auto py-8 px-6 bg-gradient-to-br from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-xl md:text-2xl font-medium relative z-10">
                {scene.a}
              </span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              onClick={() => onChoice('b')}
              className="w-full h-auto py-8 px-6 bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-xl md:text-2xl font-medium relative z-10">
                {scene.b}
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex justify-center gap-4 mt-8 relative z-10"
        >
          <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
          <Heart className="w-8 h-8 text-red-400 fill-red-400" />
          <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}