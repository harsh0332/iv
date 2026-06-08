"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";
import { Calendar, Phone, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";

export default function ConversionBanner() {
  const { openModal } = useModal();

  return (
    <Section id="conversion-banner" bg="white" py="lg" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="relative rounded-3xl bg-primary-950 p-8 md:p-14 text-white overflow-hidden shadow-2xl border border-primary-800 text-center"
        >
          {/* Decorative backdrop glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary-400/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-300 mb-3 block">
              Join Our Growing Campus
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4 tracking-tight">
              Ready to Explore the Project in Person?
            </h2>
            
            <p className="text-sm text-primary-100/90 leading-relaxed max-w-2xl font-sans mb-10">
              Schedule a guided site visit and get complete project information including 
              high-resolution layout blueprints, RERA certificates, and official plot price sheets. 
              Our company vehicle is available for pick-and-drop services daily across Bhopal.
            </p>

            {/* Tri-CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center font-sans text-xs mb-10">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal("site-visit")}
                leftIcon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Book Free Site Visit
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`tel:${projectData.contact.phoneRaw}`, "_self")}
                leftIcon={<Phone className="w-5 h-5" />}
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8"
              >
                Call: {projectData.contact.phoneDisplay}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(projectData.contact.whatsappUrl, "_blank")}
                leftIcon={<MessageSquare className="w-5 h-5 fill-current" />}
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Trust highlights under the banner */}
            <div className="w-full border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans text-xs">
              <div className="flex items-center justify-center gap-2 text-primary-100/80">
                <ShieldCheck className="w-4 h-4 text-secondary-400" />
                <span>RERA Approved: {projectData.reraNumber}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-100/80">
                <Calendar className="w-4 h-4 text-secondary-400" />
                <span>Site Tour Available Daily 10 AM - 6 PM</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-100/80">
                <HelpCircle className="w-4 h-4 text-secondary-400" />
                <span>No-Obligation Consultation</span>
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
