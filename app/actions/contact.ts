'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  // Validation
  if (!data.name || data.name.trim().length < 2) {
    return { success: false, error: 'Please enter your name' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  if (!data.message || data.message.trim().length < 10) {
    return { success: false, error: 'Please enter a message (at least 10 characters)' };
  }

  try {
    // Send notification to admin
    await resend.emails.send({
      from: 'Pacific Pulse AI <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'mrsonyho@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      replyTo: data.email,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #7c3aed; margin-bottom: 24px;">New Contact Form Submission</h1>

          <div style="background: #f9fafb; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 0 0 12px;"><strong>Email:</strong> ${data.email}</p>
            ${data.company ? `<p style="margin: 0 0 12px;"><strong>Company:</strong> ${data.company}</p>` : ''}
            <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <h2 style="color: #374151; font-size: 18px; margin-bottom: 12px;">Message:</h2>
          <div style="background: #f3f4f6; border-left: 4px solid #7c3aed; padding: 16px; border-radius: 4px;">
            <p style="color: #374151; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 32px;">
            Reply directly to this email to respond to ${data.name}.
          </p>
        </div>
      `,
    });

    // Send confirmation to the user
    await resend.emails.send({
      from: 'Pacific Pulse AI <onboarding@resend.dev>',
      to: data.email,
      subject: 'We received your message - Pacific Pulse AI',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #7c3aed; margin-bottom: 24px;">Thank You for Reaching Out!</h1>

          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Hi ${data.name},
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            We've received your message and appreciate you contacting Pacific Pulse AI.
            Our team will review your inquiry and get back to you within 24-48 hours.
          </p>

          <div style="background: #f9fafb; border-radius: 8px; padding: 24px; margin: 24px 0;">
            <h3 style="color: #374151; margin: 0 0 12px;">Your Message:</h3>
            <p style="color: #6b7280; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>

          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our services and see how AI can transform your business.
          </p>

          <p style="color: #6b7280; font-size: 14px; margin-top: 32px;">
            Best regards,<br/>
            The Pacific Pulse AI Team
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}
