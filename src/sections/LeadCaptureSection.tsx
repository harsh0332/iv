"use client";

import React from "react";
import TrustTransparency from "./TrustTransparency";
import SiteVisitBooking from "./SiteVisitBooking";
import QuickInquiryForm from "./QuickInquiryForm";
import RequestCallback from "./RequestCallback";
import WhatsAppConversionBlock from "./WhatsAppConversionBlock";

export default function LeadCaptureSection() {
  return (
    <div id="contact" className="scroll-mt-24">
      {/* 1. Trust & Transparency Block */}
      <TrustTransparency />

      {/* 2. Main Site Visit Booking Form */}
      <SiteVisitBooking />

      {/* 3. Quick Inquiry Form */}
      <QuickInquiryForm />

      {/* 4. Call Back Request Card */}
      <RequestCallback />

      {/* 5. Direct Call / WhatsApp Floating Block */}
      <WhatsAppConversionBlock />
    </div>
  );
}
