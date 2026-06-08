"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "@/data/project-data";
import { LUXURY_EASE } from "@/lib/animations";

// 1. LUXURY PAGE ENTER LOADER
export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page resources load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.8, ease: LUXURY_EASE },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-accent w-full h-full font-sans select-none"
        >
          <div className="text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-500 block mb-2"
            >
              Vaikunthdham Presents
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: LUXURY_EASE }}
              className="text-3xl md:text-4xl font-serif font-bold text-primary-800 tracking-wide"
            >
              {projectData.projectName}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 1.0, ease: LUXURY_EASE }}
              className="mt-4 h-[1.5px] bg-secondary-400 w-16 mx-auto origin-center"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-2 text-xs text-text-main/50 font-medium tracking-wide uppercase"
            >
              Plotted Luxury In Bhopal
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 2. CARD PLACEHOLDER SKELETON
interface SkeletonProps {
  className?: string;
}

export function CardSkeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`rounded-2xl border border-border-soft bg-white p-6 space-y-4 animate-pulse ${className}`}>
      {/* Icon Circle */}
      <div className="w-12 h-12 rounded-xl bg-accent/60" />
      {/* Category line */}
      <div className="h-2 bg-accent/60 rounded w-1/4" />
      {/* Title */}
      <div className="h-4 bg-accent/60 rounded w-2/3" />
      {/* Body lines */}
      <div className="space-y-2 pt-2">
        <div className="h-3 bg-accent/40 rounded w-full" />
        <div className="h-3 bg-accent/40 rounded w-5/6" />
      </div>
    </div>
  );
}

// 3. TEXT PLACEHOLDER SKELETON
export function TextSkeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`space-y-3 animate-pulse ${className}`}>
      <div className="h-4 bg-accent/60 rounded w-1/3" />
      <div className="h-3 bg-accent/40 rounded w-full" />
      <div className="h-3 bg-accent/40 rounded w-5/6" />
      <div className="h-3 bg-accent/40 rounded w-4/5" />
    </div>
  );
}
export default PageLoader;
