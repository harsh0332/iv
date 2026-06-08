"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import FormBuilder from "@/components/FormBuilder";

export default function SiteVisitBooking() {
  const fields = [
    {
      id: "name",
      label: "Full Name",
      type: "text" as const,
      placeholder: "Enter your full name",
      required: true,
    },
    {
      id: "phone",
      label: "Mobile Number",
      type: "tel" as const,
      placeholder: "Enter 10-digit mobile number",
      required: true,
    },
    {
      id: "visitDate",
      label: "Preferred Visit Date",
      type: "date" as const,
      required: true,
    },
    {
      id: "visitTimeSlot",
      label: "Preferred Time Slot",
      type: "select" as const,
      required: true,
      options: [
        "Morning (10:00 AM - 01:00 PM)",
        "Afternoon (01:00 PM - 04:00 PM)",
        "Evening (04:00 PM - 07:00 PM)",
      ],
    },
    {
      id: "budgetRange",
      label: "Estimated Budget Range",
      type: "select" as const,
      required: true,
      options: [
        "Under ₹30 Lakhs",
        "₹30 Lakhs - ₹50 Lakhs",
        "₹50 Lakhs - ₹75 Lakhs",
        "Above ₹75 Lakhs",
        "Undecided",
      ],
    },
    {
      id: "message",
      label: "Special Requests / Pick-up Location (Optional)",
      type: "text" as const,
      placeholder: "e.g. request corner plots, need pick-up from railway station",
      required: false,
    },
  ];

  return (
    <Section id="booking-section" bg="white" py="lg" className="scroll-mt-24 border-t border-border-soft/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start font-sans text-xs">
          
          {/* CONTENT LEFT (5 cols) */}
          <div className="lg:col-span-5 text-left sticky top-28">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.6)}
              className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
            >
              Grounded Verification
            </motion.span>
            
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.7)}
              className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-5"
            >
              Visit the Site Before Making a Decision
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.8)}
              className="text-sm text-text-main/80 leading-relaxed mb-6"
            >
              A residential plot is a long-term family asset. We encourage you to walk the land, inspect the road quality, 
              view the surrounding university boundary, and review RERA files at the sales cabin in person.
            </motion.p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent p-2 text-primary-800 font-bold shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-primary-800 text-sm">Guided Site Tour</h4>
                  <p className="text-text-main/60 mt-0.5">One-on-one walkthrough of plot margins and road grids with our engineers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent p-2 text-primary-800 font-bold shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-primary-800 text-sm">Free Pick-up & Drop</h4>
                  <p className="text-text-main/60 mt-0.5">Complimentary company vehicle transit from any point in Bhopal.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent p-2 text-primary-800 font-bold shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-primary-800 text-sm">Direct Office Consultation</h4>
                  <p className="text-text-main/60 mt-0.5">Private sit-down to examine layouts, registration mutated sheets, and RERA approvals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM RIGHT (7 cols) */}
          <div className="lg:col-span-7 bg-accent/20 border border-border-soft rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-serif font-semibold text-primary-800 mb-2 text-left">
              Request Private Tour
            </h3>
            <p className="text-[11px] text-text-main/60 mb-6 text-left leading-relaxed">
              Fill out the parameters below. Our coordination team will call you to confirm your date, time-slot, and vehicle pick-up details.
            </p>

            <FormBuilder
              fields={fields}
              formType="site-visit"
              submitLabel="Schedule Private Site Visit"
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}
