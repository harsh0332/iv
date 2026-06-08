"use client";
import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function LifestyleGallery() {
  const galleryItems = [
    {
      id: "img1",
      src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-122.jpeg",
      alt: "Levelled plots at Ivy Estate ready for villa construction",
      title: "Construction Ready Plots",
      subtitle: "Levelled terrain with concrete demarcation stones in place.",
      gridClass: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
    },
    {
      id: "img2",
      src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-124.jpeg",
      alt: "Ivy Estate campus overview showing completed roads and streetlights",
      title: "Completed Avenues",
      subtitle: "Wide main driveways and electrification grids fully installed.",
      gridClass: "md:col-span-1 aspect-square",
    },
    {
      id: "img3",
      src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-photo-125.jpeg",
      alt: "Community park lawn inside Ivy Estate",
      title: "Central Colony Green",
      subtitle: "Planned open recreation park turf for resident families.",
      gridClass: "md:col-span-1 aspect-square",
    },
    {
      id: "img4",
      src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic1.jpg",
      alt: "Grand main entry gate and security cabin under progress",
      title: "Manned Entry Arch",
      subtitle: "Secured gated entrance structure nearing on-site completion.",
      gridClass: "md:col-span-1 aspect-square",
    },
    {
      id: "img5",
      src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic6.jpeg",
      alt: "Horticulture and walkway paving progress in colony park",
      title: "Park Landscaping",
      subtitle: "Active plantation and walk-path landscaping underway.",
      gridClass: "md:col-span-1 md:row-span-2 aspect-[4/5] md:aspect-auto",
    },
    {
      id: "img6",
      src: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic12.jpeg",
      alt: "Planted avenue trees lining the internal roads at Ivy Estate",
      title: "Green Avenue Planting",
      subtitle: "Fringe trees planted along streets to create natural corridors.",
      gridClass: "md:col-span-2 aspect-[2/1]",
    },
  ];

  return (
    <Section id="lifestyle-gallery" bg="ivory" py="lg" className="scroll-mt-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            On-Site Scenery
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight"
          >
            A Glimpse of the Developed Campus
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-sm text-text-main/70 mt-3 leading-relaxed font-sans"
          >
            View authentic on-site photos illustrating finished asphalt roads, 
            gated checkpoints, utility stations, and landscaped parks.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp(0.6, 20)}
              className={`group relative overflow-hidden rounded-2xl border border-border-soft bg-white p-1.5 shadow-sm ${item.gridClass}`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-primary-950/5 aspect-square md:aspect-auto">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-300 mb-1">
                    {item.title}
                  </span>
                  <p className="text-xs text-primary-100 font-sans leading-normal max-w-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
