"use client";
import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Milestone, Zap, ShieldCheck, Layers } from "lucide-react";

export default function InfrastructureHighlights() {
  const highlights = [
    {
      id: "roads",
      title: "Finished Asphalt Roads",
      desc: "Wide dual-lane main driveways and internal roads are fully paved and roller-compacted, complete with kerbstones and pavement pathways.",
      img: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic14.jpeg",
      alt: "Completed asphalt roads and streetlights at Ivy Estate Bhopal",
      icon: <Milestone className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "power",
      title: "Local Power Substation",
      desc: "Dedicated transformers, electricity distribution posts, and underground wiring nodes have been fully set up to guarantee power stability.",
      img: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic11.jpeg",
      alt: "Completed transformer substation at Ivy Estate Bhopal",
      icon: <Zap className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "sewage",
      title: "Subterranean Sewage System",
      desc: "Underground heavy-duty drainage pipes are fully laid out below the road beds, keeping the campus clean and waterlog-free.",
      img: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic8.jpeg",
      alt: "Underground sewage line layout work at Ivy Estate Bhopal",
      icon: <Layers className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "security",
      title: "Manned Entry Gate",
      desc: "Grand entry gateway arch and security guard checkpoint cabin structures are complete, forming the gated security base.",
      img: "/ivy-estate-images/ivy-estate-plot-layout-bhopal-site-pic1.jpg",
      alt: "Main entry security gate progress at Ivy Estate Bhopal",
      icon: <ShieldCheck className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="infra-highlights" bg="ivory" py="md" className="scroll-mt-24 pt-0">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            Physical Evidence
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-2xl md:text-3xl font-serif font-medium text-primary-800 leading-tight tracking-tight"
          >
            Infrastructure Verified On-Ground
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-xs text-text-main/70 mt-2.5 leading-relaxed font-sans"
          >
            No empty claims. These 4 key infrastructure pillars are fully completed on-site 
            and ready to support immediate home building.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp(0.6, 20)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-soft bg-white p-2.5 shadow-sm hover:shadow-md transition-shadow duration-300 h-96"
            >
              {/* Image background block */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-primary-950/5 shrink-0">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content block */}
              <div className="flex-1 flex flex-col justify-between p-3.5 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="rounded-lg bg-accent p-1.5 text-secondary-500 border border-border-soft/60">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-primary-800 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-text-main/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <span className="text-[10px] font-bold text-secondary-500 uppercase tracking-widest border-t border-border-soft/60 pt-3 block">
                  Verified Site Status
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
