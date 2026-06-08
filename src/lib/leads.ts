import { LeadPayload } from "@/types/lead";

// Simple in-memory storage for rate limiting (for demo/node server environments)
const ipRequestHistory = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // Allow max 5 submissions per minute per IP

/**
 * Validates lead inputs and checks anti-spam safeguards.
 */
export function validateLead(lead: LeadPayload): { isValid: boolean; error?: string } {
  // 1. Honeypot check (anti-spam bot trap)
  if (lead.honeypot && lead.honeypot.trim() !== "") {
    console.warn("Spam Blocked: Honeypot field was filled.");
    return { isValid: false, error: "Invalid submission detected." };
  }

  // 2. Name validation
  if (!lead.name || lead.name.trim().length < 2) {
    return { isValid: false, error: "Please enter a valid name (minimum 2 characters)." };
  }

  // 3. Mobile validation (10 digit format commonly used in India)
  const cleanPhone = lead.phone.replace(/[^0-9]/g, "");
  if (!cleanPhone || cleanPhone.length < 10) {
    return { isValid: false, error: "Please enter a valid 10-digit mobile number." };
  }

  // 4. Time verification
  const leadTime = new Date(lead.timestamp);
  if (isNaN(leadTime.getTime())) {
    return { isValid: false, error: "Invalid timestamp." };
  }

  return { isValid: true };
}

/**
 * Basic rate limiting to prevent spam flooding.
 */
export function checkRateLimit(ipAddress: string): boolean {
  if (!ipAddress) return true; // Bypass if IP cannot be detected

  const now = Date.now();
  const history = ipRequestHistory.get(ipAddress) || [];
  
  // Filter out requests older than the window
  const activeRequests = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  
  if (activeRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }
  
  // Record this request
  activeRequests.push(now);
  ipRequestHistory.set(ipAddress, activeRequests);
  return true;
}
