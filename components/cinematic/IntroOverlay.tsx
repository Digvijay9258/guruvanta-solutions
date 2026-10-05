'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show once per session for seamless browsing experience
    const hasSeen = sessionStorage.getItem('guruvanta_intro_seen');
    if (hasSeen) return;

    setShow(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            sessionStorage.setItem('guruvanta_intro_seen', 'true');
          }, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setShow(false);
    sessionStorage.setItem('guruvanta_intro_seen', 'true');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black text-white px-6 select-none cursor-pointer"
          onClick={handleSkip}
        >
          {/* Subtle noise/grid backdrop */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center relative z-10 max-w-lg"
          >
            {/* Wordmark Monogram */}
            <div className="w-12 h-12 mb-6 border border-white/20 rounded-sm flex items-center justify-center font-mono text-xs tracking-widest text-zinc-300">
              GST
            </div>

            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
              Guruvanta Solutions Technologies
            </div>

            <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-2">
              Business Technology. Connected. Intelligent.
            </h1>

            <p className="text-xs text-zinc-500 font-mono tracking-wider mb-8">
              INITIALIZING ARCHITECTURAL ARCHIVE
            </p>

            {/* Progress indicator */}
            <div className="w-64 h-[2px] bg-zinc-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="flex justify-between w-64 mt-2 text-[10px] font-mono text-zinc-600">
              <span>SYSTEM READY</span>
              <span>{progress}%</span>
            </div>
          </motion.div>

          <div className="absolute bottom-8 text-[10px] font-mono text-zinc-700 tracking-widest uppercase">
            Click anywhere to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
