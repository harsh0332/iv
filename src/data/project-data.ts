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
  overviewHeading: "Secure, Gated Plotted Community in North Bhopal",
  overviewSubtext: "Discover a premium, gated plotted community designed with modern amenities and scenic layouts.",
  overviewContent:
    "Ivy Estate is a premium 10-acre residential plotted development (Phase 1) strategically located in Mungalia Kot, North Bhopal, near the junction of Vidisha Road and the Outer Ring Road. Registered with Madhya Pradesh RERA (No. P-OTH-17-1157), the development offers 125 total plots, with 95 plots currently available for sale and ~49% of the campus dedicated to open/common areas. Ivy Estate is RERA-registered and under active development — civil works, internal roads, drainage and electricity are in progress; the project is moving toward its RERA completion certificate. Buyers are welcome to visit and see progress.",
  
  amenities: [
    {
      id: "clubhouse",
      name: "Exclusive Clubhouse",
      description: "A premium community center for gatherings, leisure, and resident events.",
      icon: "Home",
      category: "Leisure",
    },
    {
      id: "pool",
      name: "Swimming Pool",
      description: "A crystal-clear pool with a sun deck for relaxation and recreation.",
      icon: "Droplets",
      category: "Leisure",
    },
    {
      id: "sports-zone",
      name: "Multi-Sport Courts",
      description: "Dedicated courts for tennis, basketball, badminton, and a cricket practice net.",
      icon: "Activity",
      category: "Sports",
    },
    {
      id: "roads",
      name: "Wide Asphalt Roads",
      description: "Double-lane main boulevard and wide internal roads with paved footpaths.",
      icon: "Milestone",
      category: "Infrastructure",
    },
    {
      id: "sewage",
      name: "Underground Sewage",
      description: "Modern covered drainage and sewage networks for high hygiene standards.",
      icon: "Wrench",
      category: "Infrastructure",
    },
    {
      id: "electrification",
      name: "Dedicated Power & Lights",
      description: "Central transformer station, underground wiring nodes, and bright street lights.",
      icon: "Zap",
      category: "Infrastructure",
    },
    {
      id: "security",
      name: "Gated Security 24/7",
      description: "Grand entrance archway with manned security guards and perimeter boundary walls.",
      icon: "ShieldCheck",
      category: "Security",
    },
    {
      id: "landscaping",
      name: "Community Park & Gardens",
      description: "Beautifully landscaped open spaces, lawn lawns, and pedestrian walkways.",
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
      highlights: ["Tailored sizing based on preference", "Premium park-facing alignments", "Clear legal titles and layout approvals"],
    },
  ],

  contact: {
    phoneDisplay: envPhoneDisplay,
    phoneRaw: envPhoneRaw,
    email: "inquiry@ivyestatebhopal.in",
    whatsappUrl: envWhatsappUrl,
    officeAddress: "Vaikunthdham Colonizers & Developers, Bhopal, MP",
    siteAddress: "Ivy Estate, Mungalia Kot, Junction of Vidisha Road and Outer Ring Road, Bhopal, MP 462038",
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
      id: "faq-loans",
      question: "Are bank home loans available for these plots?",
      answer: "Yes, loan assistance is available. Our desk can guide you through the documentation process with leading lending institutions.",
      category: "Financing",
    },
    {
      id: "faq-apu",
      question: "How far is the upcoming Azim Premji University campus?",
      answer: "The upcoming Azim Premji University campus is situated just 1 km from the project gates, providing excellent academic convenience in the immediate corridor.",
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
      answer: "A modern covered drainage network and subterranean sewage layout are planned for the campus to maintain high hygiene standards.",
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
      answer: "Yes, the layout plan includes ~49% open/common area, including a nursery garden, temple garden, and landscaped parks.",
      category: "Amenities",
    },
    {
      id: "faq-pricing",
      question: "How can I obtain the latest price list and availability?",
      answer: "Due to changing inventory, we recommend submitting a query or using the WhatsApp link to receive the latest available plot numbers, pricing sheets, and current layout chart directly on your phone.",
      category: "General",
    },
    {
      id: "faq-corner-plots",
      question: "Are corner plots or park-facing plots available?",
      answer: "Yes, standard plot sizes are 1500 sq ft and 2100 sq ft, with a limited number of odd-sized plots at key locations. Please inquire for real-time availability of corner or park-facing options.",
      category: "Plots",
    },
    {
      id: "faq-nri",
      question: "Is there home loan assistance for NRI buyers?",
      answer: "Yes, we provide full NRI documentation and loan processing assistance through institutions that specialize in home loans for non-resident Indian citizens.",
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
      answer: "Provisions for a central groundwater boring, community overhead water storage reservoir, and individual pipeline nodes connecting to each plot are planned.",
      category: "Infrastructure",
    },
    {
      id: "faq-construction",
      question: "Are there any design guidelines for building homes?",
      answer: "All home construction must align with the local town planning rules (T&CP) and local municipal bylaws to maintain structural harmony.",
      category: "Plots",
    },
    {
      id: "faq-maintenance",
      question: "Who will maintain the infrastructure after development?",
      answer: "A dedicated residents welfare association (RWA) is planned to manage security, park maintenance, and common facilities once the campus is handed over.",
      category: "General",
    },
    {
      id: "faq-diversion",
      question: "Is the land diverted for residential usage?",
      answer: "Yes, the plotted layout area has been legally diverted for residential use, conforming to Bhopal Town & Country Planning (T&CP) department requirements.",
      category: "Compliance",
    },
    {
      id: "faq-amenities-planned",
      question: "What lifestyle amenities are planned for the project?",
      answer: "Lifestyle amenities planned as part of the layout include a Royal Clubhouse with gym + poolside garden, swimming/wading pool, 2 tennis courts, 1 badminton court, a basketball ring, a large cricket/football field with spectator benches, and an open-air amphitheater.",
      category: "Amenities",
    },
    {
      id: "faq-size-options",
      question: "What are the standard plot sizes in Phase 1?",
      answer: "The plots are mainly 1500 sq ft (e.g. 30x50 ft) and 2100 sq ft (e.g. 35x60 ft), along with select odd-sized plots at key layout points.",
      category: "Plots",
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
