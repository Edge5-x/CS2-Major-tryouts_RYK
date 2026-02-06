'use client'

import { useState, useEffect } from 'react'

const TOURNAMENT_DATE = new Date('2026-02-15T11:00:00')

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const dist = TOURNAMENT_DATE.getTime() - now
      if (dist < 0) return
      setTimeLeft({
        days: Math.floor(dist / 86400000),
        hours: Math.floor((dist % 86400000) / 3600000),
        minutes: Math.floor((dist % 3600000) / 60000),
        seconds: Math.floor((dist % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const blocks = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HRS' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEC' },
  ]

  return (
    <div className="flex items-center justify-center gap-3">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-cs2-dark-card border border-white/5 flex items-center justify-center relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              {/* Top orange accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cs2-orange/60" />
              <span className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                {b.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] text-white/30 tracking-[0.2em] mt-2 font-medium">{b.label}</span>
          </div>
          {i < 3 && <span className="text-cs2-orange/40 text-lg font-light mb-5">/</span>}
        </div>
      ))}
    </div>
  )
}
