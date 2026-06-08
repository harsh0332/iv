import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import WhyProject from "@/sections/WhyProject";
import Overview from "@/sections/Overview";
import HighlightsGrid from "@/sections/HighlightsGrid";
import LocationIntro from "@/sections/LocationIntro";
import LocationMap from "@/sections/LocationMap";
import LocationGrid from "@/sections/LocationGrid";
import LocationTimeline from "@/sections/LocationTimeline";
import WhyNorthBhopal from "@/sections/WhyNorthBhopal";
import LocationCTA from "@/sections/LocationCTA";
import LifestyleIntro from "@/sections/LifestyleIntro";
import AmenitiesShowcase from "@/sections/AmenitiesShowcase";
import CommunityExperience from "@/sections/CommunityExperience";
import GreenLiving from "@/sections/GreenLiving";
import FutureFamily from "@/sections/FutureFamily";
import LifestyleGallery from "@/sections/LifestyleGallery";
import LifestyleCTA from "@/sections/LifestyleCTA";
import PlotOptionsIntro from "@/sections/PlotOptionsIntro";
import PlotSizeComparison from "@/sections/PlotSizeComparison";
import MasterLayoutExperience from "@/sections/MasterLayoutExperience";
import PlotDimensionsTable from "@/sections/PlotDimensionsTable";
import PlotSelectionGuide from "@/sections/PlotSelectionGuide";
import PlotCTA from "@/sections/PlotCTA";
import VisualProofIntro from "@/sections/VisualProofIntro";
import DevelopmentGallery from "@/sections/DevelopmentGallery";
import InfrastructureHighlights from "@/sections/InfrastructureHighlights";
import MasterPlanShowcase from "@/sections/MasterPlanShowcase";
import SiteProgress from "@/sections/SiteProgress";
import BeforeSiteVisitCTA from "@/sections/BeforeSiteVisitCTA";
import SiteVisitBooking from "@/sections/SiteVisitBooking";
import QuickInquiryForm from "@/sections/QuickInquiryForm";
import RequestCallback from "@/sections/RequestCallback";
import WhatsAppConversionBlock from "@/sections/WhatsAppConversionBlock";
import TrustTransparency from "@/sections/TrustTransparency";
import FinalConversionBanner from "@/sections/FinalConversionBanner";
import FAQ from "@/sections/FAQ";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col min-h-screen bg-accent text-text-main overflow-x-hidden outline-none">
      {/* 1. Above-the-fold Hero Section */}
      <Hero />

      {/* 2. Trust Bar (Horizontal strip) */}
      <TrustBar />

      {/* 3. Why This Project Section */}
      <WhyProject />

      {/* 4. Project Overview Section (Ends in Micro-Conversion block) */}
      <Overview />

      {/* 5. Key Highlights Grid (Landmark details) */}
      <HighlightsGrid />

      {/* 6. Location Intro (Sets up #location scroll anchor) */}
      <LocationIntro />

      {/* 7. Location Map / Experience */}
      <LocationMap />

      {/* 8. Connectivity Grid */}
      <LocationGrid />

      {/* 9. Landmark Distance Timeline */}
      <LocationTimeline />

      {/* 10. Why North Bhopal & Growth Drivers */}
      <WhyNorthBhopal />

      {/* 11. Location CTA Block (Soft conversion block) */}
      <LocationCTA />

      {/* 12. Lifestyle Intro Section (Scroll anchor for #amenities) */}
      <LifestyleIntro />

      {/* 13. Amenities Showcase Grid */}
      <AmenitiesShowcase />

      {/* 14. Community Experience Split Row */}
      <CommunityExperience />

      {/* 15. Green Living Experience Split Row */}
      <GreenLiving />

      {/* 16. Future Family Lifestyle Benefits */}
      <FutureFamily />

      {/* 17. Lifestyle Image Gallery Masonry */}
      <LifestyleGallery />

      {/* 18. Lifestyle CTA Block (Soft conversion block) */}
      <LifestyleCTA />
      
      {/* 19. Plot Options Intro (Scroll anchor for #plots) */}
      <PlotOptionsIntro />

      {/* 20. Plot Size Comparison */}
      <PlotSizeComparison />

      {/* 21. Master Layout Experience (Interactive Zoom & Discovery) */}
      <MasterLayoutExperience />

      {/* 22. Plot Dimensions Table (Search, Filter, Sort) */}
      <PlotDimensionsTable />

      {/* 23. Plot Selection Guide */}
      <PlotSelectionGuide />

      {/* 24. Plot CTA Section (Site Tour Hook) */}
      <PlotCTA />
      
      {/* 25. Visual Proof Intro (Scroll anchor for #gallery) */}
      <VisualProofIntro />

      {/* 26. Development Gallery Masonry with Lightbox */}
      <DevelopmentGallery />

      {/* 27. Infrastructure Highlights Cards */}
      <InfrastructureHighlights />

      {/* 28. Master Plan Showcase (Secondary Colored View) */}
      <MasterPlanShowcase />

      {/* 29. Site Progress Timeline & Location Snapshot */}
      <SiteProgress />

      {/* 30. Before Site Visit CTA */}
      <BeforeSiteVisitCTA />

      {/* 31. Site Visit Booking Form */}
      <SiteVisitBooking />

      {/* 32. Quick Inquiry Form */}
      <QuickInquiryForm />

      {/* 33. Request Callback Card */}
      <RequestCallback />

      {/* 34. WhatsApp Conversion Block */}
      <WhatsAppConversionBlock />

      {/* 35. Trust & Transparency Block */}
      <TrustTransparency />

      {/* 36. Final Conversion Banner */}
      <FinalConversionBanner />
      
      {/* 37. FAQ Accordion Section */}
      <FAQ />
    </main>
  );
}
