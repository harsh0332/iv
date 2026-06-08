export type LeadType = "site-visit" | "lead" | "plot-inquiry" | "callback" | "general";

export interface LeadPayload {
  name: string;
  phone: string;
  leadType: LeadType;
  message?: string;
  visitDate?: string;
  visitTime?: string;
  budgetRange?: string;
  source?: string;
  timestamp: string;
  pageUrl?: string;
  userAgent?: string;
  ipAddress?: string;
  honeypot?: string; // Anti-spam honeypot
}

export interface WebhookPayload {
  name: string;
  phone: string;
  leadType: LeadType;
  message: string;
  timestamp: string;
  source: string;
  page: string;
  visitDate?: string;
  visitTime?: string;
  budgetRange?: string;
}
