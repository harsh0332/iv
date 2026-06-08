export interface ImageManifestItem {
  filename: string;
  category: string;
  path: string;
  sizeBytes: number;
  title: string;
  alt: string;
  description: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  category: "Sports" | "Infrastructure" | "Security" | "Leisure";
}

export interface ConnectivityDistance {
  destination: string;
  distance: string;
  duration: string;
  category: "Education" | "Transit" | "Healthcare" | "Work";
}

export interface PlotDimension {
  id: string;
  sizeSqFt: number;
  dimensionsText?: string;
  status: "Available" | "Selling Fast" | "Sold Out";
  highlights: string[];
}

export interface ContactConfig {
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  whatsappUrl: string;
  officeAddress: string;
  siteAddress: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface LeadFormConfig {
  formFields: {
    id: string;
    label: string;
    type: "text" | "tel" | "email" | "select" | "date";
    placeholder?: string;
    required: boolean;
    options?: string[];
  }[];
  visitTimeSlots: string[];
  inquiryTypes: string[];
}

export interface ProjectData {
  projectName: string;
  tagline: string;
  developerName: string;
  reraNumber: string;
  locationName: string;
  overviewHeading: string;
  overviewContent: string;
  overviewSubtext: string;
  amenities: Amenity[];
  distances: ConnectivityDistance[];
  plotSizes: PlotDimension[];
  contact: ContactConfig;
  faq: FAQItem[];
  leadConfig: LeadFormConfig;
}
