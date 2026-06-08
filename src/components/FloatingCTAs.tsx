"use client";

import React from "react";
import { projectData } from "@/data/project-data";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-20 right-4 lg:bottom-8 lg:right-8 z-35 flex flex-col gap-3 items-end font-sans">
      {/* 1. FLOATING CALL BUTTON (Mobile Only) */}
      <motion.a
        href={`tel:${projectData.contact.phoneRaw}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary-800 text-white shadow-lg border border-primary-700/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        aria-label="Call Sales Office"
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      {/* 2. FLOATING WHATSAPP BUTTON (Always Visible, Pulsing) */}
      <div className="relative group">
        {/* Subtle Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-success-muted opacity-40 animate-ping z-0" />
        
        <motion.a
          href={projectData.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-success-muted text-white shadow-lg border border-green-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success-muted"
          aria-label="Inquire via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </motion.a>

        {/* Desktop Tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-primary-950 text-white text-[11px] font-semibold tracking-wide py-1.5 px-3 rounded-md shadow-md opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-primary-800 hidden md:block">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
}
