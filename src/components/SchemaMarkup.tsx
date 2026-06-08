import React from "react";
import { projectData } from "@/data/project-data";

export default function SchemaMarkup() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ivyestatebhopal.in";

  // 1. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ivy Estate Bhopal",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": projectData.developerName,
    "alternateName": "Vaikunthdham Colonizers",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.ico`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": projectData.contact.phoneRaw,
      "contactType": "sales desk",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  };

  // 3. LocalBusiness (RealEstateAgent) Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Ivy Estate Bhopal Plotted Campus",
    "description": "Secure premium residential plots (1,500 & 2,100 sq.ft.) at Ivy Estate, North Bhopal. Gated community with clubhouse, sports courts & RERA approval (P-OTH-17-1157).",
    "image": `${siteUrl}/ivy-estate-images/ivy-estate-bhopal-header1.jpg`,
    "telephone": projectData.contact.phoneRaw,
    "email": projectData.contact.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mungalia Kot, Junction of Vidisha Road and Outer Ring Road",
      "addressLocality": "Bhopal",
      "addressRegion": "MP",
      "postalCode": "462038",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.3283",
      "longitude": "77.4475"
    },
    "url": siteUrl,
    "openingHours": "Mo-Su 09:00-19:00"
  };

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Amenities",
        "item": `${siteUrl}/#amenities`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Location",
        "item": `${siteUrl}/#location`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Plot Options",
        "item": `${siteUrl}/#plots`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
