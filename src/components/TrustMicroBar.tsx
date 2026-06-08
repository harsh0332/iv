"use client";

import React from "react";
import { projectData } from "@/data/project-data";
import { ShieldCheck, MapPin, Milestone, Landmark } from "lucide-react";

interface TrustMicroBarProps {
  isVisible?: boolean;
}

export default function TrustMicroBar({ isVisible = false }: TrustMicroBarProps) {
  if (!isVisible) return null;

  // Dynamically extract trust points from projectData
  const trustItems = [
    {
      id: "rera",
      label: `RERA Approved: ${projectData.reraNumber}`,
      icon: <ShieldCheck className="w-3.5 h-3.5 text-secondary-300" />,
    },
    {
      id: "location",
      label: `Prime Location: ${projectData.locationName}`,
      icon: <MapPin className="w-3.5 h-3.5 text-secondary-300" />,
    },
    {
      id: "roads",
      label: "80ft Main Entry & Wide Internal Roads",
      icon: <Milestone className="w-3.5 h-3.5 text-secondary-300" />,
    },
    {
      id: "finance",
      label: "Government Bank Loan Assistance Available",
      icon: <Landmark className="w-3.5 h-3.5 text-secondary-300" />,
    },
  ];

  return (
    <div className="w-full bg-primary-950 text-white border-b border-primary-900 py-2.5 px-4 font-sans text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 md:gap-x-8">
          {trustItems.map((item) => (
            <div key={item.id} className="flex items-center gap-2 text-primary-100 font-medium">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-secondary-300 font-semibold tracking-wider uppercase text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 animate-ping"></span>
          <span>Plot Bookings Active</span>
        </div>
      </div>
    </div>
  );
}
