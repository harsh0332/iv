"use client";
import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverScale, LUXURY_EASE } from "@/lib/animations";

export default function GreenLiving() {
  return (
    <Section id="green-living" bg="ivory" py="lg" className="scroll-mt-24">
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
              Natural Surroundings
            </motion.span>
            
            <motion.h2
              variants={fadeUp(0.7)}
              className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-5"
            >
              Healthy Environment and Open Spaces
            </motion.h2>

            <motion.p
              variants={fadeUp(0.8)}
              className="text-sm text-text-main/80 leading-relaxed font-sans mb-6 max-w-2xl"
            >
              At Ivy Estate, the development plan prioritizes open spacing to ensure a clean living environment. 
              The layout incorporates dedicated neighborhood parks, wide green pathways, and avenue tree plantations. 
              This natural buffer ensures fresh air flow and blocks out road noises, providing a tranquil haven 
              for your family&apos;s health and wellness.
            </motion.p>

            <motion.p
              variants={fadeUp(0.85)}
              className="text-sm text-text-main/80 leading-relaxed font-sans mb-8 max-w-2xl"
            >
              The natural topography has been preserved to facilitate natural drainage. Instead of relying solely 
              on heavy machinery, the layout aligns with the landscape to allow rainwater to flow cleanly into 
              paved storm drains. Coupled with underground sanitation piping, the colony remains hygienic and waterlog-free, 
              even during heavy monsoon seasons.
            </motion.p>

            {/* Environmental Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-border-soft/60 pt-6 font-sans">
              <div>
                <h4 className="text-sm font-semibold text-primary-800">Avenue Plantations</h4>
                <p className="text-xs text-text-main/60 mt-1">Lush trees planted along all major internal driveways.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary-800">Rainwater Drainage</h4>
                <p className="text-xs text-text-main/60 mt-1">Strategic concrete channels prevent waterlogging.</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE GRAPHIC - IMAGE (5 cols) */}
          <motion.div
            variants={fadeUp(0.8)}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <motion.div
              whileHover={hoverScale}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border-soft bg-white p-2"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-123.jpeg"
                  alt="Colony Open Green View at Ivy Estate Bhopal"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-primary-950/80 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white text-left font-sans shadow-lg">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-300 block mb-0.5">
                    Green Corridors
                  </span>
                  <p className="text-xs text-primary-100 font-semibold leading-normal">
                    Lush roadside tree rows and wide lawns surround the residential zones.
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
