import { BrevoClient } from "@getbrevo/brevo";
import * as Bravo from "@getbrevo/brevo";

import { NextRequest, NextResponse } from "next/server";

const bodyField = ["email", "subject", "message", "name"];
const emailClient = new BrevoClient({ apiKey: process.env.BREVO_API_KEY });

export async function POST(request) {
  try {
    const body = await request.json();
    const missingField = [];

    bodyField.forEach((field) => {
      if (!(field in body)) missingField.push(field);
    });

    if (missingField.length) {
      return NextResponse.json(
        { error: `Missing field for email ${missingField.toString()}.` },
        { status: 400 },
      );
    }

    const { email, subject, message, name } = body;

    await emailClient.transactionalEmails.sendTransacEmail({
      sender: {
        email: process.env.BREVO_EMAIL,
        name,
      },
      to: [{ email: process.env.BREVO_EMAIL }],
      subject,
      htmlContent: `
      <html>
        <body>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </body>
      </html>
    `,
    });

    return NextResponse.json(
      { success: true, result: "Thanks for contacting" },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { success: false, result: "Error While Sending Email" },
      { status: 500 },
    );
  }
}
