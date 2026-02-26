import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { sendLeadNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contactNumber, email, movingFrom, movingTo, movingDate, message } = body;

    // Validate required fields
    if (!name || !contactNumber || !email || !movingFrom || !movingTo || !movingDate) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Insert lead into database
    const result = await sql`
      INSERT INTO leads (name, contact_number, email, moving_from, moving_to, moving_date, message)
      VALUES (${name}, ${contactNumber}, ${email}, ${movingFrom}, ${movingTo}, ${movingDate}, ${message || null})
      RETURNING *
    `;

    // Send email notifications
    try {
      await sendLeadNotification({
        name,
        contactNumber,
        email,
        movingFrom,
        movingTo,
        movingDate,
        message,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails - lead is saved
    }

    return NextResponse.json(
      { message: 'Lead submitted successfully', lead: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
