"use client";

import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverScale, LUXURY_EASE } from "@/lib/animations";
import { GraduationCap, FileText, Road, Shield, Droplets } from "lucide-react";

export default function WhyProject() {
  const sellingPoints = [
    {
      id: "university",
      title: "Azim Premji University Corridor",
      description: "Located just 1 km from the upcoming educational anchor campus, offering excellent academic convenience and proximity for faculty and students.",
      icon: <GraduationCap className="w-5 h-5 text-primary-800" />,
    },
    {
      id: "legal",
      title: "RERA-Approved Layout",
      description: "100% RERA-registered layout (No. P-OTH-17-1157) with cleared titles, offering a legally compliant and secure plotted development structure.",
      icon: <FileText className="w-5 h-5 text-primary-800" />,
    },
    {
      id: "roads",
      title: "Asphalt Infrastructure Progress",
      description: "High-spec double-lane main boulevard and wide internal roads are planned and currently under active construction, providing structured internal transit.",
      icon: <Road className="w-5 h-5 text-primary-800" />,
    },
    {
      id: "security",
      title: "Secure Gated Colony Bounds",
      description: "Manned security check-points, a grand entry archway, and complete reinforced boundary walls safeguard families and investments 24/7.",
      icon: <Shield className="w-5 h-5 text-primary-800" />,
    },
    {
      id: "utilities",
      title: "Designed Utility Layouts",
      description: "Designed to include underground electrical wiring nodes, central water storage provisions, and planned storm water drainage networks.",
      icon: <Droplets className="w-5 h-5 text-primary-800" />,
    },
  ];

  return (
    <Section id="overview" bg="ivory" py="lg" className="scroll-mt-24">
      <Container>
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT SIDE CONTENT (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.span
              variants={fadeUp(0.6)}
              className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
            >
              Investment & Living Merits
            </motion.span>
            
            <motion.h2
              variants={fadeUp(0.7)}
              className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-8"
            >
              Why This Residential Plot Opportunity Stands Out
            </motion.h2>

            {/* List of Selling Points */}
            <div className="space-y-6">
              {sellingPoints.map((point) => (
                <motion.div
                  key={point.id}
                  variants={fadeUp(0.6)}
                  className="flex gap-4 items-start font-sans"
                >
                  <div className="flex-shrink-0 rounded-xl bg-primary-100/60 p-3 text-primary-800">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary-800 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-main/75 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE GRAPHIC (5 cols) */}
          <motion.div
            variants={fadeUp(0.8)}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              whileHover={hoverScale}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border-soft bg-white p-2"
            >
              {/* Outer Luxury Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-121.jpeg"
                  alt="Developed internal roads at Ivy Estate Bhopal"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay brand badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-primary-950/80 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white text-left font-sans shadow-lg">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-300 block mb-0.5">
                    Actual Ground Photo
                  </span>
                  <p className="text-xs text-primary-100 font-semibold leading-normal">
                    Double-lane roads and streetlights in progress inside the campus.
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
