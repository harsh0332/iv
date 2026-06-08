"use client";

import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";
import { Calendar, MessageSquare, Map, Car, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function LocationCTA() {
  const { openModal } = useModal();

  const trustElements = [
    { label: "Google Maps Pin Ready", icon: <Map className="w-4 h-4 text-secondary-400" /> },
    { label: "Free Pick & Drop Included", icon: <Car className="w-4 h-4 text-secondary-400" /> },
    { label: "Manned Entry Gate Access", icon: <ShieldCheck className="w-4 h-4 text-secondary-400" /> },
    { label: "RERA Documents Available", icon: <CheckCircle2 className="w-4 h-4 text-secondary-400" /> },
  ];

  return (
    <Section id="location-cta" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="relative rounded-3xl bg-primary-900 p-8 md:p-12 text-white overflow-hidden shadow-xl border border-primary-800"
        >
          {/* Decorative gold backdrop line */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary-400/5 translate-x-1/4 -translate-y-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-300 mb-3 block">
              Direct Site Verification
            </span>
            
            <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-4">
              Experience the Location & Infrastructure in Person
            </h3>
            
            <p className="text-sm text-primary-100/90 leading-relaxed max-w-2xl font-sans mb-8">
              Plots are best evaluated on-ground. Book a complimentary private site tour daily. 
              Our company vehicle will pick you up and drop you back at any location in Bhopal. 
              Review the concrete road layouts, electrical grids, and RERA approvals with our on-site team.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans mb-8">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal("site-visit")}
                leftIcon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Schedule Private Site Visit
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(projectData.contact.whatsappUrl, "_blank")}
                leftIcon={<MessageSquare className="w-5 h-5 fill-current" />}
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                Inquire on WhatsApp
              </Button>
            </div>

            {/* Location Trust Badges strip */}
            <div className="w-full border-t border-white/10 pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-xs">
              {trustElements.map((el, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-primary-100/80 font-medium">
                  {el.icon}
                  <span>{el.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
export { projectData };
