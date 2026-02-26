import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db';
import { sendStatusUpdateEmail } from '@/lib/email';

export async function GET(request: NextRequest) {
  try {
    // Initialize database (creates table if not exists)
    await initDatabase();

    const authHeader = request.headers.get('authorization');
    const password = authHeader?.replace('Bearer ', '');

    // Check password
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch all leads ordered by created_at desc
    const result = await sql`
      SELECT * FROM leads
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ leads: result.rows }, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const password = authHeader?.replace('Bearer ', '');
    const expectedPassword = process.env.ADMIN_PASSWORD;

    // Check password
    if (password !== expectedPassword) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID and status are required' },
        { status: 400 }
      );
    }

    // Update lead status
    const result = await sql`
      UPDATE leads
      SET status = ${status}
      WHERE id = ${id}
      RETURNING *
    `;

    const updatedLead = result.rows[0];

    // Send status update email to customer (async, don't block response)
    if (updatedLead && updatedLead.status !== 'new') {
      sendStatusUpdateEmail({
        name: updatedLead.name,
        contactNumber: updatedLead.contact_number,
        email: updatedLead.email,
        movingFrom: updatedLead.moving_from,
        movingTo: updatedLead.moving_to,
        movingDate: updatedLead.moving_date,
        status: updatedLead.status,
      }).catch(error => {
        console.error('Failed to send status update email:', error);
        // Don't fail the request if email fails
      });
    }

    return NextResponse.json(
      { message: 'Lead updated successfully', lead: updatedLead },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}
