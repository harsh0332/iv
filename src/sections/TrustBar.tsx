"use client";

import React from "react";
import { Container } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { ShieldCheck, MapPin, Landmark, Milestone, Trees } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function TrustBar() {
  const trustCards = [
    {
      id: "rera",
      title: "RERA Approved",
      value: projectData.reraNumber,
      icon: <ShieldCheck className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "location",
      title: "Prime Location",
      value: "Mungalia Kot, Bhopal",
      icon: <MapPin className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "plots",
      title: "10-Acre Campus",
      value: "125 Residential Plots",
      icon: <Milestone className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "loans",
      title: "Loan Assistance",
      value: "Loan Assistance Available",
      icon: <Landmark className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "infra",
      title: "Layout Features",
      value: "Planned Asphalt Roads",
      icon: <Trees className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <section className="relative z-10 w-full bg-white border-b border-border-soft/60 py-6 font-sans">
      <Container>
        {/* Horizontal scroll on mobile, flex grid on desktop */}
        <motion.div
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="flex overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-none gap-6 px-4 -mx-4 lg:px-0 lg:mx-0 lg:grid lg:grid-cols-5"
        >
          {trustCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp(0.5, 12)}
              className="flex-shrink-0 w-[240px] sm:w-[280px] lg:w-auto snap-center flex items-center gap-3.5 bg-accent/30 lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none border border-border-soft/40 lg:border-none last:border-r"
            >
              <div className="flex-shrink-0 rounded-xl bg-accent p-3 text-secondary-600">
                {card.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-500">
                  {card.title}
                </span>
                <span className="text-sm font-semibold text-primary-800 tracking-tight mt-0.5 whitespace-nowrap">
                  {card.value}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
