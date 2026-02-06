'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function generateParticles() {
  return Array.from({ length: 24 }, (_, i) => ({
    id: i,
    isDiamond: i % 4 === 0,
    w: Math.round(seededRandom(i * 7 + 1) * 300 + 100) / 100,
    left: Math.round(seededRandom(i * 7 + 3) * 10000) / 100,
    top: Math.round(seededRandom(i * 7 + 4) * 10000) / 100,
    dur: seededRandom(i * 7 + 5) * 15 + 12,
    delay: seededRandom(i * 7 + 6) * 10,
    isOrange: i % 3 === 0,
  }))
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<ReturnType<typeof generateParticles>>([])

  useEffect(() => {
    setParticles(generateParticles())
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            width: p.w,
            height: p.w,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: p.isOrange ? '#EB6B09' : 'rgba(255,255,255,0.3)',
            transform: p.isDiamond ? 'rotate(45deg)' : undefined,
            borderRadius: p.isDiamond ? '1px' : '50%',
          }}
          animate={{ y: [0, -700], opacity: [0, 0.4, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}
    </div>
  )
}
