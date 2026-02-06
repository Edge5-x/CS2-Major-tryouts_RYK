'use client'

import { motion } from 'framer-motion'
import { Medal, Crown, Award, Star, Crosshair } from 'lucide-react'

export default function PrizeSection() {
  const prizes = [
    { place: '2ND', amount: '$1,500', per: '$300/player', icon: Medal, ord: 'md:order-1', big: false },
    { place: '1ST', amount: '$2,500', per: '$500/player', icon: Crown, ord: 'md:order-2', big: true },
    { place: '3RD', amount: '$750', per: '$150/player', icon: Award, ord: 'md:order-3', big: false },
    { place: '4TH', amount: '$250', per: '$50/player', icon: Star, ord: 'md:order-4', big: false },
  ]

  return (
    <section id="prizes" className="relative py-24 sm:py-32 bg-cs2-dark-lighter overflow-hidden">
      <div className="absolute inset-0 diagonal-stripe-bg opacity-30" />
      {/* Decorative crosshair watermark */}
      <Crosshair className="absolute top-20 right-10 w-40 h-40 text-cs2-orange/[0.02] rotate-12" />
      {/* Subtle glow behind 1st place */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cs2-orange/[0.04] rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/40 transform -skew-x-[25deg]" />
            <p className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase">Prizes</p>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/40 transform skew-x-[25deg]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white mb-2">
            $5,000 <span className="text-cs2-orange">Prize Pool</span>
          </h2>
          <p className="text-white/30 text-sm">+ $500 MVP Bonus</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-end mb-10">
          {prizes.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center ${p.ord} ${p.big ? 'md:-mt-6' : ''}`}
            >
              <div
                className={`bg-[#161616] border border-white/[0.05] relative overflow-hidden group hover:border-cs2-orange/10 transition-all duration-300 ${p.big ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}`}
                style={{
                  clipPath: p.big
                    ? 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                    : 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cs2-orange/40" />

                {/* Diagonal orange gradient for 1st place */}
                {p.big && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cs2-orange/[0.08] via-transparent to-transparent" />
                )}

                <div className="relative z-10">
                  {p.big && (
                    <div className="inline-block bg-cs2-orange text-white text-[10px] font-bold px-3 py-1 mb-4 tracking-wider"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                    >
                      CHAMPIONS
                    </div>
                  )}
                  <p.icon className={`mx-auto mb-3 text-cs2-orange ${p.big ? 'w-10 h-10' : 'w-8 h-8'}`} />
                  <div className="text-xs text-white/30 font-semibold mb-1">{p.place}</div>
                  <div className={`font-black font-display text-white ${p.big ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{p.amount}</div>
                  <div className="text-xs text-white/30 mt-1">{p.per}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MVP — angular */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div
            className="bg-[#161616] border border-cs2-orange/10 p-6 text-center relative overflow-hidden group"
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cs2-orange/60" />
            <div className="absolute inset-0 diagonal-stripe-bg opacity-40" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Star className="w-5 h-5 text-cs2-orange" />
                <span className="font-bold font-display text-white">Tournament MVP</span>
              </div>
              <div className="text-3xl font-black font-display text-cs2-orange glow-orange">$500</div>
              <p className="text-xs text-white/30 mt-1">Best K/D, ADR & Impact</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
