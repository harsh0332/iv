import { NextRequest } from "next/server";
import { LeadPayload } from "@/types/lead";
import { validateLead, checkRateLimit } from "@/lib/leads";
import { sendLeadToWebhook } from "@/services/webhook";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as LeadPayload;
    
    // Extract client IP address from headers
    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0] || 
                      request.headers.get("x-real-ip") || 
                      "127.0.0.1";

    // 1. Rate Limiting Check
    const isRateLimitOk = checkRateLimit(ipAddress);
    if (!isRateLimitOk) {
      return Response.json(
        { success: false, error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    // 2. Server-side Validation
    const validation = validateLead(body);
    if (!validation.isValid) {
      return Response.json(
        { success: false, error: validation.error || "Invalid input data." },
        { status: 400 }
      );
    }

    // 3. Trigger Webhook Integration (n8n/CRM/Google Sheets)
    const webhookSuccess = await sendLeadToWebhook({
      ...body,
      ipAddress,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    if (!webhookSuccess) {
      // Log internally but don't fail the user submission experience
      console.warn("Webhook delivery failed but lead process completed.");
    }

    // 4. Return success response
    return Response.json({
      success: true,
      message: "Lead processed successfully.",
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error("Lead submission endpoint error:", error);
    return Response.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
