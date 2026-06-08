"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import FormBuilder from "@/components/FormBuilder";

export default function QuickInquiryForm() {
  const fields = [
    {
      id: "name",
      label: "Your Name",
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
      id: "message",
      label: "What details do you need?",
      type: "text" as const,
      placeholder: "e.g. Please send pricing, plot availability chart, and bank loan list.",
      required: true,
    },
  ];

  return (
    <Section id="quick-inquiry-section" bg="ivory" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="max-w-3xl mx-auto bg-white border border-border-soft rounded-3xl p-6 md:p-10 shadow-sm text-left font-sans text-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (5 cols) */}
            <div className="md:col-span-5 text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block animate-fadeIn">
                Fast Response
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-3">
                Request Pricing & Layout Sheet
              </h3>
              <p className="text-text-main/70 leading-relaxed mb-0">
                Not ready for a site visit yet? Get the complete project prospectus, pricing sheets, 
                and official layout blueprints delivered directly to you. Our sales desk typically replies within 15 minutes.
              </p>
            </div>

            {/* Right Column (7 cols) */}
            <div className="md:col-span-7 border-l-0 md:border-l border-border-soft/60 pl-0 md:pl-8">
              <FormBuilder
                fields={fields}
                formType="lead"
                submitLabel="Send Project Details"
              />
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
