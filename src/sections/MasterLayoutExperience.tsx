"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { plotsList, PlotDetail } from "@/data/plots-list";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/Button";
import { ZoomIn, ZoomOut, RotateCcw, Maximize, Map, Info } from "lucide-react";

export default function MasterLayoutExperience() {
  const { openModal } = useModal();
  const [selectedPlot, setSelectedPlot] = useState<PlotDetail>(plotsList[0]);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch handling for pinch zoom gesture support on mobile devices
  const [initialDistance, setInitialDistance] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setInitialDistance(distance);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistance !== null) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = distance / initialDistance;
      // Incremental scale update to ensure smooth transitions
      setScale((prev) => Math.min(Math.max(prev * factor, 1), 3));
      setInitialDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    setInitialDistance(null);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 1));
  };

  const handleReset = () => {
    setScale(1);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    setScale(1); // Reset scale on toggle to prevent offset issues
  };

  return (
    <Section id="master-layout-experience" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            Interactive Site Plan
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-2xl md:text-3xl font-serif font-medium text-primary-800 leading-tight tracking-tight"
          >
            Explore the Layout Map
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-xs text-text-main/70 mt-2.5 leading-relaxed font-sans"
          >
            Zoom, drag, and explore the layout map below. Select a plot from the directory 
            to view specific dimensions and request real-time availability.
          </motion.p>
        </div>

        {/* Outer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* MAP VIEWER (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between border border-border-soft bg-accent/10 rounded-3xl p-3 md:p-4 relative">
            
            {/* Viewer Toolbar */}
            <div className="flex items-center justify-between mb-3 z-10">
              <span className="text-[10px] font-bold text-primary-800 uppercase tracking-widest bg-white/80 border border-border-soft/60 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
                <Map className="w-3.5 h-3.5 text-secondary-500" />
                Master Site Plan
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Reset Zoom"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-xl bg-white border border-border-soft/80 text-text-main/70 hover:text-primary-800 hover:border-secondary-300 shadow-sm transition-all active:scale-95"
                  title="Fullscreen View"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Canvas Container */}
            <div
              ref={containerRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative w-full h-[350px] md:h-[480px] overflow-hidden rounded-2xl bg-white border border-border-soft/60 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
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
                  src="/ivy-estate-images/ivy-estate-bhopal-layout-plan2.jpg"
                  alt="Ivy Estate Gated Colony Layout Map Plan"
                  fill
                  className="object-contain pointer-events-none p-2"
                  sizes="(max-w-768px) 100vw, 60vw"
                  priority
                />
              </motion.div>

              {/* Zoom Instruction Toast */}
              {scale === 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-medium px-4 py-2 rounded-full pointer-events-none shadow-lg transition-opacity duration-300">
                  Double tap / Pinch or use buttons to Zoom and Drag
                </div>
              )}
            </div>

            {/* Sticky Micro-Conversion Banner */}
            <div className="mt-3 bg-primary-900 text-white rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-primary-800">
              <div className="flex items-center gap-2.5 text-left">
                <div className="rounded-lg bg-white/10 p-2 shrink-0">
                  <Info className="w-4 h-4 text-secondary-300" />
                </div>
                <p className="text-[11px] font-medium leading-tight text-primary-100">
                  Want to map these dimensions directly on-ground? Schedule a guided tour.
                </p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => openModal("site-visit")}
                className="w-full sm:w-auto text-[11px] py-1.5 px-3 shrink-0"
              >
                Schedule Site Visit
              </Button>
            </div>
          </div>

          {/* PLOT DISCOVERY SIDEBAR (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between border border-border-soft rounded-3xl p-5 bg-white shadow-sm">
            <div>
              <span className="text-[9px] font-bold text-secondary-500 uppercase tracking-widest block mb-1">
                Plot Directory
              </span>
              <h3 className="text-lg font-serif font-medium text-primary-800 mb-3">
                Plot Discovery Panel
              </h3>
              <p className="text-xs text-text-main/70 mb-5 leading-relaxed">
                Click any plot number in the grid below to view detailed specifications, size, and layout facing.
              </p>

              {/* Grid of Plot Numbers */}
              <div className="max-h-[220px] overflow-y-auto border border-border-soft/60 rounded-xl p-3 bg-accent/20 mb-6 scrollbar-thin">
                <div className="grid grid-cols-5 gap-1.5">
                  {plotsList.map((plot) => {
                    const isSelected = selectedPlot.plotNo === plot.plotNo;
                    return (
                      <button
                        key={plot.plotNo}
                        onClick={() => setSelectedPlot(plot)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                          isSelected
                            ? "bg-primary-800 border-primary-800 text-white shadow-sm scale-95"
                            : "bg-white border-border-soft/80 text-text-main/80 hover:border-secondary-300 hover:text-primary-800"
                        }`}
                      >
                        {plot.plotNo}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Selected Plot Details Card */}
            <div className="border border-border-soft bg-accent/10 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-border-soft/60 pb-2.5 mb-3">
                  <span className="text-sm font-bold text-primary-800">
                    Plot #{selectedPlot.plotNo}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-wider bg-white border border-border-soft/60 px-2 py-0.5 rounded text-text-main/60">
                    {selectedPlot.category}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-left text-xs mb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-main/50 block">Area Size</span>
                    <span className="font-semibold text-primary-800">{selectedPlot.sizeSqFt.toLocaleString()} Sq. Ft.</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-main/50 block">Dimensions</span>
                    <span className="font-semibold text-primary-800">{selectedPlot.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-main/50 block">Facing Direction</span>
                    <span className="font-semibold text-primary-800">{selectedPlot.facing} Facing</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-main/50 block">Availability</span>
                    <span className="font-semibold text-secondary-600">On Request</span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  openModal("plot-inquiry", {
                    plotSize: `Plot ${selectedPlot.plotNo} (${selectedPlot.sizeSqFt.toLocaleString()} Sq. Ft.)`,
                  })
                }
                className="w-full text-xs py-2 justify-center"
              >
                Inquire About Plot #{selectedPlot.plotNo}
              </Button>
            </div>

          </div>
        </div>
      </Container>

      {/* FULLSCREEN CANNOT-BE-MISSED OVERLAY MODAL */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-950/95 flex flex-col justify-between p-4"
          >
            {/* Fullscreen Header */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-3 font-sans">
              <div>
                <h3 className="text-base font-serif font-medium text-white">Interactive Master Plan</h3>
                <p className="text-[10px] text-primary-200">Plot Directory Map Explorer</p>
              </div>
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all"
              >
                Exit Fullscreen
              </button>
            </div>

            {/* Canvas */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="flex-1 relative flex items-center justify-center overflow-hidden my-4 bg-white/5 rounded-2xl border border-white/10 cursor-grab active:cursor-grabbing"
            >
              <motion.div
                drag
                dragElastic={0.05}
                animate={{ scale }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/ivy-estate-images/ivy-estate-bhopal-layout-plan2.jpg"
                  alt="Ivy Estate Master Layout Plan"
                  fill
                  className="object-contain pointer-events-none p-4"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Fullscreen Footer Controls */}
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

              {/* Inquire overlay shortcut */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-primary-200 hidden sm:inline-block">
                  Selected Plot #{selectedPlot.plotNo} ({selectedPlot.sizeSqFt} Sq. Ft.)
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    toggleFullscreen();
                    openModal("plot-inquiry", {
                      plotSize: `Plot ${selectedPlot.plotNo} (${selectedPlot.sizeSqFt.toLocaleString()} Sq. Ft.)`,
                    });
                  }}
                  className="text-xs py-2"
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
