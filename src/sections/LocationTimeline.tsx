"use client";

import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Clock } from "lucide-react";

export default function LocationTimeline() {
  // Sort distances numerically to build an accurate progressive timeline
  const sortedTimeline = [...projectData.distances].sort((a, b) => {
    const parseDist = (str: string) => {
      if (str.includes("within")) {
        return 0.5; // "within 1 km" is closest
      }
      const match = str.match(/([0-9.]+)\s*km/i);
      return match ? parseFloat(match[1]) : 999;
    };
    return parseDist(a.distance) - parseDist(b.distance);
  });

  return (
    <Section id="location-timeline" bg="white" py="lg" className="scroll-mt-24">
      <Container>
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block">
            Progressive Proximities
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight">
            Landmark Distance Timeline
          </h2>
          <p className="mt-2 text-xs text-text-main/50 font-sans font-medium flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-secondary-500" />
            <span>Estimated travel durations from the main entrance checkpoint</span>
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative w-full max-w-5xl mx-auto py-10 font-sans">
          
          {/* 1. DESKTOP HORIZONTAL TIMELINE */}
          <div className="hidden lg:block relative w-full h-48">
            {/* Base Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border-soft -translate-y-1/2 z-0" />
            
            {/* Timeline Nodes Grid */}
            <div className="absolute inset-0 flex justify-between items-center z-10">
              {sortedTimeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative flex flex-col items-center w-[140px]"
                  >
                    {/* Node Dot */}
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-luxury-gold shadow-sm hover:scale-125 hover:bg-primary-800 transition-all duration-200 z-10 cursor-pointer" />
                    
                    {/* Label (Alternating Top / Bottom to prevent collision) */}
                    <div
                      className={`absolute w-[180px] text-center ${
                        isEven ? "bottom-7 flex flex-col-reverse" : "top-7 flex flex-col"
                      }`}
                    >
                      {/* Place Name */}
                      <span className="text-xs font-bold text-primary-800 line-clamp-2 px-2 leading-tight">
                        {item.destination}
                      </span>
                      {/* Distance / Duration */}
                      <span className="text-[10px] font-semibold text-secondary-500 uppercase tracking-wide mb-1 mt-1">
                        {item.distance} ({item.duration})
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 2. MOBILE VERTICAL TIMELINE */}
          <div className="lg:hidden relative pl-8 pr-4 py-2 text-left">
            {/* Base Vertical Line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-[2px] bg-border-soft z-0" />
            
            <motion.div
              variants={staggerContainer(0.08, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="space-y-8"
            >
              {sortedTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp(0.5, 15)}
                  className="relative flex items-start gap-4"
                >
                  {/* Node Dot */}
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-luxury-gold shadow-sm z-10" />
                  
                  {/* Label Container */}
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-secondary-500 uppercase tracking-wide">
                      {item.distance} ({item.duration} drive)
                    </span>
                    <h4 className="text-sm font-bold text-primary-800 mt-0.5">
                      {item.destination}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
