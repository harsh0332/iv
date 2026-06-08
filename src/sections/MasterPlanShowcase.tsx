"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/Button";
import { ZoomIn, ZoomOut, RotateCcw, Maximize, Calendar, Map, CheckCircle2 } from "lucide-react";

export default function MasterPlanShowcase() {
  const { openModal } = useModal();
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 1));
  const handleReset = () => setScale(1);
  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    setScale(1);
  };

  const layoutDetails = [
    { label: "Total Campus Area", value: "10 Acres", desc: "A planned residential township." },
    { label: "Total Plots Count", value: "125 Plots", desc: "Low-density layout ensuring green space." },
    { label: "Major Road Widths", value: "30 & 40 Ft", desc: "Double-lane asphalt boulevards." },
    { label: "Approved Status", value: "RERA Registered", desc: "Approved under No. P-OTH-17-1157." },
  ];

  return (
    <Section id="master-plan-showcase" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            Campus Plan Layout
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-2xl md:text-3xl font-serif font-medium text-primary-800 leading-tight tracking-tight"
          >
            Township Landscape Blueprint
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-xs text-text-main/70 mt-2.5 leading-relaxed font-sans"
          >
            View the colored perspective overview plan of the township. 
            Review the positions of parks, roads, gated check-posts, and general plot arrangements.
          </motion.p>
        </div>

        {/* Outer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans text-xs">
          
          {/* MAP CANVAS (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between border border-border-soft bg-accent/10 rounded-3xl p-3 md:p-4 relative">
            
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-3 z-10">
              <span className="text-[10px] font-bold text-primary-800 uppercase tracking-widest bg-white/80 border border-border-soft/60 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
                <Map className="w-3.5 h-3.5 text-secondary-500" />
                Color Master Overview
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Canvas Container */}
            <div
              ref={containerRef}
              className="relative w-full h-[320px] md:h-[450px] overflow-hidden rounded-2xl bg-white border border-border-soft/60 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            >
              <motion.div
                drag={scale > 1}
                dragConstraints={containerRef}
                dragElastic={0.05}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/ivy-estate-images/ivy-estate-plot-layout-overview.jpg"
                  alt="Ivy Estate Colored Master Plan Overview Layout"
                  fill
                  className="object-contain pointer-events-none p-2"
                  sizes="(max-w-768px) 100vw, 60vw"
                  loading="lazy"
                />
              </motion.div>

              {scale === 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-medium px-4 py-2 rounded-full pointer-events-none shadow-lg">
                  Use buttons or Pinch/Drag to explore layout features
                </div>
              )}
            </div>

            {/* Mini Conversion Link */}
            <div className="mt-3 text-center bg-accent/40 border border-border-soft/50 rounded-xl p-2.5 flex items-center justify-center gap-2">
              <span className="text-[10px] font-medium text-primary-800">
                Want a printed high-resolution copy of this layout map?
              </span>
              <button
                onClick={() => openModal("site-visit")}
                className="text-[10px] font-bold text-secondary-600 hover:text-secondary-700 underline focus:outline-none"
              >
                Get Copy at Site Cabin &rarr;
              </button>
            </div>
          </div>

          {/* DETAILS SIDE PANEL (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between border border-border-soft rounded-3xl p-5 bg-white shadow-sm">
            <div>
              <span className="text-[9px] font-bold text-secondary-500 uppercase tracking-widest block mb-1">
                Layout Specs
              </span>
              <h3 className="text-lg font-serif font-medium text-primary-800 mb-4">
                Township Parameters
              </h3>
              
              <div className="space-y-4">
                {layoutDetails.map((detail, idx) => (
                  <div key={idx} className="flex gap-3 border-b border-border-soft/50 pb-3 last:border-b-0 last:pb-0 text-left">
                    <div className="rounded-lg bg-accent p-2 text-primary-800 h-9 w-9 flex items-center justify-center shrink-0 border border-border-soft/45 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-800 leading-tight">
                        {detail.value}
                      </h4>
                      <span className="text-[10px] text-text-main/50 block mt-0.5 font-medium">
                        {detail.label} &bull; {detail.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action button */}
            <div className="mt-6 border-t border-border-soft/60 pt-5">
              <Button
                variant="primary"
                size="md"
                onClick={() => openModal("site-visit")}
                leftIcon={<Calendar className="w-4.5 h-4.5" />}
                className="w-full justify-center text-xs py-2.5"
              >
                Book Guided Site Inspection
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* FULLSCREEN ZOOM MODAL OVERLAY */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-950/95 flex flex-col justify-between p-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-3 font-sans">
              <div>
                <h3 className="text-base font-serif font-medium text-white">Color Layout Master Plan</h3>
                <p className="text-[10px] text-primary-200">Architectural Landscape Blueprint</p>
              </div>
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all"
              >
                Exit Fullscreen
              </button>
            </div>

            {/* Main Canvas */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden my-4 bg-white/5 rounded-2xl border border-white/10 cursor-grab active:cursor-grabbing">
              <motion.div
                drag
                dragElastic={0.05}
                animate={{ scale }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/ivy-estate-images/ivy-estate-plot-layout-overview.jpg"
                  alt="Ivy Estate Colored Master Plan Overview Layout"
                  fill
                  className="object-contain pointer-events-none p-4"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-3 font-sans">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleZoomIn}
                  className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 shadow-sm transition-all"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 shadow-sm transition-all"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 shadow-sm transition-all"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  toggleFullscreen();
                  openModal("site-visit");
                }}
                className="text-xs py-2"
              >
                Book Site visit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
