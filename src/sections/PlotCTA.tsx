"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";
import { Calendar, MessageSquare, MapPin, ShieldCheck, Map, Clock } from "lucide-react";

export default function PlotCTA() {
  const { openModal } = useModal();

  const tourBenefits = [
    { label: "Verify boundary posts and plot dimensions in person", icon: <MapPin className="w-4 h-4 text-secondary-400" /> },
    { label: "Inspect planned double-lane roads and drainage plans", icon: <ShieldCheck className="w-4 h-4 text-secondary-400" /> },
    { label: "Receive printed layout blueprints & RERA copies", icon: <Map className="w-4 h-4 text-secondary-400" /> },
    { label: "No-pressure, educational tour guided by on-site engineers", icon: <Clock className="w-4 h-4 text-secondary-400" /> },
  ];

  return (
    <Section id="plot-cta" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="relative rounded-3xl bg-primary-900 p-8 md:p-12 text-white overflow-hidden shadow-xl border border-primary-800"
        >
          {/* Decorative design stroke */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-secondary-400/5 -translate-x-1/4 -translate-y-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-left font-sans">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-300 mb-3 block">
                On-Ground Evaluation
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-4">
                Walk the Site Before You Decide
              </h3>
              <p className="text-sm text-primary-100/90 leading-relaxed mb-6 max-w-xl">
                Schedule a guided site visit and explore the location personally. 
                Walk the roads, view the landscaping, and evaluate the specific plot numbers 
                that match your custom design plans. Complimentary private pick-and-drop service in Bhopal is included.
              </p>
              
              {/* Tour benefits list */}
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
                Book Free Site Visit
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(projectData.contact.whatsappUrl, "_blank")}
                leftIcon={<MessageSquare className="w-5 h-5 fill-current" />}
                className="w-full justify-center border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                Get Layout on WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
