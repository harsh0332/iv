"use client";

import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverScale, LUXURY_EASE } from "@/lib/animations";
import { ShieldCheck, TrendingUp, Landmark, MapPin } from "lucide-react";

export default function WhyNorthBhopal() {
  const drivers = [
    {
      id: "edu",
      title: "Educational Catalyst",
      desc: "The upcoming Azim Premji University campus just 1 km away acts as a major institutional anchor, offering excellent educational proximity for the region.",
      icon: <Landmark className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "road",
      title: "Arterial Infrastructure",
      desc: "Positioned directly at the junction of Vidisha Road and the new Bhopal Outer Ring Road bypass, providing rapid connectivity across all city zones.",
      icon: <MapPin className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "growth",
      title: "Growth Corridor",
      desc: "North Bhopal is witnessing public road expansions, making it a growing residential layout zone.",
      icon: <TrendingUp className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "safety",
      title: "Legal Compliance",
      desc: "Unlike local plotted societies, Ivy Estate is a RERA-compliant gated community layout with planned utility networks and infrastructure in progress.",
      icon: <ShieldCheck className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="why-north-bhopal" bg="ivory" py="lg" className="scroll-mt-24">
      <Container>
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT SIDE CONTENT & GRID (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.span
              variants={fadeUp(0.6)}
              className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
            >
              Regional Growth Narrative
            </motion.span>
            
            <motion.h2
              variants={fadeUp(0.7)}
              className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-5"
            >
              Why North Bhopal is the Preferred Plot Investment
            </motion.h2>

            <motion.p
              variants={fadeUp(0.8)}
              className="text-sm text-text-main/80 leading-relaxed font-sans mb-10 max-w-2xl"
            >
              North Bhopal, particularly the Mungalia Kot corridor, is currently experiencing 
              developmental growth. The integration of the new Bhopal Outer Ring Road bypass 
              has established this corridor as a strategic link. Coupled with institutional anchors like 
              the upcoming Azim Premji University campus, this specific zone offers excellent accessibility 
              and connectivity. Plotted layouts like Ivy Estate represent a secure entry point for planning 
              your future residential villa.
            </motion.p>

            {/* Growth Drivers 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full font-sans">
              {drivers.map((driver) => (
                <motion.div
                  key={driver.id}
                  variants={fadeUp(0.6)}
                  className="flex flex-col text-left p-5 bg-white rounded-2xl border border-border-soft/60 shadow-sm"
                >
                  <div className="rounded-xl bg-accent p-2.5 text-secondary-500 w-10 h-10 flex items-center justify-center mb-4">
                    {driver.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-primary-800 tracking-tight">
                    {driver.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-text-main/70 leading-relaxed">
                    {driver.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE GRAPHIC (5 cols) */}
          <motion.div
            variants={fadeUp(0.8)}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <motion.div
              whileHover={hoverScale}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border-soft bg-white p-2"
            >
              {/* Outer Luxury Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-123.jpeg"
                  alt="Colony development landscaping at Ivy Estate Bhopal"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay brand badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-primary-950/80 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white text-left font-sans shadow-lg">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-300 block mb-0.5">
                    Landscaped Avenues
                  </span>
                  <p className="text-xs text-primary-100 font-semibold leading-normal">
                    Secure campus boundaries and landscaping are designed and in progress.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
export { projectData };
