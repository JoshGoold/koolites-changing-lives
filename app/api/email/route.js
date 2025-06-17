import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // ✅ Use proper env names
    pass: process.env.PASSWORD,
  },
});

function generateEmailHtml(name, email, message, org, phone) {
  // Escape HTML to prevent XSS
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" cellspacing="0" cellpadding="0" border="0">
              <!-- Header -->
              <tr>
                <td style="background-color: #0053a0; padding: 20px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Koolites Changing Lives</h1>
                  <p style="color: #ffffff; margin: 5px 0 0; font-size: 16px;">New Contact Form Submission</p>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  <h2 style="color: #333333; font-size: 20px; margin: 0 0 20px;">Hello,</h2>
                  <p style="color: #555555; font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                    You’ve received a new message from your website contact form. Below are the details:
                  </p>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #333333; font-size: 16px; display: inline-block; width: 120px;">Name:</strong>
                        <span style="color: #555555; font-size: 16px;">${escapeHtml(name)}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #333333; font-size: 16px; display: inline-block; width: 120px;">Email:</strong>
                        <span style="color: #555555; font-size: 16px;">${escapeHtml(email)}</span>
                      </td>
                    </tr>
                    ${phone ? `
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #333333; font-size: 16px; display: inline-block; width: 120px;">Phone:</strong>
                        <span style="color: #555555; font-size: 16px;">${escapeHtml(phone)}</span>
                      </td>
                    </tr>` : ""}
                    ${org ? `
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #333333; font-size: 16px; display: inline-block; width: 120px;">Organization:</strong>
                        <span style="color: #555555; font-size: 16px;">${escapeHtml(org)}</span>
                      </td>
                    </tr>` : ""}
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #333333; font-size: 16px; display: inline-block; width: 120px; vertical-align: top;">Message:</strong>
                        <span style="color: #555555; font-size: 16px; display: inline-block; max-width: 400px;">${escapeHtml(message)}</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f8f8; padding: 20px; text-align: center;">
                  <p style="color: #777777; font-size: 14px; margin: 0;">
                    Sent from <a href="https://koolites-changing-lives.vercel.app" style="color: #0053a0; text-decoration: none;">Koolites Changing Lives</a>
                  </p>
                  <p style="color: #777777; font-size: 14px; margin: 5px 0 0;">
                    &copy; ${new Date().getFullYear()} Koolites Changing Lives. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function POST(req){
    console.log(process.env.USER); 
    console.log(process.env.PASSWORD); 
    const body = await req.json();
    const {message, email, phone, org, name} = body;

    try {
       const status = await sendEmailNotification(email, name, message, org, phone)
       if(status === 0){
        return NextResponse.json({Message: "Email failed to send", Success: false}, {status: 400})
       }
       return NextResponse.json({Message: "Email Sent Successfully!", Success: true}, {status: 200})

    } catch (error) {
        console.error("Error occured while sending email: ",error)
        return NextResponse.json({Message: "Server Error", Error: error.message, Success: false}, {status: 500})
    }

}

async function sendEmailNotification(email, name, message, org, phone) {
    const htmlString = generateEmailHtml(name, email, message, org, phone);
    try {
  
      const info = await transporter.sendMail({
        from: `"Koolites Changing Lives" <${process.env.SMTP_USER}>`,
        to: "kooliteschanginglives@outlook.com",
        subject: "You received a message from your website",
        html: htmlString,
      });
  
      console.log("Email sent:", info.messageId);
      return 1;
    } catch (error) {
      console.error("Error sending email:", error);
      return 0;
    }
  }