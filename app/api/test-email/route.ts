import { NextRequest, NextResponse } from 'next/server';
import { sendStatusUpdateEmail } from '@/lib/email';

export async function GET(request: NextRequest) {
  // Simple test endpoint to verify email configuration
  const testPassword = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (testPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    console.log('🧪 Testing email configuration...');
    console.log('BREVO_SMTP_USER:', process.env.BREVO_SMTP_USER ? '✅ Set' : '❌ Not set');
    console.log('BREVO_SMTP_PASSWORD:', process.env.BREVO_SMTP_PASSWORD ? '✅ Set' : '❌ Not set');

    // Send a test email
    await sendStatusUpdateEmail({
      name: 'Test Customer',
      contactNumber: '9876543210',
      email: 'sales@carrypacklogistics.com', // Send to yourself for testing
      movingFrom: 'Mumbai',
      movingTo: 'Ahmedabad',
      movingDate: new Date().toISOString(),
      status: 'contacted'
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully!',
      config: {
        smtpUser: process.env.BREVO_SMTP_USER,
        smtpPasswordSet: !!process.env.BREVO_SMTP_PASSWORD
      }
    });
  } catch (error: any) {
    console.error('❌ Test email failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      details: error.stack
    }, { status: 500 });
  }
}
