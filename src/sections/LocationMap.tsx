"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Landmark, Compass, Navigation } from "lucide-react";

export default function LocationMap() {
  const [activeTab, setActiveTab] = useState<"street" | "layout">("street");

  const routesInfo = [
    {
      title: "Outer Ring Road Connection",
      description: "Direct access to Bhopal's main bypass ring road corridor, linking key transit highways around the city.",
      icon: <Compass className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Vidisha Road Frontage",
      description: "Situated along Vidisha Road, connecting the project directly to central Bhopal areas and Vidisha.",
      icon: <Navigation className="w-5 h-5 text-secondary-500" />,
    },
    {
      title: "Educational Catchments",
      description: "Located 1 km from the upcoming Azim Premji University campus, situated in a growing residential area.",
      icon: <Landmark className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="location-map" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT SIDE CONTENT (5 cols) - Stacks below the map on mobile */}
          <div className="lg:col-span-5 flex flex-col text-left order-2 lg:order-1">
            <motion.h3
              variants={fadeUp(0.6)}
              className="text-2xl font-serif font-medium text-primary-800 tracking-tight mb-6"
            >
              Factual Connectivity Highlights
            </motion.h3>

            <div className="space-y-6">
              {routesInfo.map((route, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(0.6)}
                  className="flex gap-4 items-start font-sans"
                >
                  <div className="flex-shrink-0 rounded-xl bg-accent p-3 text-secondary-500 border border-border-soft/60">
                    {route.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary-800 tracking-tight">
                      {route.title}
                    </h4>
                    <p className="mt-1 text-xs text-text-main/70 leading-relaxed">
                      {route.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE GRAPHIC MAP (7 cols) - Stacks above the content on mobile */}
          <motion.div
            variants={fadeUp(0.8)}
            className="lg:col-span-7 flex flex-col items-center w-full order-1 lg:order-2"
          >
            {/* Tabs Toggle (min-h-[44px] for mobile tap targets) */}
            <div className="flex gap-2 mb-6 font-sans">
              <button
                onClick={() => setActiveTab("street")}
                className={`px-5 py-2.5 text-xs font-semibold rounded-xl border transition-all min-h-[44px] min-w-[120px] flex items-center justify-center cursor-pointer ${
                  activeTab === "street"
                    ? "bg-primary-800 border-primary-800 text-white shadow-sm"
                    : "bg-white border-border-soft text-text-main hover:bg-accent/10"
                }`}
              >
                Street Map
              </button>
              <button
                onClick={() => setActiveTab("layout")}
                className={`px-5 py-2.5 text-xs font-semibold rounded-xl border transition-all min-h-[44px] min-w-[120px] flex items-center justify-center cursor-pointer ${
                  activeTab === "layout"
                    ? "bg-primary-800 border-primary-800 text-white shadow-sm"
                    : "bg-white border-border-soft text-text-main hover:bg-accent/10"
                }`}
              >
                Layout Map
              </button>
            </div>

            {/* Map Frame Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border-soft bg-white p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden min-h-[300px]">
                {activeTab === "street" ? (
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://maps.google.com/maps?q=Mungalia%20Kot,%20Outer%20Ring%20Road,%20Bhopal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full rounded-xl"
                      title="Ivy Estate Bhopal Location Map"
                    ></iframe>
                    {/* Approximate location label */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 bg-primary-950/90 backdrop-blur-md border border-white/10 rounded-lg p-2.5 text-[10px] text-white text-center shadow-lg font-sans">
                      Approximate location — exact plot location shown on site visit
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative bg-accent/5">
                    <Image
                      src="/ivy-estate-images/ivy-estate-bhopal-layout-location-map.png"
                      alt="Official location map of Ivy Estate, Bhopal Mungalia Kot"
                      fill
                      sizes="(max-w-768px) 100vw, 55vw"
                      className="object-contain object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {/* RERA Overlay */}
                    <div className="absolute top-4 right-4 z-10 bg-primary-950/80 backdrop-blur-sm border border-white/10 rounded px-2.5 py-1 text-[9px] font-mono text-white">
                      RERA Map ID: {projectData.reraNumber}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
