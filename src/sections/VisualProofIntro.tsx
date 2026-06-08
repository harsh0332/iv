"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function VisualProofIntro() {
  return (
    <Section id="gallery" bg="white" py="lg" className="scroll-mt-24 border-t border-border-soft/60 pb-0">
      <Container>
        <div className="max-w-3xl text-left">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            Visual Evidence
          </motion.span>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-4"
          >
            See the Project for Yourself
          </motion.h2>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-base text-text-main/80 leading-relaxed font-sans max-w-2xl"
          >
            We believe in complete transparency. Every image on this page represents actual on-site 
            development at Ivy Estate, Bhopal. Review our finished asphalt roads, security perimeter walls, 
            local power substation, and landscaped gardens that are ready for immediate use.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
