"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { projectData } from "@/data/project-data";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export default function MobileConversionBar() {
  const { openModal } = useModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden w-full bg-white/95 backdrop-blur-md border-t border-border-soft shadow-lg px-4 py-3 pb-safe-bottom font-sans">
      <div className="flex gap-2 items-center w-full max-w-md mx-auto">
        {/* 1. CALL NOW (25% split) */}
        <a
          href={`tel:${projectData.contact.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center h-12 rounded-xl border border-primary-700/25 bg-accent/30 text-primary-800 transition-colors hover:bg-accent/50 focus-visible:outline-none"
          aria-label="Call Sales Office"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* 2. WHATSAPP (25% split) */}
        <a
          href={projectData.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center h-12 rounded-xl bg-success-muted text-white transition-opacity hover:opacity-95 focus-visible:outline-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 fill-white" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* 3. BOOK SITE VISIT (50% split - Primary Action) */}
        <button
          onClick={() => openModal("site-visit")}
          className="flex-[2] flex items-center justify-center gap-2 h-12 rounded-xl bg-luxury-gold text-white font-bold text-xs uppercase tracking-wider shadow-sm shadow-secondary-900/10 hover:opacity-95 transition-opacity focus-visible:outline-none cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
