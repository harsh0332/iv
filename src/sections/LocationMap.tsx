"use client";

import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverScale, LUXURY_EASE } from "@/lib/animations";
import { Landmark, Compass, Navigation } from "lucide-react";

export default function LocationMap() {
  const routesInfo = [
    {
      title: "Outer Ring Road Junction",
      description: "Immediate connectivity to Bhopal's main bypass ring road corridor, linking all major entry/exit highways seamlessly.",
      icon: <Compass className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Vidisha Road Expressway",
      description: "Direct frontage and quick entry onto the main Vidisha Road, ensuring a rapid 15-minute commute to central Bhopal landmarks.",
      icon: <Navigation className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Educational & University Hub",
      description: "Sits right in the high-demand residential catchment zone, just 1 km from the developing Azim Premji University campus.",
      icon: <Landmark className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="location-map" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT SIDE CONTENT (5 cols) */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <motion.h3
              variants={fadeUp(0.6)}
              className="text-2xl font-serif font-medium text-primary-800 tracking-tight mb-6"
            >
              Strategically Placed Connectivity Nodes
            </motion.h3>

            <div className="space-y-6">
              {routesInfo.map((route, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(0.6)}
                  className="flex gap-4 items-start font-sans"
                >
                  <div className="flex-shrink-0 rounded-xl bg-accent p-3 text-secondary-500 border border-border-soft/60">
                    {route.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary-800 tracking-tight">
                      {route.title}
                    </h4>
                    <p className="mt-1 text-xs text-text-main/70 leading-relaxed">
                      {route.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE GRAPHIC MAP (7 cols) */}
          <motion.div
            variants={fadeUp(0.8)}
            className="lg:col-span-7 flex justify-center w-full"
          >
            <motion.div
              whileHover={hoverScale}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border-soft bg-white p-2"
            >
              {/* Outer Luxury Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/ivy-estate-images/ivy-estate-bhopal-layout-location-map.png"
                  alt="Official location map of Ivy Estate, Bhopal Mungalia Kot"
                  fill
                  sizes="(max-w-768px) 100vw, 55vw"
                  className="object-contain object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                />
                
                {/* RERA Overlay */}
                <div className="absolute top-4 right-4 z-10 bg-primary-950/80 backdrop-blur-sm border border-white/10 rounded px-2.5 py-1 text-[9px] font-mono text-white">
                  RERA Map ID: {projectData.reraNumber}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
