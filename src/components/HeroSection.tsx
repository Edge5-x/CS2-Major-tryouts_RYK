'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Calendar, MapPin, Users, Clock, Ticket, ChevronRight, ChevronDown, Crosshair
} from 'lucide-react'
import ParticlesBackground from './ui/ParticlesBackground'
import CountdownTimer from './ui/CountdownTimer'
import AnimatedCounter from './ui/AnimatedCounter'
import { useSlots } from '@/hooks/useSlots'

export default function HeroSection() {
  const { total, registered } = useSlots()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 bg-grid-diagonal opacity-40" />
      <ParticlesBackground />

      {/* Subtle light accent along diagonal — no orange wash */}
      <div className="absolute inset-0"
        style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 15% 100%)' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
      </div>

      {/* Decorative crosshairs */}
      <Crosshair className="absolute top-[20%] right-[15%] w-20 h-20 text-cs2-orange/[0.04] rotate-12" />
      <Crosshair className="absolute bottom-[25%] left-[10%] w-14 h-14 text-white/[0.02] -rotate-12" />
      <Crosshair className="absolute top-[60%] right-[8%] w-10 h-10 text-cs2-orange/[0.03] rotate-45" />

      {/* Warm glow — reduced and whiter center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[200px]" />
      <div className="absolute top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cs2-orange/[0.04] rounded-full blur-[180px]" />

      {/* Giant background "2026" watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[180px] sm:text-[280px] lg:text-[380px] text-white/[0.015] select-none pointer-events-none leading-none tracking-tighter">
        2026
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 pt-32 pb-24 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

          {/* Badge — angular */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] px-5 py-2 mb-8"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full bg-green-400 opacity-75 rotate-45" />
              <span className="relative h-2 w-2 bg-green-400 rotate-45" />
            </span>
            <span className="text-xs font-medium text-white/70">Registration Open</span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-cs2-orange font-bold">{total - registered} slots left</span>
          </motion.div>

          {/* CS2 Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mb-6">
            <div className="inline-flex items-center gap-2 mx-auto">
              <span className="text-3xl sm:text-4xl font-black font-display tracking-tighter text-white">
                CS<span className="text-cs2-orange">2</span>
              </span>
              <span className="w-px h-6 bg-white/20" />
              <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[4px] font-bold">Counter-Strike</span>
            </div>
          </motion.div>

          {/* Title — bigger, bolder */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-white leading-[0.9]">
              PAKISTAN <span className="text-white/90">MAJOR</span>
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-cs2-orange glow-orange leading-[0.9] mt-1">
              2026
            </span>
            {/* White underline accent */}
            <div className="mx-auto mt-3 h-[3px] w-32 bg-gradient-to-r from-white via-white/60 to-cs2-orange" />
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="text-lg sm:text-xl text-white/40 font-display tracking-[0.3em] mt-4 mb-8"
          >
            RAHIM YAR KHAN TRYOUTS
          </motion.p>

          {/* Event Info — angular badges */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-10"
          >
            {[
              { icon: Calendar, text: 'Feb 15, 2026' },
              { icon: Clock, text: '11:00 AM' },
              { icon: MapPin, text: 'Etihad Club, RYK' },
              { icon: Users, text: '40 Players' },
            ].map((item, i) => (
              <span key={i}
                className="flex items-center gap-1.5 text-sm text-white/50 bg-white/[0.03] px-3 py-1.5 border border-white/[0.04]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <item.icon className="w-3.5 h-3.5 text-cs2-orange" />{item.text}
              </span>
            ))}
          </motion.div>

          {/* Countdown */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="mb-12">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] mb-4">Starts In</p>
            <CountdownTimer />
          </motion.div>

          {/* Stats — angular containers */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
            className="grid grid-cols-4 gap-3 max-w-lg mx-auto mb-12"
          >
            {[
              { v: 5000, p: '$', l: 'Prize' },
              { v: 40, l: 'Players' },
              { v: 8, l: 'Teams' },
              { v: 500, p: '$', l: 'MVP' },
            ].map((s, i) => (
              <div key={i}
                className="text-center bg-cs2-dark-card/60 border border-white/[0.04] py-3 px-2 relative overflow-hidden"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-cs2-orange/40 to-white/20" />
                <div className="text-xl sm:text-2xl font-bold font-display text-white">
                  <AnimatedCounter value={s.v} prefix={s.p} />
                </div>
                <div className="text-[10px] text-white/25 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA — angular buttons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a href="#register"
              className="btn-primary bg-cs2-orange text-white px-10 py-4 font-bold text-base inline-flex items-center justify-center gap-2 shimmer-diagonal relative"
            >
              <Ticket className="w-5 h-5" /> Register Now — PKR 500 <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#schedule"
              className="btn-secondary border border-white/20 hover:border-white/50 hover:bg-white/[0.05] text-white px-8 py-4 font-medium text-base inline-flex items-center justify-center gap-2 transition-all"
            >
              <Clock className="w-4 h-4" /> View Schedule
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — angular */}
        <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-white/20 hover:text-cs2-orange/50 transition-colors"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  )
}
