'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Crosshair } from 'lucide-react'
import { useSlots } from '@/hooks/useSlots'

export default function Navigation() {
  const { total, registered } = useSlots()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      {/* Top diagonal accent stripe — white-to-orange gradient */}
      <div className={`h-[2px] bg-gradient-to-r from-white/80 via-cs2-orange to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18">
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Skewed orange bar + crosshair */}
          <div className="relative">
            <div className="w-8 h-8 bg-cs2-orange/10 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
              <Crosshair className="w-5 h-5 text-cs2-orange group-hover:rotate-90 transition-transform duration-500" />
            </div>
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-lg tracking-tight">
              CS2 <span className="text-cs2-orange">MAJOR</span>
            </span>
            <span className="block text-[9px] text-white/30 tracking-[0.3em]">RYK 2026</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Schedule', 'Prizes', 'Rules', 'Contact', 'Register'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="nav-link text-[13px] text-white/50 hover:text-white transition-colors font-medium"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/40 font-mono">
            <div className="w-1.5 h-1.5 bg-green-500 rotate-45" />
            {registered}/{total}
          </div>
          <a href="#register"
            className="btn-primary bg-white text-cs2-dark px-6 py-2.5 text-sm font-bold tracking-wide hover:bg-cs2-orange hover:text-white transition-colors"
          >
            REGISTER
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
