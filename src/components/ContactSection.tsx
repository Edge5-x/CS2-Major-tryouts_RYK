'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-[#161616] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-diagonal opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cs2-orange/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">Get in Touch</span>
            <span className="w-6 h-[2px] bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
            Contact <span className="text-cs2-orange">Us</span>
          </h2>
          <p className="text-white/30 text-sm max-w-lg mx-auto leading-relaxed">
            Have questions about the tournament, registration, or payment? Drop us an email and we&apos;ll get back to you.
          </p>
        </motion.div>

        {/* ── Email — primary CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6"
        >
          <a
            href="mailto:cs2majorryk@gmail.com"
            className="block bg-cs2-orange/[0.04] border border-cs2-orange/15 hover:border-cs2-orange/30 transition-colors overflow-hidden group"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <div className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-cs2-orange/10 flex items-center justify-center shrink-0"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <Mail className="w-5 h-5 text-cs2-orange" />
              </div>
              <div className="flex-1">
                <span className="text-cs2-orange text-[10px] uppercase tracking-[2px] font-extrabold block mb-1">Preferred Contact</span>
                <span className="text-white font-bold text-base group-hover:text-cs2-orange transition-colors">cs2majorryk@gmail.com</span>
                <span className="text-white/25 text-xs block mt-0.5">Best for registration queries, payment issues &amp; general questions</span>
              </div>
              <ArrowRight className="w-5 h-5 text-cs2-orange/40 group-hover:text-cs2-orange group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          </a>
        </motion.div>

        {/* ── WhatsApp — secondary ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <a
            href="https://wa.me/923001246307"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1a1a1a] border border-white/[0.04] hover:border-green-500/15 transition-colors overflow-hidden group"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
          >
            <div className="flex items-center gap-4 p-5">
              <div className="w-11 h-11 bg-green-500/[0.08] flex items-center justify-center shrink-0"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <span className="text-white/25 text-[10px] uppercase tracking-[2px] font-bold block mb-0.5">WhatsApp — Junaid</span>
                <span className="text-white/60 font-semibold text-sm group-hover:text-green-400 transition-colors">+92 300 1246307</span>
                <span className="text-white/20 text-xs block mt-0.5">For urgent matters or payment proof</span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-green-400/50 group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          </a>
        </motion.div>

        {/* ── Response time note ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center"
        >
          <p className="text-white/15 text-xs">
            We typically respond to emails within a few hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
