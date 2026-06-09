"use client";

import React from "react";
import { projectData } from "@/data/project-data";
import { useModal } from "@/context/ModalContext";
import { Phone, MessageSquare, Mail, MapPin, ExternalLink, Calendar } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  const { openModal } = useModal();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        // Adjust for sticky header height
        const headerHeight = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary-900 text-white border-t border-primary-800 font-sans text-xs pt-16 pb-24 md:pb-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info (Desktop: 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-xl font-serif font-bold tracking-wide text-white mb-2">
              {projectData.projectName}
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-secondary-400 mb-4">
              Bhopal Plotted Campus
            </span>
            <p className="text-white/70 leading-relaxed mb-4">
              A premium 10-acre gated residential colony in North Bhopal, offering gated residential plots 
              with asphalt streetscapes, electrical nodes, and RERA-approved title structures planned or in progress.
            </p>
            <div className="text-[10px] text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              MP RERA ID: {projectData.reraNumber}
            </div>
          </div>

          {/* Column 2: Quick Links (Desktop: 2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-secondary-400 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 font-medium">
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "#")}
                className="text-white/80 hover:text-secondary-400 transition-colors cursor-pointer"
              >
                Overview
              </a>
              <a
                href="#amenities"
                onClick={(e) => handleLinkClick(e, "#amenities")}
                className="text-white/80 hover:text-secondary-400 transition-colors cursor-pointer"
              >
                Amenities
              </a>
              <a
                href="#location"
                onClick={(e) => handleLinkClick(e, "#location")}
                className="text-white/80 hover:text-secondary-400 transition-colors cursor-pointer"
              >
                Location
              </a>
              <a
                href="#plots"
                onClick={(e) => handleLinkClick(e, "#plots")}
                className="text-white/80 hover:text-secondary-400 transition-colors cursor-pointer"
              >
                Plot Options
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleLinkClick(e, "#gallery")}
                className="text-white/80 hover:text-secondary-400 transition-colors cursor-pointer"
              >
                Gallery
              </a>
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className="text-white/80 hover:text-secondary-400 transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Column 3: Contact Info (Desktop: 3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-secondary-400 mb-4">
              Contact Desk
            </h4>
            <div className="flex flex-col gap-4 text-white/80">
              <a
                href={`tel:${projectData.contact.phoneRaw}`}
                className="flex items-start gap-3 hover:text-secondary-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-[10px] uppercase text-white/50 font-sans tracking-wide">Phone</strong>
                  {projectData.contact.phoneDisplay}
                </span>
              </a>
              
              <a
                href={projectData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-secondary-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-[10px] uppercase text-white/50 font-sans tracking-wide">WhatsApp</strong>
                  Instant Prospectus & Rates
                </span>
              </a>

              <a
                href={`mailto:${projectData.contact.email}`}
                className="flex items-start gap-3 hover:text-secondary-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-[10px] uppercase text-white/50 font-sans tracking-wide">Email</strong>
                  {projectData.contact.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-[10px] uppercase text-white/50 font-sans tracking-wide">Site Address</strong>
                  Mungalia Kot, Junction of Vidisha Road and Outer Ring Road, Bhopal, MP
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Site Visit CTA (Desktop: 3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-secondary-400 mb-4">
              Book a Visit
            </h4>
            <p className="text-white/70 leading-relaxed mb-6">
              Take a guided tour of the site to see the layout development, planned roadways, and infrastructure progress.
            </p>
            
            <div className="flex flex-col gap-3 w-full">
              <Button
                variant="secondary"
                size="md"
                onClick={() => openModal("site-visit")}
                className="w-full justify-center text-primary-900 border-secondary-400 hover:bg-secondary-600 hover:text-white"
                leftIcon={<Calendar className="w-4.5 h-4.5" />}
              >
                Schedule Site Visit
              </Button>
              <a
                href={projectData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-success hover:opacity-95 text-white font-semibold shadow-sm w-full transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-[11px] gap-6">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {currentYear} Ivy Estate Bhopal Plotted Campus. All rights reserved.</p>
            <p className="text-white/40">Project information is provided for informational purposes. Buyers are encouraged to verify details before making purchase decisions.</p>
          </div>
          <div className="flex gap-6 shrink-0">
            <a
              href="https://rera.mp.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Verify on MP RERA</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
