"use client";

import React from "react";
import VisualProofIntro from "./VisualProofIntro";
import DevelopmentGallery from "./DevelopmentGallery";
import InfrastructureHighlights from "./InfrastructureHighlights";
import MasterPlanShowcase from "./MasterPlanShowcase";
import SiteProgress from "./SiteProgress";
import BeforeSiteVisitCTA from "./BeforeSiteVisitCTA";

export default function SeeTheSiteSection() {
  return (
    <div id="gallery" className="scroll-mt-24">
      {/* 1. Intro Header */}
      <VisualProofIntro />

      {/* 2. On-Ground Lightbox Photo Gallery */}
      <DevelopmentGallery />

      {/* 3. Infrastructure Focus Highlights */}
      <InfrastructureHighlights />

      {/* 4. Layout Colored Map View */}
      <MasterPlanShowcase />

      {/* 5. Development Timeline & snapshots */}
      <SiteProgress />

      {/* 6. Soft Visual Proof CTA (Folded at the end of the section) */}
      <BeforeSiteVisitCTA />
    </div>
  );
}
