import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, cnic, steamId, premierRating, age, city, experience } = body

    // ── Validate required fields ────────────────────
    if (!name || !email || !phone || !cnic || !steamId || !premierRating || !age) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── Validate CNIC format (XXXXX-XXXXXXX-X) ──────
    if (!/^\d{5}-\d{7}-\d{1}$/.test(cnic)) {
      return NextResponse.json({ error: 'Invalid CNIC format. Use XXXXX-XXXXXXX-X' }, { status: 400 })
    }

    // ── Validate phone format (03XX-XXXXXXX) ────────
    if (!/^03\d{2}-\d{7}$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number. Use 03XX-XXXXXXX format' }, { status: 400 })
    }

    // ── Generate registration ID ────────────────────
    const regId = `RYK-2026-${Date.now().toString(36).toUpperCase()}`

    // ── Save to Supabase ────────────────────────────
    const supabase = createServiceClient()

    const { data, error: dbError } = await supabase
      .from('registrations')
      .insert({
        reg_id: regId,
        name,
        email,
        phone,
        cnic,
        steam_id: steamId,
        premier_rating: premierRating,
        age: parseInt(age),
        city,
        experience: experience || null,
        status: 'pending_payment',
      })
      .select()
      .single()

    if (dbError) {
      console.error('Supabase error:', dbError)

      // Handle duplicate CNIC or email
      if (dbError.code === '23505') {
        return NextResponse.json({ error: 'You have already registered with this CNIC or email.' }, { status: 409 })
      }

      return NextResponse.json({ error: 'Failed to save registration. Please try again.' }, { status: 500 })
    }

    // ── Send confirmation via Supabase Auth invite ──
    // Uses the "Invite User" email template from Supabase Dashboard → Auth → Email Templates
    // Customize that template to include tournament info, payment details, etc.
    const { error: authError } = await supabase.auth.admin.inviteUserByEmail(email, {
      data: {
        name,
        reg_id: regId,
        premier_rating: premierRating,
        steam_id: steamId,
        city,
      },
    })

    if (authError) {
      // Auth email failure is non-fatal — registration is already saved
      console.warn('Supabase Auth invite email failed (non-fatal):', authError.message)
    }

    return NextResponse.json({ success: true, regId, data })
  } catch (err) {
    console.error('Registration error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
