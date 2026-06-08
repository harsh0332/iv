declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    fbq?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Clean naming conventions for tracking events:
 * - Google Analytics: event name with snake_case.
 * - Meta Pixel: Standard events (Lead, Contact, Schedule) or Custom events with PascalCase.
 */
export const tracking = {
  // Track Form Submissions generally
  formSubmitted: (formType: string, details?: Record<string, unknown>) => {
    console.log(`[Tracking] Form Submitted: ${formType}`, details);
    
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submission", {
        form_type: formType,
        ...details,
      });
    }

    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: formType,
        ...details,
      });
    }
  },

  // Track Site Visit Bookings specifically
  siteVisitSubmitted: (details?: Record<string, unknown>) => {
    console.log("[Tracking] Site Visit Booking Submitted", details);
    
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "site_visit_booking", {
        ...details,
      });
    }

    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Schedule", {
        content_category: "Site Tour",
        ...details,
      });
    }
  },

  // Track Callback Requests specifically
  callbackRequested: (details?: Record<string, unknown>) => {
    console.log("[Tracking] Callback Requested", details);
    
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "callback_requested", {
        ...details,
      });
    }

    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "CallbackRequested", {
        ...details,
      });
    }
  },

  // Track clicks on the WhatsApp button
  whatsAppClicked: (source: string) => {
    console.log(`[Tracking] WhatsApp Clicked. Source: ${source}`);
    
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        click_source: source,
      });
    }

    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: `WhatsApp_${source}`,
      });
    }
  },

  // Track clicks on the Phone Call button
  callClicked: (source: string) => {
    console.log(`[Tracking] Phone Call Clicked. Source: ${source}`);
    
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "call_click", {
        click_source: source,
      });
    }

    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: `PhoneCall_${source}`,
      });
    }
  },
};
