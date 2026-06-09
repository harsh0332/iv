"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverScale, LUXURY_EASE } from "@/lib/animations";
import { Calendar, MessageSquare, MapPin, ShieldCheck, Landmark, Milestone, MousePointerClick, ChevronDown } from "lucide-react";

export default function Hero() {
  const { openModal } = useModal();

  const trustBadges = [
    {
      id: "rera",
      label: "RERA Approved",
      icon: <ShieldCheck className="w-4 h-4 text-secondary-400" />,
    },
    {
      id: "location",
      label: "Mungalia Kot, North Bhopal",
      icon: <MapPin className="w-4 h-4 text-secondary-400" />,
    },
    {
      id: "plots",
      label: "125 Premium Plots",
      icon: <Milestone className="w-4 h-4 text-secondary-400" />,
    },
    {
      id: "loans",
      label: "Bank Loan Assistance",
      icon: <Landmark className="w-4 h-4 text-secondary-400" />,
    },
  ];

  const quickFacts = [
    { label: "Developer", value: projectData.developerName },
    { label: "Location Zone", value: "Vidisha Road & Outer Ring Rd Junction" },
    { label: "Standard Sizes", value: "1,500 & 2,100 Sq. Ft." },
    { label: "Development Status", value: "Active Infrastructure Progress" },
    { label: "Primary Landmark", value: "1 km from Azim Premji University" },
  ];

  return (
    <section className="relative w-full min-h-[95vh] lg:min-h-screen flex items-center bg-primary-950 overflow-hidden pt-24 pb-16 lg:py-0 font-sans">
      {/* 1. BACKGROUND IMAGE & LUXURY OVERLAYS */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.45, scale: 1 }} // Dampened opacity to keep dark luxury contrast
        transition={{ duration: 1.6, ease: LUXURY_EASE }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <Image
          src="/ivy-estate-images/ivy-estate-bhopal-header1.jpg"
          alt="Ivy Estate Bhopal entrance landscape view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark vignette gradient overlay for maximum contrast and legibility */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary-950 via-primary-950/85 to-primary-950/30 md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-1 h-32 bg-gradient-to-t from-primary-950 to-transparent" />

      {/* 2. MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* LEFT SIDE CONTENT (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Badges */}
            <motion.div
              variants={fadeUp(0.6)}
              className="flex flex-wrap gap-2 mb-5"
            >
              {trustBadges.slice(0, 2).map((badge) => (
                <div
                  key={badge.id}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold text-white border border-white/10"
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Main SEO H1 Headline */}
            <motion.h1
              variants={fadeUp(0.8)}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.12] tracking-tight"
            >
              Own a Premium Residential Plot in{" "}
              <span className="text-luxury-gold">North Bhopal&apos;s</span> High-Growth Corridor
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp(0.8)}
              className="mt-4 text-base sm:text-lg text-primary-100/90 leading-relaxed font-sans max-w-2xl"
            >
              Secure residential plots in an actively developing gated layout in Mungalia Kot{" "}
              <span className="text-white font-semibold">({projectData.reraNumber})</span>,
              located just 1 km from the upcoming Azim Premji University campus. Civils, internal roads, and utilities are under active progress.
            </motion.p>

            {/* Trust Badges (Infrastructure & Finance) */}
            <motion.div
              variants={fadeUp(0.8)}
              className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm text-primary-200/80 font-medium font-sans border-t border-white/10 pt-4 w-full"
            >
              {trustBadges.slice(2).map((badge) => (
                <div key={badge.id} className="flex items-center gap-2">
                  <div className="rounded-full bg-primary-850 p-1 text-secondary-400">
                    {badge.icon}
                  </div>
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs Section */}
            <motion.div
              variants={fadeUp(0.8)}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
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
                Get Layout & Price List
              </Button>
            </motion.div>

            {/* Micro Trust Statement */}
            <motion.p
              variants={fadeUp(0.8)}
              className="mt-3.5 text-xs text-primary-200/50 font-medium font-sans flex items-center gap-1.5"
            >
              <MousePointerClick className="w-3.5 h-3.5 text-secondary-400" />
              <span>✓ Free Cab Pickup for Site Visit • ✓ RERA Registered • ✓ No Obligation Callback</span>
            </motion.p>
          </div>

          {/* RIGHT SIDE FLOATING FACT CARD (5 cols) */}
          <motion.div
            variants={fadeUp(1.0)}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={hoverScale}
              transition={{ duration: 0.3, ease: LUXURY_EASE }}
              className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-md p-6 shadow-2xl md:p-8"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-t-2xl" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-400 mb-5 border-b border-white/10 pb-3">
                Project Quick Facts
              </h2>
              
              <div className="space-y-4 font-sans text-sm">
                {quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex flex-col border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs text-primary-200/60 font-semibold mb-0.5">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-white tracking-wide">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* RERA Badge Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-secondary-300">
                <span>MP RERA Approved</span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-[10px] text-white">
                  {projectData.reraNumber}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 select-none"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-200/40">
          Explore Colony
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: LUXURY_EASE }}
          className="flex items-center justify-center p-1 rounded-full border border-primary-200/20 text-secondary-400"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
