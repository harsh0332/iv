"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { hoverScale, LUXURY_EASE } from "@/lib/animations";
import * as Icons from "lucide-react";

// Helper to render lucide icon by string name dynamically
function DynamicIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

// 1. FEATURE CARD (For Amenities or USPs)
interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  category?: string;
  className?: string;
}

export function FeatureCard({ title, description, iconName, category, className = "" }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={hoverScale}
      className={`group relative rounded-2xl border border-border-soft bg-white p-6 transition-all duration-300 hover:shadow-md hover:shadow-primary-950/5 ${className}`}
    >
      <div className="absolute top-0 left-0 h-1.5 w-0 bg-luxury-gold transition-all duration-300 group-hover:w-full rounded-t-2xl" />
      <div className="inline-flex items-center justify-center rounded-xl bg-primary-50 p-3 text-primary-800 transition-colors duration-300 group-hover:bg-primary-800 group-hover:text-white mb-5">
        <DynamicIcon name={iconName} className="w-6 h-6" />
      </div>
      {category && (
        <span className="block text-[10px] font-bold uppercase tracking-wider text-secondary-500 mb-1">
          {category}
        </span>
      )}
      <h3 className="text-lg font-serif font-medium text-primary-800 group-hover:text-primary-900 transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-main/80 leading-relaxed font-sans">
        {description}
      </p>
    </motion.div>
  );
}

// 2. INFO CARD (For Connectivity/Distances)
interface InfoCardProps {
  title: string;
  subtitle?: string;
  metaText?: string;
  detailRows: { label: string; value: string }[];
  className?: string;
}

export function InfoCard({ title, subtitle, metaText, detailRows, className = "" }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.3, ease: LUXURY_EASE } }}
      className={`rounded-2xl border border-border-soft bg-white p-6 shadow-sm ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-serif font-medium text-primary-800">{title}</h3>
          {subtitle && <p className="text-xs text-secondary-500 font-medium font-sans mt-0.5">{subtitle}</p>}
        </div>
        {metaText && (
          <span className="inline-flex items-center rounded-full bg-secondary-50 px-2.5 py-0.5 text-xs font-semibold text-secondary-600 font-sans border border-secondary-100">
            {metaText}
          </span>
        )}
      </div>
      <div className="space-y-3 pt-2">
        {detailRows.map((row, index) => (
          <div key={index} className="flex justify-between items-center border-b border-border-soft/60 pb-2 last:border-b-0 last:pb-0 font-sans text-sm">
            <span className="text-text-main/70">{row.label}</span>
            <span className="font-semibold text-primary-800 text-right">{row.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// 3. STAT CARD (For numbers like Acreage, Plot Counts)
interface StatCardProps {
  value: string;
  label: string;
  subLabel?: string;
  className?: string;
}

export function StatCard({ value, label, subLabel, className = "" }: StatCardProps) {
  return (
    <div className={`rounded-2xl border border-border-soft bg-white p-6 text-center ${className}`}>
      <span className="block text-4xl md:text-5xl font-serif font-bold text-luxury-gold tracking-tight mb-2">
        {value}
      </span>
      <h4 className="text-base font-semibold text-primary-800 font-sans mb-1">
        {label}
      </h4>
      {subLabel && (
        <p className="text-xs text-text-main/60 font-sans">
          {subLabel}
        </p>
      )}
    </div>
  );
}

// 4. GALLERY CARD (For site pictures or layout plans)
interface GalleryCardProps {
  src: string;
  alt: string;
  title: string;
  category?: string;
  onClick?: () => void;
  className?: string;
}

export function GalleryCard({ src, alt, title, category, onClick, className = "" }: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.3, ease: LUXURY_EASE } }}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-border-soft bg-white aspect-[4/3] cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${className}`}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
      
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-w-768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 font-sans">
        {category && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-300 mb-1">
            {category}
          </span>
        )}
        <h4 className="text-base font-serif font-medium text-white line-clamp-1">
          {title}
        </h4>
        <span className="text-xs text-white/70 mt-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
          View Details
          <Icons.ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  );
}

// 5. TRUST CARD (For RERA compliance features)
interface TrustCardProps {
  title: string;
  description: string;
  iconName?: string;
  className?: string;
}

export function TrustCard({ title, description, iconName = "ShieldCheck", className = "" }: TrustCardProps) {
  return (
    <div className={`rounded-2xl border border-success-muted/30 bg-success-muted/5 p-6 flex gap-4 ${className}`}>
      <div className="flex-shrink-0 text-success-muted">
        <DynamicIcon name={iconName} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-primary-800 font-sans mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-text-main/80 leading-relaxed font-sans">
          {description}
        </p>
      </div>
    </div>
  );
}
