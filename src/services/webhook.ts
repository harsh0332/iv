import { LeadPayload, WebhookPayload } from "@/types/lead";

/**
 * Sends lead data to the configured n8n / CRM webhook endpoint.
 */
export async function sendLeadToWebhook(lead: LeadPayload): Promise<boolean> {
  // Use server-side webhook URL first, fall back to public env var if needed
  const webhookUrl = process.env.WEBHOOK_URL || process.env.NEXT_PUBLIC_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("Webhook Integration: WEBHOOK_URL environment variable is not defined. Skipping webhook trigger.");
    // Return true in development to avoid breaking the user flow when webhook is unset
    return true;
  }

  // Format the message content for easy readability in spreadsheet/CRM
  let combinedMessage = lead.message || "";
  if (lead.leadType === "site-visit") {
    combinedMessage = `[Site Visit Request] Date: ${lead.visitDate || "Not Selected"}, Time: ${lead.visitTime || "Not Selected"}, Budget: ${lead.budgetRange || "Not Specified"}. ${combinedMessage}`;
  } else if (lead.leadType === "plot-inquiry") {
    combinedMessage = `[Plot Details Inquiry] ${combinedMessage}`;
  }

  // Prepare standard payload as requested
  const payload: WebhookPayload = {
    name: lead.name,
    phone: lead.phone,
    leadType: lead.leadType,
    message: combinedMessage.trim(),
    timestamp: lead.timestamp,
    source: lead.source || "direct",
    page: lead.pageUrl || "/",
    ...(lead.visitDate && { visitDate: lead.visitDate }),
    ...(lead.visitTime && { visitTime: lead.visitTime }),
    ...(lead.budgetRange && { budgetRange: lead.budgetRange }),
  };

  // Retry logic (up to 3 attempts)
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log(`Webhook Triggered Successfully (Attempt ${attempt}/${maxAttempts})`);
        return true;
      }

      console.error(`Webhook returned status ${response.status} on attempt ${attempt}`);
    } catch (error) {
      console.error(`Webhook connection error on attempt ${attempt}:`, error);
    }

    // Exponential backoff before retry (e.g. 500ms, 1000ms)
    if (attempt < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }

  return false;
}
