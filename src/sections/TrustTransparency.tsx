"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { Shield, Sparkles, HelpCircle, FileText } from "lucide-react";

export default function TrustTransparency() {
  const transparencyItems = [
    {
      title: "Daily Site Visits Available",
      desc: "Our sales cabin is operational every day from 10:00 AM to 6:00 PM. Bookings are confirmed with zero fee.",
      icon: <Sparkles className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Direct Developer Contact",
      desc: "Connect directly with our sales team without intermediary broker fees or third-party commission overheads.",
      icon: <Shield className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Complete RERA Access",
      desc: "All registry sheets, RERA diversion papers, and approved layout blueprints are available for review on-site.",
      icon: <FileText className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "No-Pressure Consultation",
      desc: "Get information transparently. We provide the layouts and pricing details so you can decide at your own pace.",
      icon: <HelpCircle className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="trust-transparency" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs">
          {transparencyItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col text-left p-5 bg-accent/20 rounded-2xl border border-border-soft/60"
            >
              <div className="rounded-xl bg-white p-2.5 text-secondary-500 w-10 h-10 flex items-center justify-center mb-4 border border-border-soft/60 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-sm font-semibold text-primary-800 tracking-tight">
                {item.title}
              </h4>
              <p className="mt-1.5 text-text-main/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
