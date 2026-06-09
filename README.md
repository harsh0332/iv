# Ivy Estate Bhopal — Plotted Development Lead Generation Portal

A high-performance, premium lead-generation web platform built using Next.js, Framer Motion, and Tailwind CSS. The website is structured specifically to drive site bookings, callback requests, and direct phone/WhatsApp inquiries for residential plots at Ivy Estate, Bhopal.

---

## 1. Getting Started

### Prerequisites
* Node.js v18+ or v20+
* npm or yarn

### Installation
Clone or copy the directory, then install the dependencies:
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 2. Environment Variables & Deployment Configuration

Copy `.env.example` to `.env.local` (or configure these variables directly in your hosting platform dashboard like Vercel, Netlify, or AWS Amplify):
```bash
cp .env.example .env.local
```

### Configuration Keys:
* `NEXT_PUBLIC_SITE_URL`: The production domain name (e.g., `https://www.ivyestatebhopal.in`). Critical for XML sitemaps and search schema canonical tags.
* `NEXT_PUBLIC_PHONE_NUMBER`: The raw phone number for CTAs and call buttons (e.g., `+919111455566`).
* `NEXT_PUBLIC_WHATSAPP_NUMBER`: The raw 12-digit mobile number for WhatsApp (e.g., `919111455566`).
* `NEXT_PUBLIC_WEBHOOK_URL` / `WEBHOOK_URL`: The endpoint to receive form submissions (e.g., n8n, CRM, or Zapier).
* `NEXT_PUBLIC_GA_ID` / `GA_ID`: Google Analytics measurement ID (e.g., `G-XXXXXX`).
* `NEXT_PUBLIC_META_PIXEL_ID` / `META_PIXEL_ID`: Meta Pixel ID (e.g., `1234567890`).

---

## 3. Lead Capture & n8n/CRM Integration

When a user submits the **Site Visit Form**, **Quick Inquiry**, or **Callback Form**, a POST request is processed by the server-side API route `/api/leads`.

### Features:
1. **Rate Limiting**: Limits requests to a maximum of 5 submissions per minute per IP address.
2. **Honeypot Shield**: Silently rejects bots filling hidden input fields (`email_confirm`).
3. **Webhook Retries**: Automatically retries sending the payload up to 3 times using exponential backoff to handle temporary server downtime.

### Payload Schema:
```json
{
  "name": "Jane Doe",
  "phone": "9111455566",
  "leadType": "site-visit",
  "message": "[Site Visit Request] Date: 2026-06-15, Time: 10:00 AM - 01:00 PM, Budget: 30-45 Lakhs. Hello, please call me.",
  "timestamp": "2026-06-09T02:30:00.000Z",
  "source": "direct",
  "page": "/"
}
```

---

## 4. Search Engine Optimization (SEO) & Schema Markup

The portal is optimized for Google and Bing search indexers through the following components:
1. **Dynamic Sitemap & Robots**: Dynamically generated at `/sitemap.xml` and `/robots.txt` using Next.js router utilities.
2. **JSON-LD Schema**: Injecting rich structures:
   * `WebSite`
   * `Organization` (Vaikunthdham Colonizers details)
   * `LocalBusiness` (`RealEstateAgent` category for local SEO optimization)
   * `BreadcrumbList`
   * `FAQPage` (containing 24 detailed project FAQs)
3. **Core Web Vitals**: Minimal client JavaScript footprint, lazy-loaded visual frames, and localized Next.js Font optimizations to maintain page load speeds.

---

## 5. Build & Compilation Commands

### Production Build compilation
Runs type checking and generates the optimized production build bundle:
```bash
npm run build
```

### Code Formatting & Linting
Enforces code standards and scans for unused imports or variables:
```bash
npm run lint
```

---

## 6. Pre-Launch Checklist (Action Required for Harsh)

Before going live and directing advertising traffic (Meta/Google Ads) to this portal, ensure the following steps are completed:

1. **Configure Environment Variables**:
   In your hosting provider (e.g. Vercel dashboard), set these variables to active production values:
   * `NEXT_PUBLIC_SITE_URL`: Set to the official domain, e.g. `https://www.ivyestatebhopal.in` (without trailing slash).
   * `NEXT_PUBLIC_PHONE_NUMBER`: Set to the real sales desk mobile number (e.g. `+919111455566`).
   * `NEXT_PUBLIC_WHATSAPP_NUMBER`: Set to the real WhatsApp recipient mobile number (e.g. `919111455566`, including country code, no symbols or spaces).
   * `NEXT_PUBLIC_WEBHOOK_URL` and `WEBHOOK_URL`: Set to your active n8n, CRM, or Zapier webhook endpoint to capture leads.

2. **Verify Lead Capture Flow**:
   - Submit a test lead on the web page.
   - Confirm that the lead data lands successfully in your n8n workspace or CRM.
   - Verify that in case of webhook failure, the WhatsApp fallback button triggers and opens WhatsApp with the pre-populated lead details.

3. **Legal & Registration Verification**:
   - Double check that the RERA registration number `P-OTH-17-1157` is in active and good standing on the MP RERA portal.
   - Verify that the land diversion certificate (T&CP approval) and ownership titles are fully in place before launching search or social ads.
   - Inspect the on-ground construction progress of the main entry gate, asphalt roads, and utilities to ensure the marketing material matches the physical reality for site visits.

