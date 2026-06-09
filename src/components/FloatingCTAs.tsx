"use client";

import React from "react";
import { projectData } from "@/data/project-data";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCTAs() {
  return (
    // Only render on desktop (hidden on lg:hidden) to avoid overlap with MobileConversionBar
    <div className="hidden lg:flex fixed bottom-8 right-8 z-35 flex-col gap-3 items-end font-sans">
      {/* FLOATING WHATSAPP BUTTON (Pulsing) */}
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
