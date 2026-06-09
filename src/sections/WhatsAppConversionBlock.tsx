"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { tracking } from "@/lib/tracking";
import Button from "@/components/Button";
import { MessageSquare, CheckCircle2 } from "lucide-react";

export default function WhatsAppConversionBlock() {
  const handleWhatsAppClick = () => {
    tracking.whatsAppClicked("whatsapp_block");
    window.open(projectData.contact.whatsappUrl, "_blank");
  };

  const benefits = [
    "Receive layout sheets and project specifications",
    "Real-time plot availability check",
    "Fast site tour coordination and pick-up bookings",
  ];

  return (
    <Section id="whatsapp-conversion" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="max-w-3xl mx-auto rounded-3xl bg-secondary-50 border border-secondary-100 p-6 md:p-8 text-left font-sans text-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="flex-1">
              <span className="text-[9px] font-bold text-secondary-600 uppercase tracking-widest block mb-1">
                Instant Access
              </span>
              <h3 className="text-lg font-serif font-medium text-primary-800 mb-4">
                Get Layout & Details on WhatsApp
              </h3>

              <div className="space-y-2.5">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-text-main/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleWhatsAppClick}
                leftIcon={<MessageSquare className="w-5 h-5 fill-current" />}
                className="w-full md:w-auto px-8 justify-center"
              >
                Get Layout on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
