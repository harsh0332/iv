"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { projectData } from "@/data/project-data";
// Group categories for cleaner UI tabs
const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "Project & RERA" },
  { id: "location", label: "Location & Connectivity" },
  { id: "plots", label: "Plots & Infrastructure" },
  { id: "financing", label: "Loan & Layout" },
];

// Helper to map project-data categories to our tabs
const getTabIdForCategory = (category: string): string => {
  const cat = category.toLowerCase();
  if (cat === "compliance" || cat === "developer" || cat === "general") return "general";
  if (cat === "location" || cat === "transit") return "location";
  if (cat === "plots" || cat === "amenities" || cat === "security") return "plots";
  if (cat === "financing" || cat === "timeline" || cat === "infrastructure") return "financing";
  return "general";
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter FAQs based on active tab
  const filteredFAQs = projectData.faq.filter((item) => {
    if (activeTab === "all") return true;
    return getTabIdForCategory(item.category) === activeTab;
  });

  // Generate dynamic FAQ JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": projectData.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <Section id="faq" bg="white" py="lg" className="scroll-mt-24 border-t border-border-soft/60">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block">
            Clear Answers
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-text-main/80 leading-relaxed font-sans max-w-2xl">
            Have questions about RERA approvals, plot dimensions, bank loan integrations, or site inspections? 
            Select a category below to find detailed, verified responses to help guide your decision.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-border-soft/40 overflow-x-auto scrollbar-none font-sans">
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary-800 text-white shadow-sm"
                  : "bg-accent hover:bg-border-soft/50 text-text-main/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans text-xs">
          {/* Quick Notice Column (Desktop: 4 cols) */}
          <div className="lg:col-span-4 text-left">
            <div className="bg-accent/40 border border-border-soft/60 rounded-3xl p-6 md:p-8 sticky top-28">
              <div className="text-secondary-500 bg-white p-3 rounded-full w-fit border border-border-soft/40 shadow-sm mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-medium text-primary-800 mb-3">
                Need Specific Help?
              </h3>
              <p className="text-text-main/70 leading-relaxed mb-6">
                If you have a query about a specific plot placement or require customized layout information, 
                our project advisors are ready to help you directly.
              </p>
              
              <div className="flex flex-col gap-3">
                <a
                  href={projectData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 inline-flex items-center justify-center bg-success-muted hover:opacity-95 text-white font-semibold rounded-xl transition-all shadow-sm"
                >
                  Inquire on WhatsApp
                </a>
                <a
                  href={`tel:${projectData.contact.phoneRaw}`}
                  className="w-full h-11 inline-flex items-center justify-center bg-white hover:bg-accent border border-border-soft text-primary-800 font-semibold rounded-xl transition-colors"
                >
                  Call Sales Desk
                </a>
              </div>
            </div>
          </div>

          {/* Accordion List Column (Desktop: 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-left">
            <AnimatePresence mode="popLayout">
              {filteredFAQs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    key={faq.id}
                    className="border border-border-soft rounded-2xl bg-white overflow-hidden shadow-sm hover:border-primary-500/30 transition-colors duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleAccordion(faq.id);
                        }
                      }}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:bg-accent/30 cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="font-serif text-sm font-semibold text-primary-800 pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-primary-800/60 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-border-soft/40 text-text-main/80 leading-relaxed font-sans text-xs">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
