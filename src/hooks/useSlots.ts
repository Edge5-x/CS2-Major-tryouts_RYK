'use client'

import { useState, useEffect, useCallback } from 'react'

const TOTAL_SLOTS = 40
const FALLBACK_COUNT = 27

interface SlotsData {
  total: number
  registered: number
}

let cachedData: SlotsData | null = null
let fetchPromise: Promise<SlotsData> | null = null
const listeners = new Set<() => void>()

function notifyListeners() {
  listeners.forEach((cb) => cb())
}

async function fetchSlots(): Promise<SlotsData> {
  try {
    const res = await fetch('/api/slots', { next: { revalidate: 0 } })
    if (!res.ok) throw new Error('Failed')
    const data = await res.json()
    cachedData = data
    notifyListeners()
    return data
  } catch {
    const fallback = { total: TOTAL_SLOTS, registered: FALLBACK_COUNT }
    cachedData = fallback
    notifyListeners()
    return fallback
  }
}

/** Shared hook — all components see the same data, one fetch. */
export function useSlots() {
  const [data, setData] = useState<SlotsData>(
    cachedData ?? { total: TOTAL_SLOTS, registered: FALLBACK_COUNT }
  )

  useEffect(() => {
    // Subscribe to updates
    const update = () => {
      if (cachedData) setData({ ...cachedData })
    }
    listeners.add(update)

    // Trigger a single fetch if none in flight
    if (!fetchPromise) {
      fetchPromise = fetchSlots().finally(() => {
        fetchPromise = null
      })
    }

    return () => {
      listeners.delete(update)
    }
  }, [])

  /** Call after a successful registration to bump the count instantly. */
  const increment = useCallback(() => {
    if (cachedData) {
      cachedData = {
        ...cachedData,
        registered: Math.min(cachedData.registered + 1, cachedData.total),
      }
      notifyListeners()
    }
    // Also refetch from DB to stay in sync
    fetchSlots()
  }, [])

  return { ...data, increment }
}
