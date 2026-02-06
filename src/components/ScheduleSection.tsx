'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Star, Users, Swords, Coffee, Target, Flame, Crown, Trophy, Clock, ChevronDown, ChevronUp } from 'lucide-react'

type SchedulePhase = 'morning' | 'afternoon' | 'evening'

const phases: { id: SchedulePhase; label: string; time: string; color: string }[] = [
  { id: 'morning', label: 'Morning', time: '11 AM – 2 PM', color: 'from-white/20 to-cs2-orange/40' },
  { id: 'afternoon', label: 'Afternoon', time: '2 PM – 5 PM', color: 'from-cs2-orange/40 to-cs2-orange/60' },
  { id: 'evening', label: 'Evening', time: '5 PM – 10:30 PM', color: 'from-cs2-orange/60 to-red-500/40' },
]

const schedule = [
  { time: '11:00 AM', end: '12:00 PM', title: 'Check-in & Registration', desc: 'Bring your CNIC for identity verification. Set up peripherals at your assigned station. Test your gear before matches start.', icon: User, dur: '60 min', hot: false, phase: 'morning' as SchedulePhase, tag: 'SETUP' },
  { time: '12:00 PM', end: '12:20 PM', title: 'Opening Ceremony', desc: 'Tournament rules walkthrough, sponsor introductions, and pep talk from organizers.', icon: Star, dur: '20 min', hot: false, phase: 'morning' as SchedulePhase, tag: 'CEREMONY' },
  { time: '12:20 PM', end: '12:40 PM', title: 'Live Team Draft', desc: '8 captains pick players live based on Premier Rating. Balanced, fair, and intense. The heart of the format.', icon: Users, dur: '20 min', hot: true, phase: 'morning' as SchedulePhase, tag: 'HIGHLIGHT' },
  { time: '12:40 PM', end: '2:00 PM', title: 'Groups — Round 1 & 2', desc: 'Best-of-1 matches. 2 groups of 4 teams. Round-robin format begins. Every map matters.', icon: Swords, dur: '80 min', hot: false, phase: 'morning' as SchedulePhase, tag: 'BO1' },
  { time: '2:00 PM', end: '2:45 PM', title: 'Lunch Break', desc: 'Food provided on-site. Network with other players, discuss strats, and recharge.', icon: Coffee, dur: '45 min', hot: false, phase: 'afternoon' as SchedulePhase, tag: 'BREAK' },
  { time: '2:45 PM', end: '4:00 PM', title: 'Groups — Round 3', desc: 'Final group stage matches. Top 2 from each group advance to the playoff bracket.', icon: Swords, dur: '75 min', hot: false, phase: 'afternoon' as SchedulePhase, tag: 'BO1' },
  { time: '4:00 PM', end: '5:30 PM', title: 'Quarterfinals', desc: 'Single elimination BO1. The bracket narrows — 8 teams become 4.', icon: Target, dur: '90 min', hot: false, phase: 'afternoon' as SchedulePhase, tag: 'PLAYOFFS' },
  { time: '5:30 PM', end: '7:30 PM', title: 'Semifinals', desc: 'Best-of-3 series. Only 2 teams will remain to fight for the championship title.', icon: Flame, dur: '120 min', hot: true, phase: 'evening' as SchedulePhase, tag: 'BO3' },
  { time: '7:30 PM', end: '10:00 PM', title: 'Grand Finals', desc: 'The championship BO3. Two teams battle for the $250 grand prize. Everything on the line.', icon: Crown, dur: '150 min', hot: true, phase: 'evening' as SchedulePhase, tag: 'FINALS' },
  { time: '10:00 PM', end: '10:30 PM', title: 'Prize Ceremony', desc: 'Winners crowned, MVP announced, prize money distributed. Photos and celebration.', icon: Trophy, dur: '30 min', hot: false, phase: 'evening' as SchedulePhase, tag: 'CEREMONY' },
]

export default function ScheduleSection() {
  const [activePhase, setActivePhase] = useState<SchedulePhase | 'all'>('all')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = activePhase === 'all' ? schedule : schedule.filter(s => s.phase === activePhase)

  const tagColors: Record<string, string> = {
    'HIGHLIGHT': 'bg-cs2-orange/20 text-cs2-orange border-cs2-orange/30',
    'BO3': 'bg-red-500/10 text-red-400 border-red-500/20',
    'FINALS': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'BO1': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'PLAYOFFS': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'SETUP': 'bg-white/5 text-white/40 border-white/10',
    'CEREMONY': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'BREAK': 'bg-white/5 text-white/30 border-white/10',
  }

  return (
    <section id="schedule" className="relative py-24 sm:py-36 bg-cs2-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-diagonal opacity-20" />
      {/* Decorative large time watermark */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-10 font-display font-black text-[200px] sm:text-[300px] text-white/[0.01] select-none pointer-events-none leading-none tracking-tighter rotate-90">
        11:00
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/40 transform -skew-x-[25deg]" />
            <p className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase">Schedule</p>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/40 transform skew-x-[25deg]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-white mb-2">
            Sunday, Feb 15
          </h2>
          <p className="text-white/30 text-sm mb-1">11 AM – 10:30 PM • Full day of CS2</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-white/30">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white/20" /> 10 Events</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> ~11.5 hours</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cs2-orange" /> 3 Highlights</span>
          </div>
        </motion.div>

        {/* Phase filter tabs */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <button onClick={() => setActivePhase('all')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border ${
              activePhase === 'all'
                ? 'bg-white text-cs2-dark border-white'
                : 'bg-transparent text-white/40 border-white/10 hover:border-white/20 hover:text-white/60'
            }`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
          >All</button>
          {phases.map(p => (
            <button key={p.id} onClick={() => setActivePhase(p.id)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                activePhase === p.id
                  ? 'bg-cs2-orange text-white border-cs2-orange'
                  : 'bg-transparent text-white/40 border-white/10 hover:border-white/20 hover:text-white/60'
              }`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              {p.label} <span className="text-[10px] opacity-60 ml-1 font-normal">{p.time}</span>
            </button>
          ))}
        </motion.div>

        {/* Snake timeline */}
        <div className="relative">
          {/* Vertical snake connector line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px]">
            <div className="w-full h-full bg-gradient-to-b from-white/15 via-cs2-orange/25 to-cs2-orange/10" />
          </div>

          <div className="space-y-4">
            {filtered.map((item, i) => {
              const isExpanded = expanded === i
              const Icon = item.icon

              return (
                <motion.div key={`${item.time}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline node */}
                  <div className={`absolute left-[14px] sm:left-[20px] top-6 z-10 transition-all duration-300 ${
                    item.hot ? 'scale-110' : ''
                  }`}>
                    <div className={`w-[28px] h-[28px] flex items-center justify-center border-2 transition-all duration-300 ${
                      item.hot
                        ? 'bg-cs2-orange border-cs2-orange shadow-[0_0_20px_rgba(235,107,9,0.5)]'
                        : 'bg-cs2-dark border-white/15 group-hover:border-white/30'
                    }`} style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                      <Icon className={`w-3 h-3 ${item.hot ? 'text-white' : 'text-white/30'}`} />
                    </div>
                    {/* Pulse ring for hot items */}
                    {item.hot && (
                      <div className="absolute inset-[-4px] border-2 border-cs2-orange/30 animate-ping"
                        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`group cursor-pointer transition-all duration-300 border relative overflow-hidden ${
                      item.hot
                        ? 'bg-gradient-to-r from-cs2-orange/[0.06] via-cs2-orange/[0.03] to-transparent border-cs2-orange/15 hover:border-cs2-orange/30'
                        : 'bg-[#131313] border-white/[0.04] hover:border-white/[0.1] hover:bg-[#161616]'
                    }`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
                    onClick={() => setExpanded(isExpanded ? null : i)}
                  >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                      item.hot ? 'bg-gradient-to-r from-cs2-orange via-cs2-orange/60 to-transparent' : 'bg-gradient-to-r from-white/10 to-transparent'
                    }`} />

                    {/* Corner triangle */}
                    <div className={`absolute top-0 right-0 w-10 h-10 ${item.hot ? 'bg-cs2-orange/[0.06]' : 'bg-white/[0.02]'}`}
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                    />

                    <div className="p-5 sm:p-6">
                      {/* Row 1: Time range + tag + duration */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {/* Time badge */}
                          <div className={`px-3 py-1.5 text-sm font-mono font-bold ${
                            item.hot ? 'bg-cs2-orange/10 text-cs2-orange' : 'bg-white/[0.04] text-white/60'
                          }`} style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                            {item.time}
                          </div>
                          <span className="text-white/15 text-xs">→</span>
                          <span className="text-white/30 text-xs font-mono">{item.end}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${tagColors[item.tag] || 'bg-white/5 text-white/30 border-white/10'}`}>
                            {item.tag}
                          </span>
                          <span className="text-[11px] text-white/20 font-mono hidden sm:inline">{item.dur}</span>
                        </div>
                      </div>

                      {/* Row 2: Title + expand toggle */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${item.hot ? 'text-cs2-orange' : 'text-white/20 group-hover:text-white/40'} transition-colors`} />
                          <h4 className={`font-bold font-display text-lg ${item.hot ? 'text-white' : 'text-white/80 group-hover:text-white'} transition-colors`}>
                            {item.title}
                          </h4>
                          {item.hot && (
                            <span className="w-1.5 h-1.5 bg-cs2-orange rounded-full animate-pulse" />
                          )}
                        </div>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                        </motion.div>
                      </div>

                      {/* Expandable description */}
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-3 border-t border-white/[0.04]">
                          <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                          {item.hot && (
                            <div className="mt-3 flex items-center gap-2">
                              <Flame className="w-3.5 h-3.5 text-cs2-orange" />
                              <span className="text-cs2-orange text-xs font-bold uppercase tracking-wider">Must Watch</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Diagonal stripe texture for hot items */}
                    {item.hot && <div className="absolute inset-0 diagonal-stripe-bg opacity-20 pointer-events-none" />}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* End marker */}
          <div className="relative pl-16 sm:pl-20 mt-6">
            <div className="absolute left-[18px] sm:left-[24px] top-2 w-[16px] h-[16px] bg-white/10 border-2 border-white/20"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
            <p className="text-white/20 text-xs uppercase tracking-wider font-bold pt-1">End of Day</p>
          </div>
        </div>

        {/* Bottom stats bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { label: 'Total Matches', value: '~15', sub: 'BO1 + BO3' },
            { label: 'Maps Played', value: '~25', sub: 'Active Duty' },
            { label: 'Hours of CS2', value: '11.5', sub: 'Non-stop action' },
            { label: 'Highlight Matches', value: '3', sub: 'Draft · Semis · Finals' },
          ].map((s, i) => (
            <div key={i} className="text-center p-4 bg-[#131313] border border-white/[0.04] relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="text-2xl sm:text-3xl font-black font-display text-white">{s.value}</div>
              <div className="text-[11px] text-white/50 font-bold uppercase tracking-wider mt-1">{s.label}</div>
              <div className="text-[10px] text-white/20 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
