"use client";

import React from "react";
import TrustTransparency from "./TrustTransparency";
import SiteVisitBooking from "./SiteVisitBooking";
import WhatsAppConversionBlock from "./WhatsAppConversionBlock";

export default function LeadCaptureSection() {
  return (
    <div id="contact" className="scroll-mt-24">
      {/* 1. Trust & Transparency Block */}
      <TrustTransparency />

      {/* 2. Main Site Visit Booking Form (ONE Primary Form) */}
      <SiteVisitBooking />

      {/* 3. Direct Call / WhatsApp Floating Block */}
      <WhatsAppConversionBlock />
    </div>
  );
}
