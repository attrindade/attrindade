'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-brand-cyan/5 dark:bg-brand-cyan/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 dark:bg-brand-blue/10 blur-[100px]"
      />

      {/* Static Gradient Overlay for Cinematic Depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-editorial-black/[0.02] to-brand-blue/[0.02] dark:via-transparent dark:to-brand-blue/10" />
    </div>
  );
};
