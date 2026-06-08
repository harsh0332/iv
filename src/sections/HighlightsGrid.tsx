"use client";

import React from "react";
import { Container, Section, Grid } from "@/components/SectionWrapper";
import { projectData } from "@/data/project-data";
import { FeatureCard, InfoCard } from "@/components/Cards";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function HighlightsGrid() {
  // Extract distances to fit in InfoCard format
  const educationRows = projectData.distances
    .filter((d) => d.category === "Education")
    .map((d) => ({ label: d.destination, value: `${d.distance} (${d.duration})` }));

  const transitRows = projectData.distances
    .filter((d) => d.category === "Transit")
    .map((d) => ({ label: d.destination, value: `${d.distance} (${d.duration})` }));

  const otherRows = projectData.distances
    .filter((d) => d.category !== "Education" && d.category !== "Transit")
    .map((d) => ({ label: d.destination, value: `${d.distance} (${d.duration})` }));

  return (
    <Section id="highlights" bg="ivory" py="lg" className="scroll-mt-24">
      <Container>
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-500 mb-2 block">
            Rapid Layout Scanning
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-800 leading-tight tracking-tight">
            Key Project Highlights
          </h2>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
        >
          <Grid cols={3}>
            {/* Card 1: Educational Proximity InfoCard */}
            <motion.div variants={fadeUp(0.6)} className="h-full">
              <InfoCard
                title="Educational Proximity"
                subtitle="High appreciation zone"
                metaText="APU Campus"
                detailRows={educationRows}
                className="h-full border-border-soft/60"
              />
            </motion.div>

            {/* Card 2: Transit Connectivity InfoCard */}
            <motion.div variants={fadeUp(0.6)} className="h-full">
              <InfoCard
                title="Transit & Connectivity"
                subtitle="Bhopal Junction & Airport links"
                metaText="Outer Ring Rd"
                detailRows={transitRows}
                className="h-full border-border-soft/60"
              />
            </motion.div>

            {/* Card 3: Healthcare & Proximity InfoCard */}
            <motion.div variants={fadeUp(0.6)} className="h-full">
              <InfoCard
                title="Social Infrastructure"
                subtitle="Hospitals and retail grids"
                metaText="Healthcare"
                detailRows={otherRows}
                className="h-full border-border-soft/60"
              />
            </motion.div>

            {/* Card 4: Gated Security FeatureCard */}
            <motion.div variants={fadeUp(0.6)}>
              <FeatureCard
                title="24/7 Gated Perimeter"
                category="Security"
                iconName="Shield"
                description="Equipped with a grand entrance archway, manned check-posts, and continuous masonry boundary walls enclosing the 10-acre sector."
                className="h-full border-border-soft/60"
              />
            </motion.div>

            {/* Card 5: Internal Roads FeatureCard */}
            <motion.div variants={fadeUp(0.6)}>
              <FeatureCard
                title="Wide Asphalt Grids"
                category="Infrastructure"
                iconName="Road"
                description="Engineered double-lane main boulevard and wide internal roads with paved walking paths and storm drainage complete on-site."
                className="h-full border-border-soft/60"
              />
            </motion.div>

            {/* Card 6: Regulatory Compliance FeatureCard */}
            <motion.div variants={fadeUp(0.6)}>
              <FeatureCard
                title="100% RERA Registered"
                category="Legal Compliance"
                iconName="FileText"
                description={`MP RERA Registration No. ${projectData.reraNumber}. All layout approvals, diversion certificates, and development mutation logs are fully cleared.`}
                className="h-full border-border-soft/60"
              />
            </motion.div>
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
