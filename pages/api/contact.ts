import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { fullName, company, phone, email, inquiryType, message } = req.body;

  if (!fullName || !company || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASSWORD;

  if (!user || !pass) {
    return res.status(500).json({ success: false, message: 'Email configuration error.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const mailOptions = {
    from: user,
    to: "addisuyafet321@gmail.com",
    replyTo: email || user,
    subject: `New Contact Inquiry from ${fullName} — ${company}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd; width: 120px;">Full Name</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">Company</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">Phone</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${email || '(not provided)'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; border: 1px solid #ddd;">Inquiry Type</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${inquiryType || 'General Inquiry'}</td>
          </tr>
        </table>
        <div style="margin-top: 20px;">
          <h3 style="color: #1a1a1a;">Message</h3>
          <p style="padding: 12px; background: #f9f9f9; border: 1px solid #ddd; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #888;">Sent from YAMA Construction contact form</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Your message has been sent successfully. We will get back to you within 24 hours.' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
}