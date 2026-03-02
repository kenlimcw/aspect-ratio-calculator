import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO_EMAIL = process.env.FEEDBACK_TO_EMAIL ?? "";
  const FROM_EMAIL = process.env.FEEDBACK_FROM_EMAIL ?? "onboarding@resend.dev";

  try {
    const body = await req.json();
    const { type } = body;

    if (!TO_EMAIL) {
      return NextResponse.json({ error: "Feedback email not configured" }, { status: 500 });
    }

    let subject: string;
    let html: string;

    if (type === "feedback") {
      const { message } = body;
      if (!message?.trim()) {
        return NextResponse.json({ error: "Message is required" }, { status: 400 });
      }
      subject = `[Aspect Ratio Calc] Feedback received`;
      html = `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #0b0d11; color: #e2e4e8; border-radius: 12px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 24px;">
            <div style="width: 10px; height: 10px; background: #5b8fb9; border-radius: 50%;"></div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #5b8fb9; font-weight: 600;">User Feedback</span>
          </div>
          <h2 style="margin: 0 0 20px; font-size: 20px; color: #e2e4e8; font-weight: 600;">Aspect Ratio Calculator</h2>
          <div style="background: #161a22; border: 1px solid #262d3a; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #a8adb8; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          <p style="margin: 0; font-size: 12px; color: #636d80;">Sent from aspect-ratio-calculator.com</p>
        </div>
      `;
    } else if (type === "request") {
      const { role, industry, problem } = body;
      if (!role?.trim() || !industry?.trim() || !problem?.trim()) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }
      subject = `[Aspect Ratio Calc] Feature request from ${role}`;
      html = `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #0b0d11; color: #e2e4e8; border-radius: 12px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 24px;">
            <div style="width: 10px; height: 10px; background: #5bb8b2; border-radius: 50%;"></div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #5bb8b2; font-weight: 600;">Feature Request</span>
          </div>
          <h2 style="margin: 0 0 20px; font-size: 20px; color: #e2e4e8; font-weight: 600;">Aspect Ratio Calculator</h2>
          <div style="background: #161a22; border: 1px solid #262d3a; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
            <div style="display: grid; gap: 16px;">
              <div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #636d80; font-weight: 600; margin-bottom: 4px;">Role</div>
                <div style="font-size: 15px; color: #e2e4e8; font-weight: 500;">${role.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
              <div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #636d80; font-weight: 600; margin-bottom: 4px;">Industry</div>
                <div style="font-size: 15px; color: #e2e4e8; font-weight: 500;">${industry.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
              <div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #636d80; font-weight: 600; margin-bottom: 4px;">Problem to Solve</div>
                <div style="font-size: 15px; color: #a8adb8; line-height: 1.7; white-space: pre-wrap;">${problem.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
            </div>
          </div>
          <p style="margin: 0; font-size: 12px; color: #636d80;">Sent from aspect-ratio-calculator.com</p>
        </div>
      `;
    } else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Feedback route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
