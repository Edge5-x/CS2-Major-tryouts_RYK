'use client'

import { motion } from 'framer-motion'
import { User, Users, Swords, Trophy, Target, Shield, MapPin, Calendar, Clock } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-cs2-dark-lighter">
      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 diagonal-stripe-bg opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with skewed accent */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/40 transform -skew-x-[25deg]" />
            <p className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase">About The Tournament</p>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/40 transform skew-x-[25deg]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            Pakistan&apos;s First Major <span className="text-cs2-orange">CS2 LAN</span>
          </h2>
        </motion.div>

        {/* How it works — angular stepped cards with connecting diagonal line */}
        <div className="grid md:grid-cols-4 gap-px bg-white/[0.02] overflow-hidden mb-16 relative">
          {/* Connecting diagonal line across all cards — white-to-orange */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/30 via-cs2-orange/30 to-white/30" />

          {[
            { n: '01', title: 'Register', desc: 'Sign up with your Steam ID and Premier Rating', icon: User },
            { n: '02', title: 'Get Drafted', desc: 'Teams formed via live skill-balanced draft', icon: Users },
            { n: '03', title: 'Compete', desc: 'Play through group stage and playoffs', icon: Swords },
            { n: '04', title: 'Win', desc: 'Take home your share of the $5,000 prize pool', icon: Trophy },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-cs2-dark-card p-6 relative group overflow-hidden"
            >
              {/* Top accent that expands on hover \u2014 white-to-orange */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/40 to-cs2-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              {/* Diagonal corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-cs2-orange/[0.04] group-hover:bg-cs2-orange/[0.08] transition-colors"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              />
              {/* Large step number watermark */}
              <span className="text-6xl font-black font-display text-white/[0.03] absolute top-1 right-3 group-hover:text-cs2-orange/[0.06] transition-colors">{s.n}</span>
              <div className="w-9 h-9 bg-cs2-orange/10 flex items-center justify-center mb-4"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <s.icon className="w-4 h-4 text-cs2-orange" />
              </div>
              <h4 className="font-bold text-white mb-1 text-sm">{s.title}</h4>
              <p className="text-sm text-white/35">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Features — angular cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: User, title: 'Solo Registration', desc: 'No team needed. Get drafted tournament day.' },
            { icon: Target, title: 'Skill-Based Draft', desc: 'Balanced teams based on Premier Rating.' },
            { icon: Trophy, title: '$500 Prize Pool', desc: 'Real cash prizes + $50 MVP bonus.' },
            { icon: Shield, title: 'Anti-Cheat', desc: 'FACEIT AC required. Fair play enforced.' },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-[#161616] border border-white/[0.05] p-5 group hover:border-white/[0.12] transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
            >
              <div className="w-10 h-10 bg-cs2-orange/10 flex items-center justify-center mb-4"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <f.icon className="w-5 h-5 text-cs2-orange" />
              </div>
              <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
              <p className="text-white/35 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Venue — angular image clipping */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="overflow-hidden border border-white/[0.05]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10 bg-cs2-dark-card relative overflow-hidden">
              {/* Decorative diagonal stripe */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cs2-orange/[0.03] rotate-[25deg]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="skew-accent-sm" />
                  <p className="text-cs2-orange text-xs font-bold tracking-[0.2em] uppercase">Venue</p>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">Etihad Club</h3>
                <p className="text-white/40 mb-6 text-sm leading-relaxed">
                  Rahim Yar Khan&apos;s premier sports venue. Professional tournament setup with high-performance gaming PCs.
                </p>
                <div className="space-y-2.5 text-sm text-white/50">
                  <a
                    href="https://maps.app.goo.gl/cRgQCvtgcjnsuMuG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group/link hover:text-cs2-orange transition-colors duration-200"
                  >
                    <MapPin className="w-4 h-4 text-cs2-orange" />
                    <span className="group-hover/link:underline underline-offset-2">Etihad Club, Rahim Yar Khan</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover/link:opacity-100 transition-opacity -ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-cs2-orange" />Sunday, February 15, 2026</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-cs2-orange" />11:00 AM Sharp</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[220px]">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" alt="Gaming Arena" className="w-full h-full object-cover" />
              {/* Angular gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cs2-dark-card via-transparent to-transparent md:block hidden"
                style={{ clipPath: 'polygon(0 0, 60% 0, 30% 100%, 0 100%)' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
