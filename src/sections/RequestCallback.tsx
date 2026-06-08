"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { PhoneCall } from "lucide-react";

export default function RequestCallback() {
  const { openModal } = useModal();

  return (
    <Section id="callback-section" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="max-w-3xl mx-auto bg-accent/20 border border-border-soft rounded-3xl p-6 md:p-8 text-center font-sans text-xs">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center max-w-xl mx-auto"
          >
            <div className="rounded-full bg-white p-3.5 text-secondary-500 border border-border-soft/60 shadow-sm mb-4">
              <PhoneCall className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-serif font-medium text-primary-800 mb-2">
              Prefer a Quick Conversation?
            </h3>
            
            <p className="text-text-main/70 leading-relaxed mb-6">
              Enter your details and a dedicated relationship manager from Ivy Estate will call you 
              back within 15 minutes to answer questions about plot availability, RERA files, and site bookings.
            </p>

            <Button
              variant="secondary"
              size="md"
              onClick={() => openModal("callback")}
              leftIcon={<PhoneCall className="w-4.5 h-4.5" />}
              className="px-8"
            >
              Request a Callback
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
