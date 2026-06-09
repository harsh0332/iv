"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Maximize2, Grid, Layers } from "lucide-react";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";

export default function PlotSizeComparison() {
  const whatsappNumber = projectData.contact.whatsappUrl.includes("wa.me")
    ? projectData.contact.whatsappUrl.split("wa.me/")[1]?.split("?")[0]
    : "919893223331";
  const cleanNumber = (whatsappNumber || "919893223331").replace(/[^0-9]/g, "");

  const plotTypes = [
    {
      size: "1,500 Sq. Ft.",
      dimensions: "30 x 50 ft",
      category: "Primary Dimension",
      idealUsage: "Perfect for constructing cozy, modern 3BHK duplex villas with double-story layouts.",
      buildFlexibility: "Accommodates spacious bedrooms, a modular kitchen, private car park, and a compact front sitout or green strip.",
      bestFor: "First-time home builders, mid-sized families, and investors targeting high-demand rental structures.",
      spaceComparison: "Provides a balanced footprint that optimizes backyard utility and minimizes maintenance costs.",
      icon: <Grid className="w-5 h-5 text-secondary-500" />,
      whatsappUrl: `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
        "Hi, I am interested in the 1500 Sq. Ft. (30x50) plot size options at Ivy Estate Bhopal. Please share availability and pricing details."
      )}`,
    },
    {
      size: "2,100 Sq. Ft.",
      dimensions: "35 x 60 ft",
      category: "Primary Dimension",
      idealUsage: "Ideal for constructing luxury 4BHK or 5BHK independent bungalows with expansive setbacks.",
      buildFlexibility: "Allows for multi-car parking, double-height living rooms, servant quarters, and a private perimeter garden lawn.",
      bestFor: "Large families, luxury seekers, and those planning a grand permanent residence with custom architectural features.",
      spaceComparison: "Offers 40% more surface area, allowing larger room dimensions and enhanced natural light ventilation on all sides.",
      icon: <Maximize2 className="w-5 h-5 text-secondary-500" />,
      whatsappUrl: `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
        "Hi, I am interested in the 2100 Sq. Ft. (35x60) plot size options at Ivy Estate Bhopal. Please share availability and pricing details."
      )}`,
    },
    {
      size: "Odd & Custom Sizes",
      dimensions: "911 – 2,629 Sq. Ft.",
      category: "Variable Dimension",
      idealUsage: "Highly suited for custom architectural layouts, corner locations, or unique garden-oriented designs.",
      buildFlexibility: "Varies depending on specific plot dimensions (e.g. 25x38 up to 50x60 irreg). Offers unique zoning flexibilities.",
      bestFor: "Buyers looking for premium corner positions, larger premium plots, or compact layouts at key locations.",
      spaceComparison: "Provides a diverse selection of dimensions located at key layout turns and road junctions.",
      icon: <Layers className="w-5 h-5 text-secondary-500" />,
      whatsappUrl: `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
        "Hi, I am interested in the custom/odd-sized plot options (ranging from 911 to 2629 Sq. Ft.) at Ivy Estate Bhopal. Please share availability and pricing details."
      )}`,
    },
  ];

  return (
    <Section id="plot-comparison" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        {/* Availability Badge */}
        <div className="flex justify-center mb-8 font-sans">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
            </span>
            Inventory Status: 95 of 125 plots available
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans"
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

                <div className="pb-3">
                  <h4 className="font-bold text-primary-800 uppercase tracking-wider text-[9px] mb-1">
                    Space Allocation
                  </h4>
                  <p className="leading-relaxed">{plot.spaceComparison}</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 pt-4 border-t border-border-soft/60">
                <Button
                  variant="primary"
                  className="w-full text-xs py-2.5 justify-center"
                  onClick={() => window.open(plot.whatsappUrl, "_blank")}
                >
                  Enquire About {plot.size}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
