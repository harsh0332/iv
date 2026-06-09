"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { projectData } from "@/data/project-data";
import Button from "./Button";
import { Menu, X, Phone, MessageSquare, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Plot Options", href: "#plots" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for shrink and blur effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile body scroll locking when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      // Find element offset and scroll taking sticky header height into account
      const headerHeight = isScrolled ? 70 : 85;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 font-sans ${
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-border-soft/60"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex flex-col select-none group focus-visible:outline-none"
          >
            <span className="text-xl md:text-2xl font-serif font-bold tracking-wide text-primary-800 group-hover:text-primary-900 transition-colors">
              {projectData.projectName}
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-secondary-600 -mt-0.5">
              Bhopal
            </span>
          </a>

          {/* Menu Center (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-semibold text-text-main/80 hover:text-primary-800 transition-colors duration-200 uppercase tracking-wider focus-visible:outline-none focus-visible:text-primary-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="text-xs font-semibold text-text-main/80 hover:text-primary-800 transition-colors duration-200 uppercase tracking-wider focus-visible:outline-none focus-visible:text-primary-800"
            >
              Contact
            </a>
          </nav>

          {/* Right Side CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${projectData.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-primary-800 hover:text-primary-900 transition-colors focus-visible:outline-none"
              aria-label={`Call Sales: ${projectData.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{projectData.contact.phoneDisplay}</span>
            </a>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => openModal("site-visit")}
              leftIcon={<Calendar className="w-3.5 h-3.5" />}
            >
              Book Free Site Visit
            </Button>
          </div>

          {/* Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-800 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: LUXURY_EASE }}
            className="fixed inset-0 z-30 w-full h-full bg-white flex flex-col pt-24 pb-8 px-6 lg:hidden overflow-y-auto"
          >
            {/* Nav Links List */}
            <nav className="flex flex-col gap-6 text-center my-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3, ease: LUXURY_EASE }}
                  className="text-lg font-serif font-medium text-primary-800 hover:text-secondary-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3, ease: LUXURY_EASE }}
                className="text-lg font-serif font-medium text-primary-800 hover:text-secondary-600 transition-colors"
              >
                Contact
              </motion.a>
            </nav>

            {/* Mobile Conversion CTAs */}
            <div className="flex flex-col gap-3.5 mt-auto pt-8 border-t border-border-soft font-sans">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal("site-visit");
                }}
                className="w-full justify-center"
                leftIcon={<Calendar className="w-5 h-5" />}
              >
                Book Free Site Visit
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={projectData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-success-muted text-white font-semibold text-sm hover:opacity-95 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
                
                <a
                  href={`tel:${projectData.contact.phoneRaw}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary-550 border border-secondary-400 bg-secondary-50 text-secondary-700 font-semibold text-sm hover:bg-secondary-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
              
              <div className="text-center text-[10px] text-text-main/50 mt-4 leading-normal">
                Registered under MP RERA: {projectData.reraNumber}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
