"use client";

import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { StatCard, TrustCard } from "@/components/Cards";
import Button from "@/components/Button";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, LUXURY_EASE } from "@/lib/animations";
import { Sparkles, MessageSquare, Calendar } from "lucide-react";

export default function Overview() {
  const { openModal } = useModal();

  const factsTable = [
    { label: "Project Name", value: projectData.projectName },
    { label: "Developer Group", value: projectData.developerName },
    { label: "RERA Registration Number", value: projectData.reraNumber },
    { label: "Location Bounds", value: projectData.locationName },
    { label: "Development Scale", value: "10 Acres Gated Township" },
    { label: "Residential Density", value: "125 Individual Plots" },
    { label: "Plot Sizes Available", value: "1,500 Sq. Ft. & 2,100 Sq. Ft. (Primary)" },
    { label: "Campus Infrastructure", value: "Covered Sewage, Wide Roads, Gated Security" },
  ];

  return (
    <Section id="overview-details" bg="white" py="lg" className="scroll-mt-24">
      <Container>
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block">
            Verified Project Specifications
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight">
            Everything You Need To Know
          </h2>
        </div>

        {/* Fact Sheet & Stats Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Factual Table (7 cols) */}
          <motion.div variants={fadeUp(0.6)} className="lg:col-span-7 flex flex-col text-left font-sans">
            <h3 className="text-lg font-serif font-medium text-primary-800 mb-4 pb-2 border-b border-border-soft">
              Official Fact Sheet
            </h3>
            <div className="space-y-4">
              {factsTable.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-border-soft/60 last:border-b-0"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-text-main/55 sm:w-1/3">
                    {row.label}
                  </span>
                  <span className="text-sm font-semibold text-primary-800 sm:w-2/3 sm:text-right mt-1 sm:mt-0 leading-normal">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats & Badges (5 cols) */}
          <motion.div variants={fadeUp(0.8)} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              value="10 Acres"
              label="Township Scale"
              subLabel="Secure perimeter campus"
              className="bg-accent/20 border-border-soft/60"
            />
            <StatCard
              value="125 Plots"
              label="Limited Availability"
              subLabel="Planned plot layouts"
              className="bg-accent/20 border-border-soft/60"
            />
            
            <div className="sm:col-span-2 space-y-4 pt-2">
              <TrustCard
                title="RERA Registered"
                description={`Fully approved under MP RERA Registration Number ${projectData.reraNumber}, ensuring absolute legal safety and registry mutation feasibility.`}
                iconName="ShieldCheck"
              />
              <TrustCard
                title="Bank Loan Facility"
                description="Project approved by major nationalized and private banks. Full loan documentation and application assistance provided."
                iconName="Landmark"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* MICRO-CONVERSION BLOCK (Forest Green call-out box) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="relative mt-16 lg:mt-24 rounded-3xl bg-primary-800 p-8 md:p-12 text-white overflow-hidden shadow-xl"
        >
          {/* Subtle decorative gold circle */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary-400/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-300 border border-white/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-secondary-400 animate-spin" />
              <span>Interactive Campus Tour</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-4">
              Experience the Developed Campus Firsthand
            </h3>
            
            <p className="text-sm text-primary-100/90 leading-relaxed max-w-2xl font-sans mb-8">
              Schedule a private site visit today. We provide a complimentary pick-and-drop service in Bhopal 
              with no obligation. A dedicated relationship manager will guide you through the layouts, road grids, 
              and electrical nodes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal("site-visit")}
                leftIcon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Book Free Site Visit
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

            <span className="text-[10px] text-primary-100/40 uppercase tracking-widest font-semibold font-sans mt-5">
              Available Daily: 9:00 AM - 6:00 PM • Verified RERA Site visit
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
