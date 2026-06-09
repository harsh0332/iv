import { Metadata } from "next";

export const siteMetadata = {
  title: "Ivy Estate Bhopal | Premium Residential Plots in Mungalia Kot",
  description: "Secure premium residential plots (1,500 & 2,100 sq.ft.) at Ivy Estate, North Bhopal. Gated community with clubhouse, sports courts & RERA approval (P-OTH-17-1157). Near upcoming Azim Premji University campus.",
  keywords: [
    "Ivy Estate Bhopal",
    "Ivy Estate plots Bhopal",
    "residential plots in Bhopal",
    "plots in Mungalia Kot",
    "Vaikunthdham Colonizers",
    "plots near Azim Premji University Bhopal",
    "RERA approved plots Bhopal",
    "buy plots Bhopal",
    "gated colony plots Bhopal",
    "property investment Bhopal",
    "residential colony Bhopal",
    "plots on Vidisha Road Bhopal"
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ivyestatebhopal.in", // Target URL for production deployments
  ogImage: "/ivy-estate-images/ivy-estate-bhopal-header1.jpg",
  contactPhone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "[NEXT_PUBLIC_PHONE_NUMBER]",
};

export const seoMetadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | Ivy Estate Bhopal`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: "Ivy Estate Bhopal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Ivy Estate Premium Residential Plots Bhopal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
export type SiteMetadataType = typeof siteMetadata;
export type SeoMetadataType = typeof seoMetadata;
