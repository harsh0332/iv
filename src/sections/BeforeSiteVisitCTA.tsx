"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Calendar, MessageSquare } from "lucide-react";

export default function BeforeSiteVisitCTA() {
  const { openModal } = useModal();

  return (
    <Section id="before-site-visit-cta" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="max-w-4xl mx-auto border border-border-soft bg-accent/25 rounded-3xl p-6 md:p-10 text-left font-sans flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="flex-1">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.6)}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block animate-fadeIn"
            >
              Real Validation
            </motion.span>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.7)}
              className="text-xl md:text-2xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-2.5"
            >
              The Best Way to Evaluate a Plot is to Walk the Site
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.8)}
              className="text-xs text-text-main/80 leading-relaxed max-w-xl"
            >
              Explore roads, surroundings, connectivity and available plot options in person. 
              Our site offices are open daily, and we provide complimentary pick-and-drop service 
              across Bhopal for interested families.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0 text-xs">
            <Button
              variant="primary"
              size="md"
              onClick={() => openModal("site-visit")}
              leftIcon={<Calendar className="w-4.5 h-4.5" />}
              className="w-full justify-center"
            >
              Book Site Visit
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => window.open(projectData.contact.whatsappUrl, "_blank")}
              leftIcon={<MessageSquare className="w-4.5 h-4.5 fill-current" />}
              className="w-full justify-center border-border-soft hover:bg-accent/40 text-text-main"
            >
              WhatsApp for Plot Details
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
