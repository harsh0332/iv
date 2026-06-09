"use client";

import React from "react";
import { Container, Section, Grid } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GraduationCap, School, Activity, Plane, Train, Milestone } from "lucide-react";

export default function LocationGrid() {
  // Sort distances numerically to show nearest first
  const sortedDistances = [...projectData.distances].sort((a, b) => {
    const parseDist = (str: string) => {
      if (str.includes("within")) {
        return 0.5; // "within 1 km" is closest
      }
      const match = str.match(/([0-9.]+)\s*km/i);
      return match ? parseFloat(match[1]) : 999;
    };
    return parseDist(a.distance) - parseDist(b.distance);
  });

  // Map icons and subtitles based on distance destination names
  const getProximityMeta = (dest: string) => {
    if (dest.includes("Azim Premji")) {
      return {
        icon: <GraduationCap className="w-5 h-5 text-primary-800" />,
        label: "Higher Education Zone",
      };
    }
    if (dest.includes("Guru Gobind")) {
      return {
        icon: <School className="w-5 h-5 text-primary-800" />,
        label: "Reputed Primary School",
      };
    }
    if (dest.includes("Silver City")) {
      return {
        icon: <Activity className="w-5 h-5 text-primary-800" />,
        label: "Emergency Healthcare Support",
      };
    }
    if (dest.includes("Bhopal Main")) {
      return {
        icon: <Train className="w-5 h-5 text-primary-800" />,
        label: "Central Train Junction",
      };
    }
    if (dest.includes("Airport")) {
      return {
        icon: <Plane className="w-5 h-5 text-primary-800" />,
        label: "Bhopal Domestic Terminal",
      };
    }
    return {
      icon: <Milestone className="w-5 h-5 text-primary-800" />,
      label: "Transit Terminal Hub",
    };
  };

  return (
    <Section id="location-grid" bg="ivory" py="lg" className="scroll-mt-24">
      <Container>
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block">
            Proximity Indexes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight">
            Connected To What Matters
          </h2>
        </div>

        {/* Connectivity Cards Grid */}
        <motion.div
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
        >
          <Grid cols={3}>
            {sortedDistances.map((item, i) => {
              const meta = getProximityMeta(item.destination);
              return (
                <motion.div
                  key={i}
                  variants={fadeUp(0.6)}
                  className="rounded-2xl border border-border-soft/60 bg-white p-6 text-left flex gap-4 items-start shadow-sm font-sans hover:shadow-md transition-shadow duration-300 relative group"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-secondary-400 group-hover:w-full transition-all duration-300 rounded-t-2xl" />
                  <div className="flex-shrink-0 rounded-xl bg-primary-50 p-3 text-primary-800">
                    {meta.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-500">
                      {meta.label}
                    </span>
                    <h3 className="text-sm font-semibold text-primary-800 mt-1 line-clamp-1">
                      {item.destination}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-lg font-bold text-luxury-gold tracking-tight">
                        {item.distance}
                      </span>
                      <span className="text-xs text-text-main/50 font-medium">
                        ({item.duration} drive)
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
