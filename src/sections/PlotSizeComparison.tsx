"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Maximize2, Grid } from "lucide-react";

export default function PlotSizeComparison() {
  const plotTypes = [
    {
      size: "1,500 Sq. Ft.",
      dimensions: "30 x 50 ft",
      category: "Standard & Garden Facing",
      idealUsage: "Perfect for families looking to construct cozy, modern 3BHK duplex villas with double-story layouts.",
      buildFlexibility: "Accommodates spacious bedrooms, a modular kitchen, private car park, and a compact front sitout or green strip.",
      bestFor: "First-time home builders, mid-sized families, and investors targeting high-demand rental structures.",
      spaceComparison: "Provides a balanced footprint that optimizes backyard utility and minimizes maintenance costs.",
      icon: <Grid className="w-5 h-5 text-secondary-500" />,
    },
    {
      size: "2,100 Sq. Ft.",
      dimensions: "35 x 60 ft",
      category: "Boulevard Front & Corner",
      idealUsage: "Ideal for constructing luxury 4BHK or 5BHK independent bungalows with expansive setbacks.",
      buildFlexibility: "Allows for multi-car parking, double-height living rooms, servant quarters, and a private perimeter garden lawn.",
      bestFor: "Large families, luxury seekers, and those planning a grand permanent residence with custom architectural features.",
      spaceComparison: "Offers 40% more surface area, allowing larger room dimensions and enhanced natural light ventilation on all sides.",
      icon: <Maximize2 className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="plot-comparison" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans"
        >
          {plotTypes.map((plot, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(0.6, 20)}
              className="flex flex-col p-6 md:p-8 rounded-2xl border border-border-soft/80 bg-accent/20 shadow-sm relative overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-0 right-0 bg-primary-800 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-bl-xl">
                {plot.dimensions}
              </div>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="rounded-xl bg-white p-3 text-secondary-500 border border-border-soft/60 shadow-sm">
                  {plot.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary-800 leading-tight">
                    {plot.size}
                  </h3>
                  <span className="text-xs font-semibold text-secondary-500 uppercase tracking-wider block mt-0.5">
                    {plot.category}
                  </span>
                </div>
              </div>

              {/* Detail Blocks */}
              <div className="space-y-4 text-xs text-text-main/80 flex-1">
                <div className="border-b border-border-soft pb-3">
                  <h4 className="font-bold text-primary-800 uppercase tracking-wider text-[9px] mb-1">
                    Ideal Usage
                  </h4>
                  <p className="leading-relaxed">{plot.idealUsage}</p>
                </div>

                <div className="border-b border-border-soft pb-3">
                  <h4 className="font-bold text-primary-800 uppercase tracking-wider text-[9px] mb-1">
                    Construction Flexibility
                  </h4>
                  <p className="leading-relaxed">{plot.buildFlexibility}</p>
                </div>

                <div className="border-b border-border-soft pb-3">
                  <h4 className="font-bold text-primary-800 uppercase tracking-wider text-[9px] mb-1">
                    Best For
                  </h4>
                  <p className="leading-relaxed">{plot.bestFor}</p>
                </div>

                <div>
                  <h4 className="font-bold text-primary-800 uppercase tracking-wider text-[9px] mb-1">
                    Space Allocation
                  </h4>
                  <p className="leading-relaxed">{plot.spaceComparison}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
