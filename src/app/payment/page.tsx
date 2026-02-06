'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Check, MessageCircle, Mail, Shield, Clock, CreditCard, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const PAYMENT_ACCOUNTS = [
  {
    label: 'JazzCash',
    icon: Smartphone,
    number: '0300-1246307',
    holder: 'Maaz',
    color: '#E5002B',
  },
  {
    label: 'EasyPaisa',
    icon: CreditCard,
    number: '0300-1246307',
    holder: 'Maaz',
    color: '#4CB050',
  },
]

const STEPS = [
  {
    num: 1,
    title: 'Send PKR 500',
    desc: 'Transfer exactly PKR 500 to any of the accounts listed below. Make sure to include your Registration ID in the payment reference or message.',
    accent: '#EB6B09',
  },
  {
    num: 2,
    title: 'Take a Screenshot',
    desc: 'After completing the transfer, take a clear screenshot of your transaction confirmation showing the amount, date, and transaction ID.',
    accent: '#EB6B09',
  },
  {
    num: 3,
    title: 'Send Proof on WhatsApp',
    desc: 'Send the screenshot along with your Registration ID to our WhatsApp number. Our team will verify your payment.',
    accent: '#EB6B09',
  },
  {
    num: 4,
    title: 'Get Confirmed',
    desc: 'Once verified, you\'ll receive a confirmation message on WhatsApp. Your slot is officially locked in!',
    accent: '#22C55E',
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-white/5 transition-colors group"
      title="Copy"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
      )}
    </button>
  )
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-cs2-dark">


      {/* ── Top bar ── */}
      <div className="h-1 bg-gradient-to-r from-cs2-orange via-[#FF8A3D] to-cs2-orange" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to main page
          </Link>
        </motion.div>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-cs2-orange/[0.08] border border-cs2-orange/20 px-5 py-1.5 mb-5">
            <span className="text-cs2-orange text-[11px] font-extrabold tracking-[5px] uppercase">
              COUNTER-STRIKE 2
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-white mb-2 tracking-wide">
            PAYMENT INSTRUCTIONS
          </h1>
          <p className="text-white/30 text-sm max-w-md mx-auto leading-relaxed">
            Complete your registration for the CS2 Pakistan Major 2026 — Rahim Yar Khan Tryouts by following the steps below.
          </p>
          <div className="mt-5 mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-cs2-orange to-transparent" />
        </motion.div>

        {/* ── Entry Fee Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-cs2-orange/[0.06] via-[#1a1a1a] to-[#141414] border border-cs2-orange/15 mb-8 overflow-hidden"
          style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
        >
          <div className="bg-cs2-orange/[0.06] border-b border-cs2-orange/10 px-6 py-3">
            <span className="text-cs2-orange text-[11px] font-extrabold tracking-[3px] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cs2-orange -skew-x-12" />
              Entry Fee
            </span>
          </div>
          <div className="px-6 py-8 text-center">
            <p className="text-5xl font-black font-display text-white mb-1">
              PKR <span className="text-cs2-orange">500</span>
            </p>
            <p className="text-white/30 text-sm">Per player • One-time fee</p>
          </div>
        </motion.div>

        {/* ── Payment Steps ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="bg-[#1a1a1a] border border-white/[0.04] overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <div className="px-6 py-3 border-b border-white/[0.04]">
              <span className="text-white text-[11px] font-extrabold tracking-[3px] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white -skew-x-12" />
                How to Pay
              </span>
            </div>
            <div className="p-6 space-y-6">
              {STEPS.map((step, i) => (
                <div key={step.num} className="flex gap-4">
                  <div className="shrink-0">
                    <div
                      className="w-9 h-9 flex items-center justify-center text-sm font-black"
                      style={{
                        background: `${step.accent}15`,
                        border: `1px solid ${step.accent}40`,
                        color: step.accent,
                      }}
                    >
                      {step.num}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px h-6 bg-white/[0.06] mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                    <p className="text-white/35 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Payment Accounts ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-[#1a1a1a] border border-white/[0.04] overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <div className="px-6 py-3 border-b border-white/[0.04]">
              <span className="text-cs2-orange text-[11px] font-extrabold tracking-[3px] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cs2-orange -skew-x-12" />
                Payment Accounts
              </span>
            </div>
            <div className="p-4 sm:p-6 space-y-3">
              {PAYMENT_ACCOUNTS.map((acc) => {
                const Icon = acc.icon
                return (
                  <div
                    key={acc.label}
                    className="bg-black/40 border border-white/[0.04] hover:border-white/[0.08] transition-colors overflow-hidden"
                  >
                    {/* Label bar */}
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.03]"
                      style={{ background: `${acc.color}08` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: acc.color }} />
                      <span className="text-white/50 text-xs font-bold uppercase tracking-wider">{acc.label}</span>
                    </div>
                    {/* Account details */}
                    <div className="px-4 py-3 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-white font-mono font-bold text-base tracking-wider block">{acc.number}</span>
                        <span className="text-white/20 text-xs">{acc.holder}</span>
                      </div>
                      <CopyButton text={acc.number} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Important note ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-cs2-orange/[0.04] border border-cs2-orange/15 border-l-[3px] border-l-cs2-orange p-5 mb-8"
        >
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-cs2-orange shrink-0 mt-0.5" />
            <div>
              <h4 className="text-cs2-orange font-bold text-sm mb-1">Important</h4>
              <ul className="text-white/40 text-xs leading-relaxed space-y-1.5">
                <li>• Always include your <span className="text-white font-semibold">Registration ID</span> in the payment reference/message.</li>
                <li>• Complete payment within <span className="text-white font-semibold">48 hours</span> of registration to secure your slot.</li>
                <li>• Your spot is not confirmed until payment is verified by our team.</li>
                <li>• In case of any issues, contact us via WhatsApp before the deadline.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Contact / WhatsApp CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#1a1a1a] border border-white/[0.04] overflow-hidden mb-8"
          style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
        >
          <div className="p-6 text-center">
            <Mail className="w-8 h-8 text-cs2-orange mx-auto mb-3" />
            <h3 className="text-white font-bold text-sm mb-1">Need Help? Email Us</h3>
            <p className="text-white/30 text-xs mb-4 max-w-sm mx-auto leading-relaxed">
              For payment issues or questions, email us with your Registration ID.
            </p>
            <a
              href="mailto:cs2majorryk@gmail.com"
              className="inline-flex items-center gap-2 bg-cs2-orange/10 border border-cs2-orange/20 hover:border-cs2-orange/40 px-6 py-3 transition-colors group mb-4"
            >
              <Mail className="w-4 h-4 text-cs2-orange" />
              <span className="text-cs2-orange font-bold text-sm">cs2majorryk@gmail.com</span>
            </a>
            <div className="border-t border-white/[0.04] pt-4 mt-2">
              <p className="text-white/20 text-xs mb-2">Or send payment proof via WhatsApp:</p>
              <a
                href="https://wa.me/923001246307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500/[0.06] border border-green-500/15 hover:border-green-500/30 px-5 py-2.5 transition-colors group"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400 font-mono font-bold text-xs">+92 300 1246307</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Deadline reminder ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-[#1a1a1a] border border-white/[0.04] p-5 text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-yellow-500/70" />
            <span className="text-yellow-500/70 text-xs font-bold uppercase tracking-wider">Reminder</span>
          </div>
          <p className="text-white/40 text-xs leading-relaxed max-w-md mx-auto">
            Slots are limited to <span className="text-white font-semibold">40 players</span>. Complete your payment early to avoid missing out. Unpaid registrations may be released after the 48-hour window.
          </p>
        </motion.div>

        {/* ── Event info bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#1a1a1a] border border-white/[0.04] p-4 text-center mb-8"
        >
          <p className="text-white/20 uppercase tracking-[3px] text-[10px] mb-1">Event</p>
          <p className="text-white font-bold text-sm">Sunday, February 15, 2026 • 11:00 AM</p>
          <p className="text-white/30 text-xs mt-0.5">Etihad Club, Rahim Yar Khan</p>
        </motion.div>

        {/* ── Footer ── */}
        <div className="text-center">
          <Link href="/#register" className="inline-flex items-center gap-2 text-cs2-orange hover:text-cs2-orange/80 text-sm font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Registration
          </Link>
          <p className="text-white/10 text-xs mt-4">© 2026 CS2 Pakistan Major — Rahim Yar Khan</p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="h-1 bg-gradient-to-r from-cs2-orange via-[#FF8A3D] to-cs2-orange" />
    </main>
  )
}
