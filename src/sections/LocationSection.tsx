"use client";

import React from "react";
import LocationIntro from "./LocationIntro";
import LocationMap from "./LocationMap";
import LocationGrid from "./LocationGrid";
import LocationTimeline from "./LocationTimeline";
import WhyNorthBhopal from "./WhyNorthBhopal";
import LocationCTA from "./LocationCTA";

export default function LocationSection() {
  return (
    <div id="location" className="scroll-mt-24">
      {/* 1. Intro Header */}
      <LocationIntro />

      {/* 2. Google Map iframe + Layout toggle */}
      <LocationMap />

      {/* 3. Connectivity Index Grid */}
      <LocationGrid />

      {/* 4. Distance Timeline */}
      <LocationTimeline />

      {/* 5. Regional Growth Drivers */}
      <WhyNorthBhopal />

      {/* 6. Soft Location CTA (Folded at the end of the section) */}
      <LocationCTA />
    </div>
  );
}
