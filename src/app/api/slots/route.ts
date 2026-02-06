import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

const TOTAL_SLOTS = 40
const BASE_COUNT = 27 // baseline before DB registrations

export async function GET() {
  try {
    const supabase = createServiceClient()

    const { count, error } = await supabase
      .from('registrations')
      .select('*', { count: 'exact', head: true })

    if (error) {
      // Table might not exist yet — return baseline
      console.warn('Slots count query failed:', error.message)
      return NextResponse.json({ total: TOTAL_SLOTS, registered: BASE_COUNT })
    }

    // Real count from DB + the baseline of pre-registered players
    const registered = Math.min(BASE_COUNT + (count ?? 0), TOTAL_SLOTS)

    return NextResponse.json({ total: TOTAL_SLOTS, registered })
  } catch {
    return NextResponse.json({ total: TOTAL_SLOTS, registered: BASE_COUNT })
  }
}
