"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function PlotOptionsIntro() {
  return (
    <Section id="plots" bg="white" py="lg" className="scroll-mt-24 border-t border-border-soft/60 pb-0">
      <Container>
        <div className="max-w-3xl text-left">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            PLOT SELECTION
          </motion.span>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-4"
          >
            Choose the Plot That Fits Your Vision
          </motion.h2>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-base text-text-main/80 leading-relaxed font-sans max-w-2xl"
          >
            Ivy Estate offers a variety of residential plots, primarily featuring 1,500 Sq. Ft. 
            and 2,100 Sq. Ft. dimensions, with custom sizes up to 2,600 Sq. Ft. 
            All layouts are RERA-approved, fully levelled, and designed to support independent villa 
            construction with immediate registry and possession.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
