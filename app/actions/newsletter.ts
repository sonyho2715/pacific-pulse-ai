'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface NewsletterResult {
  success: boolean;
  error?: string;
}

export async function subscribeToNewsletter(email: string): Promise<NewsletterResult> {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  try {
    // Send confirmation email to the subscriber
    await resend.emails.send({
      from: 'Pacific Pulse AI <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Pacific Pulse AI Newsletter!',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #7c3aed; margin-bottom: 24px;">Welcome to Pacific Pulse AI!</h1>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for subscribing to our newsletter. You'll be the first to know about:
          </p>
          <ul style="color: #374151; font-size: 16px; line-height: 1.8;">
            <li>New AI features and updates</li>
            <li>Industry insights and best practices</li>
            <li>Exclusive offers and early access</li>
          </ul>
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 24px;">
            Stay tuned for exciting updates!
          </p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 32px;">
            Best regards,<br/>
            The Pacific Pulse AI Team
          </p>
        </div>
      `,
    });

    // Notify admin of new subscriber
    await resend.emails.send({
      from: 'Pacific Pulse AI <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'mrsonyho@gmail.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; padding: 20px;">
          <h2 style="color: #7c3aed;">New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, error: 'Failed to subscribe. Please try again.' };
  }
}
