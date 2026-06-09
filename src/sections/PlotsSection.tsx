"use client";

import React from "react";
import PlotOptionsIntro from "./PlotOptionsIntro";
import PlotSizeComparison from "./PlotSizeComparison";
import MasterLayoutExperience from "./MasterLayoutExperience";
import PlotDimensionsTable from "./PlotDimensionsTable";
import PlotSelectionGuide from "./PlotSelectionGuide";
import PlotCTA from "./PlotCTA";

export default function PlotsSection() {
  return (
    <div id="plots" className="scroll-mt-24">
      {/* 1. Intro Header */}
      <PlotOptionsIntro />

      {/* 2. Primary & Odd Size Card Comparison */}
      <PlotSizeComparison />

      {/* 3. Interactive Layout Map Selector */}
      <MasterLayoutExperience />

      {/* 4. Complete Plot Directory Table */}
      <PlotDimensionsTable />

      {/* 5. Buying Match Guidelines */}
      <PlotSelectionGuide />

      {/* 6. Soft Plots CTA (Folded at the end of the section) */}
      <PlotCTA />
    </div>
  );
}
