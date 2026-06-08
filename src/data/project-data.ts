import { ProjectData } from "@/types";

const envPhoneRaw = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919111455566";
const envPhoneDisplay = envPhoneRaw.startsWith("+91") && envPhoneRaw.length === 13
  ? `+91 ${envPhoneRaw.slice(3, 8)} ${envPhoneRaw.slice(8)}`
  : envPhoneRaw;

const envWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919111455566";
const envWhatsappUrl = `https://wa.me/${envWhatsappNumber.replace(/[^0-9]/g, "")}?text=Hi,%20I%20am%20interested%20in%20Ivy%20Estate%20Bhopal%20plots.%20Please%20share%20layout%20plan%20and%20pricing.`;

export const projectData: ProjectData = {
  projectName: "Ivy Estate",
  tagline: "Premium Residential Plotted Development",
  developerName: "Vaikunthdham Colonizers & Developers",
  reraNumber: "P-OTH-17-1157",
  locationName: "Mungalia Kot, North Bhopal",
  overviewHeading: "Secure, Luxury Living and High-Return Plot Investments",
  overviewSubtext: "Discover a premium, gated plotted community built for high appreciation and immediate construction.",
  overviewContent:
    "Ivy Estate is a premium 10-acre residential plotted development strategically located in Mungalia Kot, North Bhopal. Registered with Madhya Pradesh RERA (No. P-OTH-17-1157), the development offers 125 residential plots set within a secure, gated campus. Combining quiet green landscapes with modern features like a clubhouse, sports courts, concrete roads, and subterranean sewage systems, it provides a high-quality living environment. Positioned near the upcoming Azim Premji University campus, Ivy Estate is an exceptional opportunity for both home builders and strategic property investors.",
  
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
      destination: "Azim Premji University (Wipro Campus)",
      distance: "1 km",
      duration: "3 mins",
      category: "Education",
    },
    {
      destination: "Guru Gobind Singh Public School",
      distance: "3 km",
      duration: "5 mins",
      category: "Education",
    },
    {
      destination: "Silver City Hospital",
      distance: "4 km",
      duration: "7 mins",
      category: "Healthcare",
    },
    {
      destination: "Bhopal Main Railway Station",
      distance: "11 km",
      duration: "15 mins",
      category: "Transit",
    },
    {
      destination: "Bhopal Airport (BHO)",
      distance: "12 km",
      duration: "18 mins",
      category: "Transit",
    },
    {
      destination: "Rani Kamlapati Station (Habibganj) / ISBT",
      distance: "14 km",
      duration: "20 mins",
      category: "Transit",
    },
  ],

  plotSizes: [
    {
      id: "plot-1500",
      sizeSqFt: 1500,
      dimensionsText: "30 x 50 ft",
      status: "Selling Fast",
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
      highlights: ["Tailored sizing based on preference", "Premium park-facing alignments", "Immediate registry & possession"],
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
      answer: "Yes, Ivy Estate is fully registered and approved by Madhya Pradesh RERA under RERA Registration Number P-OTH-17-1157. You can verify the approval details directly on the MP RERA official website.",
      category: "Compliance",
    },
    {
      id: "faq-developer",
      question: "Who is the developer of this project?",
      answer: "The project is developed by Vaikunthdham Colonizers & Developers, a trusted builder group in Bhopal focusing on secure plotted communities and modern infrastructure.",
      category: "Developer",
    },
    {
      id: "faq-location",
      question: "Where is Ivy Estate located?",
      answer: "It is located in Mungalia Kot, North Bhopal, right at the junction of Vidisha Road and the Outer Ring Road. It sits in a high-growth zone just 1 km from the upcoming Azim Premji University campus.",
      category: "Location",
    },
    {
      id: "faq-sizes",
      question: "What are the dimensions and sizes of plots available?",
      answer: "The primary plot sizes are 1,500 sq. ft. (30x50 ft) and 2,100 sq. ft. (35x60 ft). However, there are custom sizes available from 1,200 sq. ft. to over 2,600 sq. ft. across the colony layout.",
      category: "Plots",
    },
    {
      id: "faq-possession",
      question: "Is the project ready for immediate construction?",
      answer: "Yes! Major infrastructure like internal roads, electric cabling, boundary walls, and drainage lines are complete. Demarcations are in place, and possession and registry are active.",
      category: "Timeline",
    },
    {
      id: "faq-visit",
      question: "How can I book a site visit?",
      answer: "You can book a free site visit using our online request form, by calling our sales line directly, or by clicking the WhatsApp Inquiry button. We offer complimentary pick-and-drop service for site visits.",
      category: "Process",
    },
    {
      id: "faq-independent",
      question: "Is this website the official website of Ivy Estate?",
      answer: "No, this is an independent marketing and lead-generation portal managed by a trusted real estate consultant. It is not the official developer website. We assist buyers in obtaining verified project brochures, layouts, and site tours.",
      category: "General",
    },
    {
      id: "faq-loans",
      question: "Are bank home loans available for these plots?",
      answer: "Yes, home loans and plot purchase loans are available from major nationalized and private banking institutions including SBI, HDFC Bank, ICICI Bank, and others. Our sales desk provides complete loan documentation assistance.",
      category: "Financing",
    },
    {
      id: "faq-apu",
      question: "How far is the upcoming Azim Premji University campus?",
      answer: "The upcoming 50-acre Azim Premji University campus is situated just 1 km from the project gates. This major educational development is expected to drive high demand for rental housing and plot valuations in the immediate corridor.",
      category: "Location",
    },
    {
      id: "faq-road-width",
      question: "What is the width of the internal roads in the colony?",
      answer: "Ivy Estate features a wide asphalt main boulevard and spacious internal colony roads, ensuring smooth two-way vehicular traffic, complete with paved side walking strips and drainage structures.",
      category: "Infrastructure",
    },
    {
      id: "faq-utilities",
      question: "What utility networks are completed on site?",
      answer: "The campus is equipped with operational electricity transformers, subterranean drainage lines, covered storm water channels, and demarcated drinking water connections for individual plots.",
      category: "Infrastructure",
    },
    {
      id: "faq-security-measures",
      question: "What security measures are in place at the colony?",
      answer: "The project is a secure gated community surrounded by a complete masonry boundary wall. It features a grand entrance archway with manned security guards monitoring entry and exit 24/7.",
      category: "Security",
    },
    {
      id: "faq-greenery",
      question: "Are there community parks and gardens inside?",
      answer: "Yes, the colony plan includes beautifully landscaped parks, designated open green areas, pedestrian pathways, and row plantation along all roads to ensure a healthy living environment.",
      category: "Amenities",
    },
    {
      id: "faq-registry",
      question: "Is immediate registry and mutation possible?",
      answer: "Yes, the titles of the land are completely clear and legally verified. Immediate registry and mutation (Dakhil Kharij) can be completed for buyers who finalize their payments.",
      category: "Financing",
    },
    {
      id: "faq-pricing",
      question: "How can I obtain the latest price list and availability?",
      answer: "Due to changing inventory, we recommend clicking 'Book Site Visit' or 'WhatsApp Inquiry' to receive the latest available plot numbers, pricing sheets, and current layout chart directly on your phone.",
      category: "General",
    },
    {
      id: "faq-corner-plots",
      question: "Are corner plots or east-facing plots available?",
      answer: "Yes, a selected number of premium corner plots, east-facing plots, and park-facing plots are planned. Please contact our sales desk to check the real-time availability of these premium alignments.",
      category: "Plots",
    },
    {
      id: "faq-nri",
      question: "Is there home loan assistance for NRI buyers?",
      answer: "Yes, we provide full NRI documentation and loan processing assistance through associated banks that specialize in home loans for non-resident Indian citizens.",
      category: "Financing",
    },
    {
      id: "faq-transport",
      question: "What transit facilities are close to the site?",
      answer: "The site sits directly on the Vidisha Road corridor and connects to the Bhopal Outer Ring Road. Bhopal Main Railway Station is 11 km away, Raja Bhoj Airport is 12 km away, and the ISBT/Habibganj corridor is 14 km away.",
      category: "Location",
    },
    {
      id: "faq-water",
      question: "How is water supply managed for the residential plots?",
      answer: "Provisions for a central groundwater boring, community overhead reservoir tanks, and pipeline nodes connecting to each individual plot boundary have been established.",
      category: "Infrastructure",
    },
    {
      id: "faq-construction",
      question: "Are there any design guidelines for building homes?",
      answer: "While residents have the freedom to design custom duplexes or villas, all construction must align with the local town planning rules (T&CP) and local municipal bylaws to maintain structural harmony.",
      category: "Plots",
    },
    {
      id: "faq-maintenance",
      question: "Who will maintain the colony infrastructure after launch?",
      answer: "A dedicated residents welfare association (RWA) will be formed to manage security, park maintenance, street lighting, and road upkeep after the builder hands over the campus.",
      category: "General",
    },
    {
      id: "faq-diversion",
      question: "Is the land diverted for residential usage?",
      answer: "Yes, 100% of the plotted layout area has been legally diverted (Nirvasit/Diverted) for residential use, conforming to all state Town & Country Planning (T&CP) department requirements.",
      category: "Compliance",
    },
    {
      id: "faq-possession-time",
      question: "How long does it take to get physical possession?",
      answer: "Physical possession of the plots can be handed over immediately upon the execution of the sale deed. The boundary stones are already installed for all numbered plots.",
      category: "Timeline",
    },
    {
      id: "faq-amenities-operational",
      question: "Are the lifestyle amenities like club and pool already ready?",
      answer: "The gated security, roads, electrification, and drainage systems are fully operational. Construction on the community clubhouse and sports courts is progressing on schedule on-site.",
      category: "Amenities",
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
