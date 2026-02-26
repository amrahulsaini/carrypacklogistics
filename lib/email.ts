import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface LeadData {
  name: string;
  contactNumber: string;
  email: string;
  movingFrom: string;
  movingTo: string;
  movingDate: string;
  message?: string;
}

export async function sendLeadNotification(leadData: LeadData) {
  const { name, contactNumber, email, movingFrom, movingTo, movingDate, message } = leadData;

  // Email to customer
  const customerMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Thank You for Your Inquiry - Carry Pack Logistics',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .detail-row { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
          .label { font-weight: bold; color: #2563eb; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Carry Pack Logistics</h1>
            <p>Structured Logistics. Transparent Commitments. Premium Execution.</p>
          </div>
          <div class="content">
            <h2>Thank You for Your Inquiry!</h2>
            <p>Dear ${name},</p>
            <p>We have received your moving request and our team will contact you shortly to discuss your requirements.</p>
            
            <h3>Your Request Details:</h3>
            <div class="detail-row">
              <span class="label">Moving From:</span> ${movingFrom}
            </div>
            <div class="detail-row">
              <span class="label">Moving To:</span> ${movingTo}
            </div>
            <div class="detail-row">
              <span class="label">Moving Date:</span> ${movingDate}
            </div>
            <div class="detail-row">
              <span class="label">Contact Number:</span> ${contactNumber}
            </div>
            ${message ? `<div class="detail-row"><span class="label">Additional Message:</span> ${message}</div>` : ''}
            
            <p>Our logistics experts will reach out to you within 24 hours to provide a customized quote and answer any questions you may have.</p>
            
            <p><strong>Need immediate assistance?</strong><br>
            📧 Email: sales@carrypacklogistics.com<br>
            📞 Phone: +91 89494 37619</p>
          </div>
          <div class="footer">
            <p>Office No.223, Bijal Business Centre, Aslali Circle, Ahmedabad</p>
            <p>&copy; ${new Date().getFullYear()} Carry Pack Logistics. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // Email to admin
  const adminMailOptions = {
    from: process.env.GMAIL_USER,
    to: ['sales@carrypacklogistics.com', 'carrypacklogistics@gmail.com'],
    subject: `New Lead: ${name} - Moving from ${movingFrom} to ${movingTo}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .detail-row { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #2563eb; border-radius: 5px; }
          .label { font-weight: bold; color: #2563eb; display: block; margin-bottom: 5px; }
          .value { color: #333; font-size: 16px; }
          .urgent { background: #fef2f2; border-left-color: #ef4444; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚨 NEW LEAD RECEIVED</h1>
            <p>Carry Pack Logistics</p>
          </div>
          <div class="content">
            <h2>Lead Details:</h2>
            
            <div class="detail-row urgent">
              <span class="label">👤 Customer Name:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">📞 Contact Number:</span>
              <span class="value">${contactNumber}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">📧 Email:</span>
              <span class="value">${email}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">📍 Moving From:</span>
              <span class="value">${movingFrom}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">📍 Moving To:</span>
              <span class="value">${movingTo}</span>
            </div>
            
            <div class="detail-row urgent">
              <span class="label">📅 Moving Date:</span>
              <span class="value">${movingDate}</span>
            </div>
            
            ${message ? `
            <div class="detail-row">
              <span class="label">💬 Additional Message:</span>
              <span class="value">${message}</span>
            </div>
            ` : ''}
            
            <div class="detail-row">
              <span class="label">⏰ Received At:</span>
              <span class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
            </div>
            
            <p style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 5px; text-align: center;">
              <strong>⚡ Action Required:</strong> Contact this lead within 24 hours for best conversion rate!
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    console.log('Emails sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}
