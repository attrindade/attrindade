'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={cn(
        'relative overflow-hidden rounded-[20px] bg-editorial-cream/80 border border-editorial-black/15 dark:bg-editorial-black/80 dark:border-editorial-cream/15 backdrop-blur-sm',
        className
      )}
    >
      <div className="relative z-10 h-full w-full p-6 lg:p-4 xl:p-6">
        {children}
      </div>
    </motion.div>
  );
};
