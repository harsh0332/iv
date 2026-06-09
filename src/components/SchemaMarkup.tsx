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

  // 3. LocalBusiness (RealEstateAgent) Schema (Approximate Geo coordinates)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Ivy Estate Bhopal Plotted Campus",
    "description": "Premium gated residential plotted layout near Vidisha Road x Outer Ring Road, Bhopal.",
    "image": `${siteUrl}/ivy-estate-images/ivy-estate-bhopal-header1.jpg`,
    "telephone": projectData.contact.phoneRaw,
    "email": projectData.contact.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mungalia Kot, near bypass",
      "addressLocality": "Bhopal",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "462038",
      "addressCountry": "IN"
    },
    "hasMap": "https://maps.app.goo.gl/4acCvruMcTvey5XA9",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.3283",
      "longitude": "77.4475",
      "description": "Approximate location coordinates for Mungalia Kot area."
    },
    "url": siteUrl,
    "openingHours": "Mo-Su 10:00-18:00"
  };
 
  // 4. Residence Schema (RealEstate/Residence)
  const residenceSchema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    "name": "Ivy Estate Plotted Development",
    "description": "Premium 10-acre RERA-registered gated residential plotted layout in Mungalia Kot, North Bhopal.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mungalia Kot, near bypass",
      "addressLocality": "Bhopal",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "462038",
      "addressCountry": "IN"
    },
    "hasMap": "https://maps.app.goo.gl/4acCvruMcTvey5XA9",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.3283",
      "longitude": "77.4475",
      "description": "Approximate location coordinates for Mungalia Kot area."
    }
  };

  // 5. BreadcrumbList Schema
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

  // 6. FAQPage Schema (dynamically generated from truthful corrected FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": projectData.faq.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residenceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
