"use client";

import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { Shield, Sparkles, HelpCircle, FileText } from "lucide-react";
import { projectData } from "@/data/project-data";

export default function TrustTransparency() {
  const transparencyItems = [
    {
      title: "Daily Site Visits Available",
      desc: "Our on-site coordination desk is active every day from 10:00 AM to 6:00 PM. Bookings are confirmed with zero online fee.",
      icon: <Sparkles className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Authorized Marketing Partner",
      desc: "We are the authorized lead generation partner. Connect directly with our sales team for layout plans and site visits.",
      icon: <Shield className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Complete RERA Access",
      desc: `All layout plans, MP RERA registration records (Reg: ${projectData.reraNumber}), and title documents are available for inspection on-site.`,
      icon: <FileText className="w-5 h-5 text-secondary-500" />,
      link: "https://rera.mp.gov.in/",
    },
    {
      title: "No-Pressure Consultation",
      desc: "Get information transparently. We provide layout plans and details so you can evaluate the colony project at your own pace.",
      icon: <HelpCircle className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="trust-transparency" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs">
          {transparencyItems.map((item, idx) => {
            const cardContent = (
              <>
                <div className="rounded-xl bg-white p-2.5 text-secondary-500 w-10 h-10 flex items-center justify-center mb-4 border border-border-soft/60 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-sm font-semibold text-primary-800 tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-text-main/70 leading-relaxed">
                  {item.desc}
                </p>
              </>
            );

            if (item.link) {
              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col text-left p-5 bg-accent/20 rounded-2xl border border-border-soft/60 hover:opacity-85 transition-opacity"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={idx}
                className="flex flex-col text-left p-5 bg-accent/20 rounded-2xl border border-border-soft/60"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
