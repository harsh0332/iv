"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { tracking } from "@/lib/tracking";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";
import { Calendar, Phone, MessageSquare, ShieldCheck } from "lucide-react";

export default function FinalConversionBanner() {
  const { openModal } = useModal();

  const handleCallClick = () => {
    tracking.callClicked("final_banner");
    window.open(`tel:${projectData.contact.phoneRaw}`, "_self");
  };

  const handleWhatsAppClick = () => {
    tracking.whatsAppClicked("final_banner");
    window.open(projectData.contact.whatsappUrl, "_blank");
  };

  return (
    <Section id="final-conversion" bg="white" py="lg" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="relative rounded-3xl bg-primary-900 p-8 md:p-14 text-white overflow-hidden shadow-2xl border border-primary-800 text-center"
        >
          {/* Decorative champagne radial gradient backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary-400/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-300 mb-3 block">
              Schedule Your Tour
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-4 tracking-tight">
              Ready to Explore Available Plot Options?
            </h2>
            
            <p className="text-sm text-primary-100/90 leading-relaxed max-w-2xl font-sans mb-10">
              Schedule a site visit or talk with our team today. Secure your plot layout sheets, 
              RERA certifications, and custom price options before your visit. We are available daily 
              to provide guided property inspections and free transport across Bhopal.
            </p>

            {/* Tri-CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center font-sans text-xs mb-8">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal("site-visit")}
                leftIcon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto px-8"
              >
                Book Site Visit
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleCallClick}
                leftIcon={<Phone className="w-5 h-5" />}
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8"
              >
                Call Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                leftIcon={<MessageSquare className="w-5 h-5 fill-current" />}
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8"
              >
                WhatsApp Inquiry
              </Button>
            </div>

            {/* Trust highlights under the banner */}
            <div className="flex items-center justify-center gap-2 text-primary-100/80 font-sans text-xs">
              <ShieldCheck className="w-4 h-4 text-secondary-400" />
              <span>Madhya Pradesh RERA Approved Layout &bull; Reg: {projectData.reraNumber}</span>
            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
