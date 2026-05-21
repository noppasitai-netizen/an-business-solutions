import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;

    // TODO: Connect this endpoint to n8n, Google Sheets, CRM, LINE Notify, or email notification.
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          submittedAt: new Date().toISOString(),
          source: "Website Lead Form",
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`);
      }

      return NextResponse.json({
        success: true,
        webhookTriggered: true,
        message: "Lead data successfully forwarded to webhook.",
      });
    }

    // Fallback response when no webhook is set up
    return NextResponse.json({
      success: true,
      webhookTriggered: false,
      message: "No webhook URL configured. Fallback to localStorage.",
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process lead submission.",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
