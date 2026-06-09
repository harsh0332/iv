"use client";

import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function LocationIntro() {
  return (
    <Section id="location" bg="white" py="md" className="scroll-mt-24 border-t border-border-soft/60">
      <Container>
        <div className="max-w-3xl text-left">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block animate-fadeIn"
          >
            Strategic Connectivity
          </motion.span>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-4"
          >
            Connected to What Matters in North Bhopal
          </motion.h2>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-base text-text-main/80 leading-relaxed font-sans max-w-2xl"
          >
            Ivy Estate sits directly near the junction of Vidisha Road and the Outer Ring Road in North Bhopal.
            Offering convenient living, this location provides direct access to key transit terminals, schools, 
            healthcare services, and the upcoming Azim Premji University campus.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
