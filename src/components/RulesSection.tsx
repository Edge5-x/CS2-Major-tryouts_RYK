'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function RulesSection() {
  const sections = [
    { title: 'Eligibility', items: ['16+ years old', 'Valid Pakistani CNIC', 'Active Steam account with CS2', 'Visible Premier Rating'] },
    { title: 'Equipment', items: ['PCs & monitors provided', 'Bring your own peripherals', 'No external software allowed', 'Mousepads available on-site'] },
    { title: 'Fair Play', items: ['FACEIT Anti-Cheat mandatory', 'Settings verified before matches', 'Toxic behavior = DQ', 'Admin decisions are final'] },
    { title: 'Format', items: ['Skill-based team draft', 'Groups: BO1 round robin', 'Playoffs: BO1 QF, BO3 SF/F', 'Map pool: Active Duty'] },
  ]

  return (
    <section id="rules" className="relative py-24 sm:py-32 bg-cs2-dark">
      <div className="absolute inset-0 bg-grid-diagonal opacity-15" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/40 transform -skew-x-[25deg]" />
            <p className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase">Rules</p>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/40 transform skew-x-[25deg]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            Rules & Requirements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-[#161616] border border-white/[0.05] p-5 group hover:border-cs2-orange/10 transition-all duration-300 relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
            >
              {/* Top accent — white-to-orange */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/10 via-cs2-orange/20 to-white/10 group-hover:from-white/20 group-hover:via-cs2-orange/40 group-hover:to-white/20 transition-colors" />
              {/* Corner triangle decoration — white tint */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-white/[0.03] group-hover:bg-white/[0.06]"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              />

              <h3 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
                <span className="diamond-bullet" />
                {s.title}
              </h3>
              <ul className="space-y-2.5">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-white/40">
                    <Check className="w-3.5 h-3.5 text-cs2-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
