"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Heart, Landmark, Compass, Key } from "lucide-react";

export default function PlotSelectionGuide() {
  const guides = [
    {
      id: "first-home",
      title: "First-Time Home Buyers",
      icon: <Heart className="w-5 h-5 text-secondary-500" />,
      recommendation: "1,500 Sq. Ft. Standard Plots",
      rationale: "Optimizes construction budgets while leaving ample room for a 3BHK duplex. The secure gated perimeter and planned internal asphalt lanes ensure a structured start for young families.",
    },
    {
      id: "investor",
      title: "Long-Term Investors",
      icon: <Landmark className="w-5 h-5 text-secondary-500" />,
      recommendation: "Plots Near the University Entrance",
      rationale: "Positions your asset near the upcoming Azim Premji University campus (1 km), offering excellent proximity to educational facilities in a growing corridor.",
    },
    {
      id: "family",
      title: "Spacious Family Villa Planning",
      icon: <Compass className="w-5 h-5 text-secondary-500" />,
      recommendation: "2,100 Sq. Ft. Corner or Park-Facing",
      rationale: "Offers the maximum design footprint, allowing a large 4BHK or 5BHK villa layout. Allows for corner ventilation, private lawns, multi-car parking space, and close access to community park greens.",
    },
    {
      id: "immediate",
      title: "Villa Construction Planning",
      icon: <Key className="w-5 h-5 text-secondary-500" />,
      recommendation: "Levelled Plots with Planned Utilities",
      rationale: "Choose plots with direct access to planned drainage connection points, electrical wiring nodes, and internal road alignments designed for villa construction.",
    },
  ];

  return (
    <Section id="plot-selection-guide" bg="white" py="lg" className="scroll-mt-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            Buyer Guidance
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-2xl md:text-3xl font-serif font-medium text-primary-800 leading-tight tracking-tight"
          >
            Which Plot Fit is Right for You?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-xs text-text-main/70 mt-3 leading-relaxed font-sans"
          >
            Match your long-term residential or investment goals with our specialized layout categories.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs"
        >
          {guides.map((guide) => (
            <motion.div
              key={guide.id}
              variants={fadeUp(0.6, 20)}
              className="flex flex-col text-left p-6 bg-accent/20 rounded-2xl border border-border-soft/60 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-white p-2.5 text-secondary-500 border border-border-soft/60 shadow-sm">
                  {guide.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-800">
                    {guide.title}
                  </h3>
                  <span className="text-[10px] font-bold text-secondary-600 block mt-0.5">
                    Recommended: {guide.recommendation}
                  </span>
                </div>
              </div>
              <p className="text-text-main/70 leading-relaxed">
                {guide.rationale}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
