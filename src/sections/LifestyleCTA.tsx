"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";
import { Calendar, MessageSquare, Compass, ShieldCheck, Map, Leaf } from "lucide-react";

export default function LifestyleCTA() {
  const { openModal } = useModal();

  const tourBenefits = [
    { label: "Walk the Finished Asphalt Roads", icon: <Compass className="w-4 h-4 text-secondary-400" /> },
    { label: "Inspect Completed Water & Power Sub-bases", icon: <ShieldCheck className="w-4 h-4 text-secondary-400" /> },
    { label: "Receive Printed Layout Grids & RERA Files", icon: <Map className="w-4 h-4 text-secondary-400" /> },
    { label: "Experience the Green buffer boundaries", icon: <Leaf className="w-4 h-4 text-secondary-400" /> },
  ];

  return (
    <Section id="lifestyle-cta" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="relative rounded-3xl bg-primary-900 p-8 md:p-12 text-white overflow-hidden shadow-xl border border-primary-800"
        >
          {/* Decorative backdrop graphics */}
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary-400/5 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-left font-sans">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-300 mb-3 block">
                Campus Site Tour
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-4">
                See the Premium Infrastructure in Person Before You Decide
              </h3>
              <p className="text-sm text-primary-100/90 leading-relaxed mb-6 max-w-xl">
                There is no substitute for walking the actual layout. Schedule a private on-site walkthrough. 
                We offer a complimentary pick-and-drop service from any location in Bhopal. Take your time 
                to evaluate the green spaces, test the internal road width, and verify the RERA compliance documents.
              </p>
              
              {/* Benefits list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-primary-100/85">
                {tourBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    {benefit.icon}
                    <span>{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 w-full sm:w-auto lg:w-72 shrink-0">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal("site-visit")}
                leftIcon={<Calendar className="w-5 h-5" />}
                className="w-full justify-center"
              >
                Book Private Site Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(projectData.contact.whatsappUrl, "_blank")}
                leftIcon={<MessageSquare className="w-5 h-5 fill-current" />}
                className="w-full justify-center border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
