"use client";
import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverScale, LUXURY_EASE } from "@/lib/animations";

export default function CommunityExperience() {
  return (
    <Section id="community-experience" bg="white" py="lg" className="scroll-mt-24">
      <Container>
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT SIDE GRAPHIC - IMAGE (5 cols) */}
          <motion.div
            variants={fadeUp(0.8)}
            className="lg:col-span-5 flex justify-center w-full order-last lg:order-first"
          >
            <motion.div
              whileHover={hoverScale}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border-soft bg-white p-2"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-121.jpeg"
                  alt="Completed asphalt roads and plantation corridors at Ivy Estate Bhopal"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-primary-950/80 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white text-left font-sans shadow-lg">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-300 block mb-0.5">
                    Broad Boulevards
                  </span>
                  <p className="text-xs text-primary-100 font-semibold leading-normal">
                    Completed asphalt roads and streetlights form the network of this community.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE CONTENT (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.span
              variants={fadeUp(0.6)}
              className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
            >
              The Neighborhood Vibe
            </motion.span>
            
            <motion.h2
              variants={fadeUp(0.7)}
              className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-5"
            >
              A Planned Gated Enclave for Daily Convenience
            </motion.h2>

            <motion.p
              variants={fadeUp(0.8)}
              className="text-sm text-text-main/80 leading-relaxed font-sans mb-6 max-w-2xl"
            >
              Living at Ivy Estate offers a secure, structured neighborhood layout that ensures privacy 
              while fostering a neighborly community. With 125 planned plots, the campus avoids overcrowding, 
              providing ample space for quiet morning strolls and children&apos;s evening play. 
              The grand entrance archway acts as a single access control point, staffed 24/7 to ensure peace of mind.
            </motion.p>

            <motion.p
              variants={fadeUp(0.85)}
              className="text-sm text-text-main/80 leading-relaxed font-sans mb-8 max-w-2xl"
            >
              Every internal lane is interconnected with paved pathways and lined with local tree plantations, 
              creating a scenic trail system within the secure perimeter boundary. Essential utilities like water 
              supply lines and underground storm drains are strategically built away from plot boundaries, 
              allowing homeowners to plan their house layouts with maximum design freedom.
            </motion.p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-4 border-t border-border-soft/60 pt-6 font-sans">
              <div>
                <h4 className="text-sm font-semibold text-primary-800">125 Selected Plots</h4>
                <p className="text-xs text-text-main/60 mt-1">Balanced density ensuring open air space for every villa.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary-800">Gated Campus Walls</h4>
                <p className="text-xs text-text-main/60 mt-1">Manned check-posts and complete concrete boundary walls.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
