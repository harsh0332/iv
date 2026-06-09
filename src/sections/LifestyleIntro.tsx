"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function LifestyleIntro() {
  return (
    <Section id="amenities" bg="white" py="lg" className="scroll-mt-24 border-t border-border-soft/60">
      <Container>
        <div className="max-w-3xl text-left">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            LIFESTYLE & COMMUNITY
          </motion.span>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-4"
          >
            More Than a Plot: A Curated Community Designed for Life
          </motion.h2>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-base text-text-main/80 leading-relaxed font-sans max-w-2xl"
          >
            When you secure a home space at Ivy Estate, you are investing in much more than acreage. 
            You are choosing a balanced environment, seamless regional accessibility, a secure gated 
            neighborhood, and the long-term utility of planned internal concrete roadways and electricity networks under active development. 
            It is a future-proof foundation built for family comfort, wellness, and lasting value.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
