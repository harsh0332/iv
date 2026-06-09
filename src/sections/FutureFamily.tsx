"use client";
import React from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Home, Compass, Trees, Landmark, Milestone, Layers } from "lucide-react";

export default function FutureFamily() {
  const benefits = [
    {
      id: "space",
      title: "Space to Build Your Vision",
      desc: "Ample plot sizes (1,500 and 2,100 Sq. Ft.) allow you to design customized 3BHK or 4BHK independent duplex villas with private front lawns, balconies, and parking.",
      icon: <Home className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "roads",
      title: "Double-Lane Planned Roads",
      desc: "Wide asphalt avenues with demarcated walkways ensure that daily commutes inside the campus are smooth, safe, and dust-free for kids and senior citizens alike.",
      icon: <Milestone className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "environment",
      title: "Low-Density Open Campus",
      desc: "With only 125 plots spread over 10 acres, you live in an uncrowded atmosphere. Beautifully landscaped community parks provide fresh air and natural serenity.",
      icon: <Trees className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "location",
      title: "Highly Connected Address",
      desc: "Positioned right at the junction of Vidisha Road and the Bhopal Outer Ring Road, keeping workplaces and city retail centers within a quick 15-20 minute drive.",
      icon: <Compass className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "infrastructure",
      title: "Underground Infrastructure Layout",
      desc: "Planned underground wiring, covered drainage layout, and water storage provisions are designed to keep the campus neat and remove overhead visual clutter.",
      icon: <Layers className="w-5 h-5 text-secondary-500" />,
    },
    {
      id: "potential",
      title: "Strong Institutional Proximity",
      desc: "Sitting just 1 km from the upcoming Azim Premji University campus, offering excellent proximity to educational facilities in a growing neighborhood.",
      icon: <Landmark className="w-5 h-5 text-secondary-500" />,
    },
  ];

  return (
    <Section id="future-family" bg="white" py="lg" className="scroll-mt-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.6)}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block"
          >
            Built for Generations
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.7)}
            className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight"
          >
            A Foundation for Your Family&apos;s Future
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.8)}
            className="text-sm text-text-main/70 mt-3 leading-relaxed font-sans"
          >
            Constructing a home is a milestone. We provide the structural base, legal security, 
            and premium surroundings so that you can focus on building a comfortable life.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={fadeUp(0.6, 20)}
              className="flex flex-col text-left p-6 bg-accent/30 rounded-2xl border border-border-soft/60 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="rounded-xl bg-white p-2.5 text-secondary-500 w-10 h-10 flex items-center justify-center mb-4 border border-border-soft/80 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-sm font-semibold text-primary-800 tracking-tight">
                {benefit.title}
              </h3>
              <p className="mt-2 text-xs text-text-main/70 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
