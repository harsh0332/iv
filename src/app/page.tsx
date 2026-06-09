import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import WhyIvyEstate from "@/sections/WhyIvyEstate";
import Overview from "@/sections/Overview";
import LocationSection from "@/sections/LocationSection";
import AmenitiesLifestyleSection from "@/sections/AmenitiesLifestyleSection";
import PlotsSection from "@/sections/PlotsSection";
import SeeTheSiteSection from "@/sections/SeeTheSiteSection";
import FAQ from "@/sections/FAQ";
import LeadCaptureSection from "@/sections/LeadCaptureSection";
import FinalConversionBanner from "@/sections/FinalConversionBanner";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col min-h-screen bg-accent text-text-main overflow-x-hidden outline-none">
      {/* 1. Above-the-fold Hero Section */}
      <Hero />

      {/* 2. Trust Bar (Real badges) */}
      <TrustBar />

      {/* 3. Why Ivy Estate (WhyProject + key highlights merged) */}
      <WhyIvyEstate />

      {/* 4. Overview + Stats (10 acres / 125 plots / RERA) */}
      <Overview />

      {/* 5. Location & Connectivity (Intro + Map + Grid + Timeline + Growth Drivers + CTA) */}
      <LocationSection />

      {/* 6. Amenities & Lifestyle (Intro + Showcase + Green Living split row + CTA) */}
      <AmenitiesLifestyleSection />

      {/* 7. Plots & Layout (Intro + Size Comparison + Zoom Map + Dimensions Table + Selection Guide + CTA) */}
      <PlotsSection />

      {/* 8. See the Site / Gallery (Visual Proof Intro + Gallery + Infrastructure Highlights + Master Plan + Site Progress + CTA) */}
      <SeeTheSiteSection />

      {/* 9. FAQ (Objection Handling - BEFORE final ask) */}
      <FAQ />

      {/* 10. Lead Capture (Primary Site-Visit & Inquiry forms + Call/WhatsApp) */}
      <LeadCaptureSection />

      {/* 11. Final Conversion Banner (Slim) */}
      <FinalConversionBanner />
    </main>
  );
}
