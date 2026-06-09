"use client";

import React from "react";
import LifestyleIntro from "./LifestyleIntro";
import AmenitiesShowcase from "./AmenitiesShowcase";
import GreenLiving from "./GreenLiving";
import LifestyleCTA from "./LifestyleCTA";

export default function AmenitiesLifestyleSection() {
  return (
    <div id="amenities" className="scroll-mt-24">
      {/* 1. Intro Header */}
      <LifestyleIntro />

      {/* 2. Amenities Grid */}
      <AmenitiesShowcase />

      {/* 3. Single Lifestyle Split Row (Green Living / Healthy Environment) */}
      <GreenLiving />

      {/* 4. Soft Lifestyle CTA (Folded at the end of the section) */}
      <LifestyleCTA />
    </div>
  );
}
