import { ProjectData } from "@/types";

const envPhoneRaw = process.env.NEXT_PUBLIC_PHONE_NUMBER || "[NEXT_PUBLIC_PHONE_NUMBER]";
const envPhoneDisplay = envPhoneRaw;

const envWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "[NEXT_PUBLIC_WHATSAPP_NUMBER]";
const envWhatsappUrl = envWhatsappNumber.includes("NEXT_PUBLIC")
  ? "#"
  : `https://wa.me/${envWhatsappNumber.replace(/[^0-9]/g, "")}?text=Hi,%20I%20am%20interested%20in%20Ivy%20Estate%20Bhopal%20plots.%20Please%20share%20layout%20plan%20and%20pricing.`;

export const projectData: ProjectData = {
  projectName: "Ivy Estate",
  tagline: "Premium Residential Plotted Development",
  developerName: "Vaikunthdham Colonizers & Developers",
  reraNumber: "P-OTH-17-1157",
  locationName: "Mungalia Kot, North Bhopal",
  overviewHeading: "Secure Plotted Development in North Bhopal",
  overviewSubtext: "Premium 10-acre RERA-registered gated plotted layout with planned amenities, under active development.",
  overviewContent:
    "Ivy Estate is a gated residential plotted layout (Phase 1) of 10 acres located in Mungalia Kot, Outer Ring Road, North Bhopal, MP. Registered under MP RERA (No. P-OTH-17-1157), the layout provides 125 total plots (95 available for sale) with ~49% of the campus allocated for open and common areas. The project is situated 1 km from the upcoming Azim Premji University campus. Ivy Estate is RERA-registered and under active development — civil works, internal roads, drainage and electricity are in progress; the project is moving toward its RERA completion certificate. Buyers are welcome to visit the site to view development progress.",
  
  amenities: [
    {
      id: "clubhouse",
      name: "Exclusive Clubhouse",
      description: "A planned community clubhouse with gym and poolside garden.",
      icon: "Home",
      category: "Leisure",
    },
    {
      id: "pool",
      name: "Swimming Pool",
      description: "A planned swimming/wading pool part of the community layout.",
      icon: "Droplets",
      category: "Leisure",
    },
    {
      id: "sports-zone",
      name: "Multi-Sport Courts",
      description: "Planned sports layout including 2 tennis courts, 1 badminton court, basketball ring, and large cricket/football field.",
      icon: "Activity",
      category: "Sports",
    },
    {
      id: "roads",
      name: "Wide Asphalt Roads",
      description: "Planned double-lane internal roads and paved walkways under active development.",
      icon: "Milestone",
      category: "Infrastructure",
    },
    {
      id: "sewage",
      name: "Underground Sewage",
      description: "Planned drainage and water storage provision for the layout, under development.",
      icon: "Wrench",
      category: "Infrastructure",
    },
    {
      id: "electrification",
      name: "Dedicated Power & Lights",
      description: "Underground electrical wiring planned and in progress across the layout.",
      icon: "Zap",
      category: "Infrastructure",
    },
    {
      id: "security",
      name: "Gated Security 24/7",
      description: "Planned 24x7 gated security with cameras, boundary walls, and entrance gate.",
      icon: "ShieldCheck",
      category: "Security",
    },
    {
      id: "landscaping",
      name: "Community Park & Gardens",
      description: "Planned landscaping including nursery garden, temple garden, and large open lawn spaces.",
      icon: "Trees",
      category: "Leisure",
    },
  ],

  distances: [
    {
      destination: "4-Lane Ring Road",
      distance: "within 1 km",
      duration: "~2 min",
      category: "Transit",
    },
    {
      destination: "Azim Premji University",
      distance: "1 km",
      duration: "~3 min",
      category: "Education",
    },
    {
      destination: "Sukhi Sewaniya Railway Station",
      distance: "2 km",
      duration: "~5 min",
      category: "Transit",
    },
    {
      destination: "Guru Gobind Singh Public School",
      distance: "3 km",
      duration: "~5 min",
      category: "Education",
    },
    {
      destination: "Silver City Hospital",
      distance: "4 km",
      duration: "~7 min",
      category: "Healthcare",
    },
    {
      destination: "Bhopal Memorial/People's Hospital/People's Mall",
      distance: "6 km",
      duration: "~10 min",
      category: "Healthcare",
    },
    {
      destination: "Bhopal Main Railway Station",
      distance: "11 km",
      duration: "~15 min",
      category: "Transit",
    },
    {
      destination: "Bhopal Airport",
      distance: "12 km",
      duration: "~15 min",
      category: "Transit",
    },
    {
      destination: "Rani Kamlapati (Habibganj) / ISBT",
      distance: "14 km",
      duration: "~20 min",
      category: "Transit",
    },
    {
      destination: "Upper Lake Boating Club",
      distance: "14 km",
      duration: "~20 min",
      category: "Work",
    },
    {
      destination: "Halali Water Sports Complex",
      distance: "18 km",
      duration: "~20 min",
      category: "Work",
    },
  ],

  plotSizes: [
    {
      id: "plot-1500",
      sizeSqFt: 1500,
      dimensionsText: "30 x 50 ft",
      status: "Available",
      highlights: ["Ideal for standard 3BHK duplexes", "Uniform street access", "RERA approved layout"],
    },
    {
      id: "plot-2100",
      sizeSqFt: 2100,
      dimensionsText: "35 x 60 ft",
      status: "Available",
      highlights: ["Perfect for spacious 4BHK villas", "Front garden space option", "Corner plots available"],
    },
    {
      id: "plot-custom",
      sizeSqFt: 1200,
      dimensionsText: "Custom range up to 2600 sq.ft.",
      status: "Available",
      highlights: ["Select corner & odd-sized plots available", "Tailored sizing options", "Approved layout plans"],
    },
  ],

  contact: {
    phoneDisplay: envPhoneDisplay,
    phoneRaw: envPhoneRaw,
    email: "inquiry@ivyestatebhopal.in",
    whatsappUrl: envWhatsappUrl,
    officeAddress: "Sales Inquiry Office, North Bhopal",
    siteAddress: "Ivy Estate, Mungalia Kot, Near Vidisha Road & Outer Ring Road, Bhopal, MP",
  },

  faq: [
    {
      id: "faq-rera",
      question: "Is Ivy Estate Bhopal RERA approved?",
      answer: "Yes, Ivy Estate is fully registered and approved by Madhya Pradesh RERA under Registration Number P-OTH-17-1157. You can verify the approval details directly on the MP RERA official website.",
      category: "Compliance",
    },
    {
      id: "faq-developer",
      question: "Who is the developer of this project?",
      answer: "The project is developed by Vaikunthdham Colonizers & Developers, a builder group in Bhopal focusing on secure plotted communities.",
      category: "Developer",
    },
    {
      id: "faq-location",
      question: "Where is Ivy Estate located?",
      answer: "It is located in Mungalia Kot, Outer Ring Road, North Bhopal, MP (near Vidisha Road x Outer Ring Road junction; near Atal Bihari Vajpayee Hindi Vishwavidyalaya).",
      category: "Location",
    },
    {
      id: "faq-status",
      question: "What is the current development status of Ivy Estate?",
      answer: "RERA-registered and under active development — civil works, internal roads, drainage and electricity are in progress; the project is moving toward its RERA completion certificate. Buyers are welcome to visit and see progress.",
      category: "Timeline",
    },
    {
      id: "faq-visit",
      question: "How can I book a site visit?",
      answer: "You can book a site visit using our online request form, by calling our sales line directly, or by clicking the WhatsApp Inquiry button.",
      category: "Process",
    },
    {
      id: "faq-independent",
      question: "Is this website the official website of Ivy Estate?",
      answer: "No, this is an independent marketing and lead-generation portal managed by an authorized channel partner. It is not the official developer website. We assist buyers in obtaining verified project information, layouts, and site tours.",
      category: "General",
    },
    {
      id: "faq-loans",
      question: "Are bank home loans available for these plots?",
      answer: "Loan assistance is available, subject to bank eligibility guidelines. Our team can assist you with compiling the necessary documentation.",
      category: "Financing",
    },
    {
      id: "faq-apu",
      question: "How far is the upcoming Azim Premji University campus?",
      answer: "The upcoming Azim Premji University campus is situated 1 km from the project gates, providing convenient access to educational facilities in the area.",
      category: "Location",
    },
    {
      id: "faq-road-width",
      question: "What is the width of the internal roads?",
      answer: "The project features a wide internal road layout design complete with paved side walking footpaths to ensure smooth transit.",
      category: "Infrastructure",
    },
    {
      id: "faq-sewage",
      question: "What drainage provisions are planned for the layout?",
      answer: "Subterranean sewage pipelines and covered storm water drains are planned for the layout and are currently in progress.",
      category: "Infrastructure",
    },
    {
      id: "faq-security-measures",
      question: "What security measures are planned at the colony?",
      answer: "The layout includes plans for 24x7 gated security with cameras, a grand entry gateway, and perimeter boundary walling to safeguard families.",
      category: "Security",
    },
    {
      id: "faq-greenery",
      question: "Are there community parks and gardens planned inside?",
      answer: "Yes, the layout plan includes ~49% open area, which is planned to feature a nursery garden, temple garden, and landscaped green parks.",
      category: "Amenities",
    },
    {
      id: "faq-pricing",
      question: "How can I obtain the latest price list and availability?",
      answer: "Due to changing inventory, we recommend submitting a query or using the WhatsApp link to receive the latest available plot details and pricing directly on your phone.",
      category: "General",
    },
    {
      id: "faq-corner-plots",
      question: "Are corner plots or park-facing plots available?",
      answer: "Yes, standard plot sizes are 1500 sq ft and 2100 sq ft, with select odd-sized plots at key locations. Please contact us to check the real-time availability of corner or park-facing options.",
      category: "Plots",
    },
    {
      id: "faq-nri",
      question: "Is there home loan assistance for NRI buyers?",
      answer: "Yes, we provide loan documentation assistance for NRI buyers, subject to individual bank eligibility criteria.",
      category: "Financing",
    },
    {
      id: "faq-transport",
      question: "What transit facilities are close to the site?",
      answer: "Sukhi Sewaniya Railway Station is 2 km (~5 min), Bhopal Main Railway Station is 11 km (~15 min), and Raja Bhoj Airport is 12 km (~15 min) away.",
      category: "Location",
    },
    {
      id: "faq-water",
      question: "How is water supply managed for the residential plots?",
      answer: "Water storage provisions, central groundwater boring, and overhead reservoir tanks are planned for the residential layout.",
      category: "Infrastructure",
    },
    {
      id: "faq-construction",
      question: "Are there any design guidelines for building homes?",
      answer: "Yes, all home construction must align with the local town planning rules (T&CP) and local municipal bylaws. We recommend verifying specific construction guidelines before planning your home.",
      category: "Plots",
    },
    {
      id: "faq-maintenance",
      question: "Who will maintain the infrastructure after development?",
      answer: "A dedicated residents welfare association (RWA) is planned to be formed to manage maintenance, security, and common areas after hand-over.",
      category: "General",
    },
    {
      id: "faq-diversion",
      question: "Is the land diverted for residential usage?",
      answer: "Buyers are advised to verify land-use and diversion status directly with the developer or through official Town & Country Planning (T&CP) files.",
      category: "Compliance",
    },
    {
      id: "faq-amenities-planned",
      question: "What lifestyle amenities are planned for the project?",
      answer: "Lifestyle amenities planned as part of the layout include a Royal Clubhouse with gym + poolside garden, swimming/wading pool, 2 tennis courts, 1 badminton court, a basketball ring, a large cricket/football field with spectator benches, and an open-air amphitheater.",
      category: "Amenities",
    },
    {
      id: "faq-possession",
      question: "Is immediate physical possession available?",
      answer: "Physical possession is subject to development progress and the terms of the sale agreement. Buyers are welcome to visit the site to view current progress.",
      category: "Timeline",
    },
    {
      id: "faq-registry",
      question: "How is the registry process managed?",
      answer: "The registry process is executed upon completion of all legal checks and clearances. Buyers should verify title and registry feasibility status during their site visit.",
      category: "Financing",
    }
  ],

  leadConfig: {
    formFields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter 10-digit mobile number",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email address",
        required: false,
      },
      {
        id: "plotSize",
        label: "Interested Plot Size",
        type: "select",
        required: true,
        options: ["1,500 Sq. Ft.", "2,100 Sq. Ft.", "Custom Size (1200 - 2600 Sq. Ft.)", "Undecided"],
      },
      {
        id: "visitDate",
        label: "Preferred Site Visit Date",
        type: "date",
        required: false,
      },
    ],
    visitTimeSlots: [
      "10:00 AM - 01:00 PM (Morning)",
      "01:00 PM - 04:00 PM (Afternoon)",
      "04:00 PM - 07:00 PM (Evening)",
    ],
    inquiryTypes: [
      "Request Brochure & Price List",
      "Book a Site Visit",
      "Request Callback",
      "Check Plot Availability",
    ],
  },
};
