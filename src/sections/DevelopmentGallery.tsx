"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic1.jpg",
    alt: "Grand main entry gate and security cabin under progress",
    category: "Entrance & Security",
    title: "Gated Checkpoint",
  },
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic2.jpeg",
    alt: "Internal road asphalt paving work on-site",
    category: "Road Construction",
    title: "Asphalt Laying",
  },
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic3.jpeg",
    alt: "Electric poles and wiring work at Ivy Estate",
    category: "Electrification",
    title: "Wiring & Lighting",
  },
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic6.jpeg",
    alt: "Horticulture and walkway paving progress in colony park",
    category: "Open Parks",
    title: "Park Landscaping",
  },
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic8.jpeg",
    alt: "Underground sewage line installation on-site",
    category: "Subterranean Sewage",
    title: "Sanitation Piping",
  },
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic11.jpeg",
    alt: "Colony electric substation and transformer installation",
    category: "Electrification",
    title: "Power Substation",
  },
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic12.jpeg",
    alt: "Avenue tree plantation along internal roads",
    category: "Green Spaces",
    title: "Roadside Plantations",
  },
  {
    src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-122.jpeg",
    alt: "Residential plot ready for construction at Ivy Estate",
    category: "Layout Plots",
    title: "Levelled Plot",
  },
];

export default function DevelopmentGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const openLightbox = (idx: number) => {
    setFormDataTouch(0); // clear any past swipe tracks
    setLightboxIndex(idx);
  };

  // Temporary function to safely prevent typescript unused var warnings
  const setFormDataTouch = (val: number) => {
    setTouchStartX(val);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev === galleryImages.length - 1 ? 0 : (prev as number) + 1));
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev === 0 ? galleryImages.length - 1 : (prev as number) - 1));
  }, []);

  // Handle mobile swipe gestures inside the lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Threshold of 50px to trigger image swap
    if (diff > 50) {
      nextImage();
    } else if (diff < -50) {
      prevImage();
    }
  };

  // Sync scroll lock with lightbox open state
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <Section id="development-gallery" bg="white" py="md" className="scroll-mt-24 pt-0">
      <Container>
        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans"
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(0.6, 20)}
              onClick={() => openLightbox(idx)}
              className="group relative overflow-hidden rounded-2xl border border-border-soft bg-accent/20 p-1.5 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-300 mb-0.5">
                    {image.category}
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-white leading-tight">
                      {image.title}
                    </p>
                    <Maximize2 className="w-3.5 h-3.5 text-white shrink-0 opacity-80" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-950/95 flex flex-col justify-between p-4"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-3 font-sans">
              <div className="text-left">
                <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-400 block">
                  {galleryImages[lightboxIndex].category}
                </span>
                <h3 className="text-sm font-semibold text-white leading-none mt-1">
                  {galleryImages[lightboxIndex].title}
                </h3>
              </div>
              
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Image Canvas */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="flex-1 relative flex items-center justify-center my-4 overflow-hidden"
            >
              <button
                onClick={prevImage}
                className="absolute left-2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full max-w-4xl max-h-[70vh] aspect-[4/3] md:aspect-auto">
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Navigation Indicators */}
            <div className="text-center text-[10px] text-primary-200 border-t border-white/10 pt-3 font-sans">
              Image {lightboxIndex + 1} of {galleryImages.length} &bull; Use Left / Right Arrows to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
