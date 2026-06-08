"use client";
import React, { useState } from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2, MapPin, Copy, Check } from "lucide-react";

export default function SiteProgress() {
  const [copied, setCopied] = useState(false);
  const plusCode = "9C7V+6W Bhopal";

  const handleCopy = () => {
    navigator.clipboard.writeText(plusCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progressMilestones = [
    {
      phase: "Phase 1: Site Grading & Demarcation",
      status: "Completed",
      desc: "Preserved natural topography and levelled individual residential sectors. Concrete boundary marking stones are fully set in place.",
      verification: "Verified by Photo #122 & Site Progress Pic #13",
    },
    {
      phase: "Phase 2: Security Boundary Wall & Gates",
      status: "Completed",
      desc: "Masonry perimeter walling is constructed around the 10-acre campus boundaries, and the main entry checkpoint archway structure is completed.",
      verification: "Verified by Site Progress Pic #1 & Pic #4",
    },
    {
      phase: "Phase 3: Subterranean Pipes & Storm Drains",
      status: "Completed",
      desc: "Laying of primary underground sewage piping nodes and roadside concrete stormwater drainage channels is finished.",
      verification: "Verified by Site Progress Pic #5 & Pic #8",
    },
    {
      phase: "Phase 4: Asphalt Road Paving",
      status: "Completed",
      desc: "Wide internal streets and double-lane main boulevards are paved with high-quality asphalt, complete with stone borders.",
      verification: "Verified by Site Progress Pic #2 & Pic #14",
    },
    {
      phase: "Phase 5: Electrical Substation Station",
      status: "Completed",
      desc: "Local power transformer substation is installed, wired, and fenced. Street lighting posts have been placed along all avenues.",
      verification: "Verified by Site Progress Pic #3 & Pic #11",
    },
    {
      phase: "Phase 6: Park Landscaping & Avenue Trees",
      status: "Completed",
      desc: "Neighborhood park lawns are turfed, pathways paved, and rows of avenue trees are planted along streets for green buffer zones.",
      verification: "Verified by Site Progress Pic #6 & Pic #12",
    },
  ];

  return (
    <Section id="site-progress" bg="ivory" py="lg" className="scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start font-sans text-xs">
          
          {/* TIMELINE SECTION (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.6)}
              className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
            >
              Development Timeline
            </motion.span>
            
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.7)}
              className="text-2xl md:text-3xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-8"
            >
              Verified Development Milestones
            </motion.h2>

            <motion.div
              variants={staggerContainer(0.06, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              className="relative border-l border-border-soft pl-6 space-y-8"
            >
              {progressMilestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp(0.6, 15)}
                  className="relative group text-left"
                >
                  {/* Timeline indicator node */}
                  <div className="absolute -left-[31px] top-1 rounded-full bg-white border-2 border-secondary-500 p-0.5 shadow-sm text-secondary-500 group-hover:bg-secondary-500 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-semibold text-primary-800">
                      {milestone.phase}
                    </h4>
                    <span className="bg-secondary-50 border border-secondary-100 text-secondary-600 font-semibold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0">
                      {milestone.status}
                    </span>
                  </div>

                  <p className="text-text-main/70 leading-relaxed max-w-xl mb-1.5">
                    {milestone.desc}
                  </p>

                  <span className="text-[10px] font-bold text-text-main/40 uppercase tracking-widest block">
                    {milestone.verification}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* LOCATION SNAPSHOT CARD (5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full sticky top-28">
            <div className="w-full max-w-md bg-white border border-border-soft rounded-3xl p-6 shadow-md text-left flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-secondary-500 uppercase tracking-widest block mb-1">
                  Spatial Reference
                </span>
                <h3 className="text-lg font-serif font-medium text-primary-800 mb-4">
                  Project Location Snapshot
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 border-b border-border-soft/60 pb-3">
                    <MapPin className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-primary-800">Mungalia Kot</h4>
                      <p className="text-text-main/60 leading-relaxed mt-0.5">
                        Junction of Vidisha Road and the new Bhopal Outer Ring Road bypass.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 border-b border-border-soft/60 pb-3">
                    <MapPin className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-primary-800">Regional Alignment</h4>
                      <p className="text-text-main/60 leading-relaxed mt-0.5">
                        North Bhopal development zone, adjacent to the upcoming Jagdishpur Road Corridor.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-primary-800">Google Plus Code</h4>
                      <p className="text-text-main/60 leading-relaxed mt-0.5">
                        Use code to locate the entrance gate directly in Google Maps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plus Code Copy Block */}
              <div className="bg-accent/30 border border-border-soft/60 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-text-main/50 block font-semibold">
                    Maps Plus Code
                  </span>
                  <code className="text-sm font-mono font-bold text-primary-800 block mt-0.5">
                    {plusCode}
                  </code>
                </div>
                <button
                  onClick={handleCopy}
                  className={`p-2.5 rounded-xl border transition-all flex items-center justify-center shrink-0 ${
                    copied
                      ? "bg-secondary-500 border-secondary-500 text-white"
                      : "bg-white border-border-soft/80 text-text-main/70 hover:border-secondary-300 hover:text-primary-800 shadow-sm"
                  }`}
                  title="Copy Plus Code"
                  aria-label="Copy Plus Code"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
