"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal, ModalType } from "@/context/ModalContext";
import FormBuilder from "./FormBuilder";
import { projectData } from "@/data/project-data";
import { LUXURY_EASE } from "@/lib/animations";

// Removed unused interfaces and imports

// Dynamic headings and descriptions based on modal type
const modalMeta: Record<NonNullable<ModalType>, { title: string; subtitle: string }> = {
  "site-visit": {
    title: "Schedule a Private Site Visit",
    subtitle: "Experience Ivy Estate firsthand. We offer complimentary pick-and-drop service in Bhopal.",
  },
  "lead": {
    title: "Request Brochure & Pricing",
    subtitle: "Get the complete project brochure, detailed plot layout maps, and official price sheets.",
  },
  "plot-inquiry": {
    title: "Inquire About Plot",
    subtitle: "Request availability, pricing, and registration details for your selected plot size.",
  },
  "callback": {
    title: "Request a Callback",
    subtitle: "Enter your contact details. A dedicated relationship manager will call you back within 15 minutes.",
  },
};

// Helper to filter fields based on modal objective to reduce user friction
const getFieldsForModal = (type: ModalType) => {
  const allFields = projectData.leadConfig.formFields;
  if (type === "callback") {
    return allFields.filter((f) => f.id === "name" || f.id === "phone");
  }
  if (type === "lead" || type === "plot-inquiry") {
    return allFields.filter((f) => f.id !== "visitDate");
  }
  return allFields;
};

// Custom CTA labels
const getSubmitLabelForModal = (type: ModalType) => {
  switch (type) {
    case "site-visit":
      return "Confirm Site Visit Request";
    case "callback":
      return "Call Me Back";
    case "plot-inquiry":
      return "Request Plot Availability";
    case "lead":
    default:
      return "Download Brochure & Prices";
  }
};

export default function Modal() {
  const { isOpen, activeModal, modalData, closeModal } = useModal();
  const [mounted, setMounted] = useState(false);

  // Set mounted state for portal execution
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!mounted || !activeModal) return null;

  const meta = modalMeta[activeModal];
  const data = modalData as { plotSize?: string } | null;

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: LUXURY_EASE }}
            onClick={closeModal}
            className="absolute inset-0 bg-primary-950/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.4, ease: LUXURY_EASE }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border-soft bg-white p-6 shadow-2xl md:p-8 z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 rounded-full p-2 text-text-main/50 hover:bg-accent hover:text-text-main outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-5 pr-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-500 block mb-1">
                Ivy Estate Bhopal
              </span>
              <h2 id="modal-title" className="text-xl md:text-2xl font-serif font-medium text-primary-800">
                {meta?.title}
              </h2>
              <p className="mt-1.5 text-xs text-text-main/70 leading-relaxed font-sans">
                {meta?.subtitle}
              </p>
              {data?.plotSize && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-secondary-50 border border-secondary-100 px-2 py-0.5 text-[10px] font-semibold text-secondary-600 font-sans">
                  Selected Size: {data.plotSize}
                </div>
              )}
            </div>

            {/* Modal Body / Form Container */}
            <div className="modal-form-container font-sans" id="modal-form-slot">
              <FormBuilder
                fields={getFieldsForModal(activeModal)}
                formType={activeModal}
                submitLabel={getSubmitLabelForModal(activeModal)}
                extraData={modalData ? (modalData as Record<string, unknown>) : undefined}
                onSuccess={closeModal}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
export { modalMeta };
