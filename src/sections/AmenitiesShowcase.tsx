"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, LUXURY_EASE } from "@/lib/animations";
import { Home, Droplets, Activity, Milestone, Wrench, Zap, ShieldCheck, Trees, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home: Home,
  Droplets: Droplets,
  Activity: Activity,
  Milestone: Milestone,
  Wrench: Wrench,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Trees: Trees,
};

export default function AmenitiesShowcase() {
  return (
    <Section id="amenities-showcase" bg="ivory" py="lg" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-sans"
        >
          {projectData.amenities.map((amenity) => {
            const IconComponent = iconMap[amenity.icon] || Home;
            return (
              <motion.div
                key={amenity.id}
                variants={fadeUp(0.6, 20)}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: LUXURY_EASE } }}
                className="group relative flex flex-col justify-between p-6 md:p-8 bg-white rounded-2xl border border-border-soft/60 shadow-sm transition-all duration-300 hover:border-secondary-300 hover:shadow-md overflow-hidden"
              >
                {/* Decorative golden accent light behind icon on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-400/5 rounded-bl-full translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:scale-125" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="rounded-xl bg-accent p-3 text-primary-800 transition-colors duration-300 group-hover:bg-secondary-50 group-hover:text-secondary-600">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-text-main/50 bg-accent/40 px-2.5 py-1 rounded-full">
                      {amenity.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-serif font-medium text-primary-800 mb-2.5 tracking-tight">
                    {amenity.name}
                  </h3>
                  
                  <p className="text-sm text-text-main/70 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center text-xs font-semibold text-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Verified Campus Feature &rarr;
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
