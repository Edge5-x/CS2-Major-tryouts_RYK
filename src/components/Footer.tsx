'use client'

import { Crosshair, Gamepad2, Instagram, Twitter, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cs2-dark border-t border-white/[0.03] relative overflow-hidden">
      {/* CTA Banner — clean, no clip-path shape */}
      <div className="relative py-16 sm:py-24 border-b border-white/[0.03] overflow-hidden">
        {/* Subtle radial glow behind the CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cs2-orange/[0.04] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-diagonal opacity-10" />

        <div className="relative z-10 text-center max-w-xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-green-400 rotate-45" />
            <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">Registration Open</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-black font-display text-white mb-4">
            Ready to <span className="text-cs2-orange glow-orange">Compete?</span>
          </h3>
          <p className="text-white/35 text-sm mb-8 leading-relaxed">
            Pakistan&apos;s biggest CS2 LAN tournament. $5,000 prize pool. 40 players. One champion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#register"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-cs2-orange text-white px-10 py-4 font-bold text-sm"
            >
              <Gamepad2 className="w-4 h-4" /> Register Now — PKR 500
            </a>
            <a href="#about"
              className="btn-secondary inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 text-white/50 hover:text-white px-8 py-4 font-medium text-sm transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-cs2-orange/10 flex items-center justify-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <Crosshair className="w-5 h-5 text-cs2-orange" />
              </div>
              <span className="font-display font-bold text-base">CS2 Pakistan Major</span>
            </div>
            <p className="text-white/30 text-sm max-w-xs mb-4">The premier CS2 tournament in Rahim Yar Khan. $5,000 prize pool.</p>
            <div className="flex gap-2">
              {[Instagram, Twitter, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-cs2-orange hover:bg-cs2-orange/10 transition-colors"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="diamond-bullet" />
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Schedule', 'Prizes', 'Rules', 'Contact', 'Register'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-white/30 hover:text-cs2-orange transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="diamond-bullet" />
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/30">
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-cs2-orange" />cs2majorryk@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-cs2-orange" />+92 300 1246307</li>
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-cs2-orange" />Rahim Yar Khan</li>
            </ul>
          </div>
        </div>

        {/* Bottom — diagonal separator */}
        <div className="relative mt-8 pt-6">
          <div className="absolute top-0 left-0 right-0 h-px">
            <svg className="w-full h-[1px]" preserveAspectRatio="none" viewBox="0 0 1200 1">
              <line x1="0" y1="0" x2="1200" y2="1" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row justify-between text-[11px] text-white/15">
            <span>© 2026 CS2 Pakistan Major</span>
            <span>Made for the PK CS2 community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
