'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ticket, Loader2, Check, AlertCircle, ChevronDown, Gamepad2, Shield, Star } from 'lucide-react'
import { useSlots } from '@/hooks/useSlots'

/* ── CS2 Premier Rating tiers with actual colors ─── */
const PREMIER_TIERS = [
  { label: '0 – 4,999', tier: 'Gray', color: '#8B8B8B', bg: 'rgba(139,139,139,0.12)', border: 'rgba(139,139,139,0.25)' },
  { label: '5,000 – 9,999', tier: 'Light Blue', color: '#5EB7F7', bg: 'rgba(94,183,247,0.12)', border: 'rgba(94,183,247,0.25)' },
  { label: '10,000 – 14,999', tier: 'Blue', color: '#4169E1', bg: 'rgba(65,105,225,0.12)', border: 'rgba(65,105,225,0.25)' },
  { label: '15,000 – 19,999', tier: 'Purple', color: '#9B59B6', bg: 'rgba(155,89,182,0.12)', border: 'rgba(155,89,182,0.25)' },
  { label: '20,000 – 24,999', tier: 'Pink', color: '#FF69B4', bg: 'rgba(255,105,180,0.12)', border: 'rgba(255,105,180,0.25)' },
  { label: '25,000 – 29,999', tier: 'Red', color: '#E74C3C', bg: 'rgba(231,76,60,0.12)', border: 'rgba(231,76,60,0.25)' },
  { label: '30,000+', tier: 'Gold', color: '#F1C40F', bg: 'rgba(241,196,15,0.12)', border: 'rgba(241,196,15,0.25)' },
]

const EXPERIENCE_OPTIONS = [
  { label: 'First tournament', value: '0', color: '#22d3ee' },
  { label: '1 – 3 tournaments', value: '1-3', color: '#34d399' },
  { label: '4 – 10 tournaments', value: '4-10', color: '#f59e0b' },
  { label: '10+ tournaments', value: '10+', color: '#ef4444' },
]

/* ── Custom Dropdown Component ───────────────────── */
function CustomDropdown({ label, value, options, onChange, renderOption, renderSelected, required }: {
  label: string
  value: string
  options: { label: string; value: string }[]
  onChange: (val: string) => void
  renderOption?: (opt: { label: string; value: string }, isSelected: boolean) => React.ReactNode
  renderSelected?: (opt: { label: string; value: string } | undefined) => React.ReactNode
  required?: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selected = options.find(o => o.value === value)

  return (
    <div ref={ref} className="relative">
      {/* Hidden native select for form validation */}
      {required && (
        <select
          required
          value={value}
          onChange={() => {}}
          className="absolute inset-0 opacity-0 pointer-events-none"
          tabIndex={-1}
        >
          <option value="">{label}</option>
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all border clip-angular-sm ${
          value
            ? 'bg-cs2-dark border-white/[0.1] text-white'
            : 'bg-cs2-dark border-white/[0.06] text-white/20'
        } hover:border-white/15`}
      >
        <span className="flex items-center gap-2 truncate">
          {value && renderSelected ? renderSelected(selected) : (selected?.label || label)}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
          <ChevronDown className="w-4 h-4 text-white/30 shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.8 }}
            className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#1A1A1A] border border-white/[0.08] shadow-2xl shadow-black/60 overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
          >
            <div className="max-h-[280px] overflow-y-auto scrollbar-thin">
              {options.map((opt) => {
                const isSelected = opt.value === value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => { onChange(opt.value); setOpen(false) }}
                    className={`w-full text-left px-4 py-3 text-sm transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-white/[0.06] text-white'
                        : 'text-white/50 hover:bg-white/[0.03] hover:text-white/80'
                    }`}
                  >
                    {renderOption ? renderOption(opt, isSelected) : (
                      <>
                        <span className="flex-1">{opt.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-cs2-orange" />}
                      </>
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── CNIC & Phone formatting helpers ──────────────── */
const CNIC_REGEX = /^\d{5}-\d{7}-\d{1}$/
const PHONE_REGEX = /^03\d{2}-\d{7}$/

function formatCNIC(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 13)
  if (digits.length <= 5) return digits
  if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`
  return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 4) return digits
  return `${digits.slice(0, 4)}-${digits.slice(4)}`
}

/* ── Main Registration Form ──────────────────────── */
export default function RegistrationForm() {
  const { total, registered, increment } = useSlots()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', cnic: '', steamId: '',
    premierRating: '', age: '', city: '', experience: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [regId, setRegId] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{ cnic?: string; phone?: string }>({})

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    // ── Client-side validation ──
    const errors: { cnic?: string; phone?: string } = {}
    if (!CNIC_REGEX.test(form.cnic)) {
      errors.cnic = 'Enter a valid CNIC (e.g. 36302-1234567-1)'
    }
    if (!PHONE_REGEX.test(form.phone)) {
      errors.phone = 'Enter a valid phone (e.g. 0300-1234567)'
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})

    setSubmitting(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      setRegId(data.regId)
      setStatus('success')
      increment()
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const selectedTier = PREMIER_TIERS.find(t => t.label === form.premierRating)

  const inp = "w-full bg-cs2-dark border border-white/[0.06] px-4 py-3 text-white text-sm placeholder-white/20 transition-all hover:border-white/[0.12] focus:border-cs2-orange clip-angular-sm"

  return (
    <section id="register" className="relative py-24 sm:py-32 bg-cs2-dark-lighter overflow-hidden">
      <div className="absolute inset-0 diagonal-stripe-bg opacity-30" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/40 transform -skew-x-[25deg]" />
            <p className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase">Register</p>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/40 transform skew-x-[25deg]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white mb-3">
            Secure Your <span className="text-cs2-orange">Spot</span>
          </h2>

          {/* Slots progress bar */}
          <div className="max-w-xs mx-auto mt-4">
            <div className="flex justify-between text-[11px] mb-1.5">
              <span className="text-white/30">Registered</span>
              <span className="text-white/50 font-mono font-bold">{registered}/{total}</span>
            </div>
            <div className="h-2 bg-white/[0.04] relative overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(registered / total) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cs2-orange to-cs2-orange/70"
              />
            </div>
            <p className="text-cs2-orange text-xs font-bold mt-1.5">{total - registered} spots remaining</p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-[#161616] border border-white/[0.05] relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cs2-orange/[0.05] via-transparent to-cs2-orange/[0.02]" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />

              <div className="relative z-10 p-6 sm:p-8">
                {/* ── Success header ─── */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-green-500/10 flex items-center justify-center mb-4"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                  >
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-1">You&apos;re In!</h3>
                  <p className="text-white/40 text-sm">Registration received — complete payment to secure your spot.</p>
                </div>

                {/* ── Reg ID badge ─── */}
                <div className="bg-cs2-dark p-3 text-center mb-6 clip-angular-sm">
                  <p className="text-[10px] text-white/30 mb-0.5">Registration ID</p>
                  <p className="text-lg font-mono font-bold text-cs2-orange">{regId}</p>
                </div>

                {/* ── Payment details ─── */}
                <div className="bg-cs2-dark/70 border border-cs2-orange/15 border-l-[3px] border-l-cs2-orange p-5 mb-5">
                  <h4 className="text-cs2-orange font-bold text-sm font-display uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="skew-accent-sm" />
                    Payment Required — PKR 500
                  </h4>
                  <p className="text-white/40 text-xs mb-4 leading-relaxed">
                    Send <span className="text-white font-semibold">PKR 500</span> to one of the accounts below within <span className="text-white font-semibold">48 hours</span> to confirm your spot.
                  </p>

                  <div className="space-y-2">
                    {[
                      { label: 'JazzCash', number: '0300-1246307', holder: 'Muhammad Maaz' },
                      { label: 'EasyPaisa', number: '0300-1246307', holder: 'Muhammad Maaz' },
                      { label: 'Bank Transfer (HBL)', number: '12345678901234', holder: 'Muhammad Maaz' },
                    ].map((acc) => (
                      <div key={acc.label} className="bg-black/30 border border-white/[0.03] px-4 py-2.5 flex items-center justify-between gap-3">
                        <div>
                          <span className="text-white/30 text-[10px] uppercase tracking-wider block">{acc.label}</span>
                          <span className="text-white font-mono font-semibold text-sm">{acc.number}</span>
                        </div>
                        <span className="text-white/20 text-xs shrink-0">{acc.holder}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-cs2-orange/[0.06] border border-cs2-orange/10 text-xs text-white/50 leading-relaxed">
                    <span className="text-cs2-orange font-bold">Important:</span> Include your Registration ID{' '}
                    <span className="text-white font-mono font-semibold">{regId}</span> in the payment reference/message.
                  </div>
                </div>

                {/* ── After payment ─── */}
                <div className="bg-[#1A1A1A] border border-white/[0.04] p-4 mb-5 text-xs text-white/40 leading-relaxed">
                  <span className="text-white/60 font-semibold">After payment:</span> Send a screenshot of your transaction to WhatsApp{' '}
                  <span className="text-white font-semibold">+92 300 1246307</span> along with your Registration ID.
                </div>

                {/* ── Event details ─── */}
                <div className="bg-[#1A1A1A] border border-white/[0.04] p-4 text-center text-xs mb-5">
                  <p className="text-white/25 uppercase tracking-[3px] text-[10px] mb-1.5">Event Details</p>
                  <p className="text-white font-semibold">Sunday, February 15, 2026 • 11:00 AM</p>
                  <p className="text-white/40 mt-0.5">Etihad Club, Rahim Yar Khan</p>
                </div>

                <div className="text-center">
                  <button onClick={() => setStatus('idle')} className="text-cs2-orange text-sm hover:underline">Register another player</button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={submit}
              className="bg-[#161616] border border-white/[0.05] relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              {/* Top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/20 via-cs2-orange/50 to-white/20" />
              {/* Corner triangle */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/[0.02]"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              />

              <div className="p-6 sm:p-8 relative z-10">
                {/* ── 1. Personal Info ───────────── */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="skew-accent-sm" />
                    Personal Info
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input type="text" required placeholder="Full Name" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} className={inp} />
                    <input type="number" required min={16} max={50} placeholder="Age"
                      value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} className={inp} />
                    <div>
                      <input type="text" required placeholder="CNIC (36302-1234567-1)" inputMode="numeric"
                        value={form.cnic} onChange={e => { setForm({ ...form, cnic: formatCNIC(e.target.value) }); setFieldErrors(prev => ({ ...prev, cnic: undefined })) }}
                        className={`${inp} ${fieldErrors.cnic ? 'border-red-500/60 focus:border-red-500' : ''}`}
                        maxLength={15} />
                      {fieldErrors.cnic && <p className="text-red-400 text-[11px] mt-1 ml-1">{fieldErrors.cnic}</p>}
                    </div>
                    <input type="text" required placeholder="City"
                      value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className={inp} />
                  </div>
                </div>

                {/* ── 2. Contact ─────────────────── */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="skew-accent-sm" />
                    Contact
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input type="email" required placeholder="Email"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inp} />
                    <div>
                      <input type="tel" required placeholder="Phone (0300-1234567)" inputMode="numeric"
                        value={form.phone} onChange={e => { setForm({ ...form, phone: formatPhone(e.target.value) }); setFieldErrors(prev => ({ ...prev, phone: undefined })) }}
                        className={`${inp} ${fieldErrors.phone ? 'border-red-500/60 focus:border-red-500' : ''}`}
                        maxLength={12} />
                      {fieldErrors.phone && <p className="text-red-400 text-[11px] mt-1 ml-1">{fieldErrors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* ── 3. Gaming ──────────────────── */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="skew-accent-sm" />
                    Gaming Profile
                  </h3>
                  <div className="space-y-3">
                    <input type="url" required placeholder="Steam Profile URL (steamcommunity.com/id/...)"
                      value={form.steamId} onChange={e => setForm({ ...form, steamId: e.target.value })} className={inp} />

                    {/* Premier Rating — Custom Dropdown with tier colors */}
                    <CustomDropdown
                      label="Select Premier Rating"
                      required
                      value={form.premierRating}
                      options={PREMIER_TIERS.map(t => ({ label: t.label, value: t.label }))}
                      onChange={val => setForm({ ...form, premierRating: val })}
                      renderSelected={(opt) => {
                        if (!opt) return <span className="text-white/20">Select Premier Rating</span>
                        const tier = PREMIER_TIERS.find(t => t.label === opt.value)
                        if (!tier) return opt.label
                        return (
                          <span className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: tier.color, boxShadow: `0 0 8px ${tier.color}40` }} />
                            <span className="font-mono font-medium">{tier.label}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm" style={{ color: tier.color, backgroundColor: tier.bg }}>
                              {tier.tier}
                            </span>
                          </span>
                        )
                      }}
                      renderOption={(opt, isSelected) => {
                        const tier = PREMIER_TIERS.find(t => t.label === opt.value)!
                        return (
                          <span className="flex items-center gap-3 w-full">
                            {/* Color indicator bar */}
                            <span className="w-1 h-8 rounded-full shrink-0" style={{ backgroundColor: tier.color }} />
                            {/* Rating diamond icon */}
                            <span className="w-5 h-5 flex items-center justify-center shrink-0"
                              style={{ transform: 'rotate(45deg)' }}
                            >
                              <span className="w-full h-full border-2 rounded-[2px]"
                                style={{ borderColor: tier.color, backgroundColor: `${tier.color}20` }}
                              />
                            </span>
                            <span className="flex-1">
                              <span className="block text-sm font-mono" style={{ color: isSelected ? tier.color : undefined }}>{tier.label}</span>
                              <span className="block text-[10px] uppercase tracking-wider font-bold" style={{ color: tier.color }}>{tier.tier}</span>
                            </span>
                            {isSelected && <Check className="w-4 h-4 shrink-0" style={{ color: tier.color }} />}
                          </span>
                        )
                      }}
                    />

                    {/* Selected tier preview card */}
                    <AnimatePresence>
                      {selectedTier && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-center gap-3 p-3 border rounded-sm"
                            style={{ backgroundColor: selectedTier.bg, borderColor: selectedTier.border }}
                          >
                            <Shield className="w-5 h-5" style={{ color: selectedTier.color }} />
                            <div className="flex-1">
                              <span className="text-xs font-bold" style={{ color: selectedTier.color }}>
                                {selectedTier.tier} Tier
                              </span>
                              <span className="text-[10px] text-white/30 block">Premier Rating {selectedTier.label}</span>
                            </div>
                            <div className="text-right">
                              <Star className="w-4 h-4 inline" style={{ color: selectedTier.color }} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Experience — Custom Dropdown */}
                    <CustomDropdown
                      label="Tournament Experience"
                      value={form.experience}
                      options={EXPERIENCE_OPTIONS.map(e => ({ label: e.label, value: e.value }))}
                      onChange={val => setForm({ ...form, experience: val })}
                      renderSelected={(opt) => {
                        if (!opt) return <span className="text-white/20">Tournament Experience</span>
                        const exp = EXPERIENCE_OPTIONS.find(e => e.value === opt.value)
                        return (
                          <span className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: exp?.color }} />
                            <span>{opt.label}</span>
                          </span>
                        )
                      }}
                      renderOption={(opt, isSelected) => {
                        const exp = EXPERIENCE_OPTIONS.find(e => e.value === opt.value)
                        return (
                          <span className="flex items-center gap-3 w-full">
                            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: exp?.color, boxShadow: isSelected ? `0 0 8px ${exp?.color}40` : 'none' }} />
                            <span className="flex-1" style={{ color: isSelected ? exp?.color : undefined }}>{opt.label}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-cs2-orange" />}
                          </span>
                        )
                      }}
                    />
                  </div>
                </div>

                {/* Fee notice */}
                <div className="mb-6">
                  <div className="bg-cs2-orange/[0.04] border border-cs2-orange/10 p-4 flex gap-3 relative overflow-hidden"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cs2-orange" />
                    <AlertCircle className="w-5 h-5 text-cs2-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-bold text-sm">PKR 500 Entry Fee</span>
                      <p className="text-white/30 text-xs mt-0.5">Payment details will be shown after registration.</p>
                    </div>
                  </div>
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {status === 'error' && errorMsg && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      className="mb-4 overflow-hidden"
                    >
                      <div className="bg-red-500/[0.06] border border-red-500/20 p-4 flex gap-3 relative overflow-hidden"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-500" />
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-red-400 font-bold text-sm">Registration Failed</span>
                          <p className="text-white/30 text-xs mt-0.5">{errorMsg}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button type="submit" disabled={submitting}
                  className="w-full btn-primary bg-cs2-orange text-white py-4 font-bold text-sm disabled:opacity-50 flex items-center justify-center gap-2 shimmer-diagonal relative"
                >
                  {submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />Processing...</>
                  ) : (
                    <><Ticket className="w-5 h-5" />Register Now — PKR 500</>
                  )}
                </button>

                <p className="text-center text-white/15 text-xs mt-4">
                  By registering you agree to the <a href="#rules" className="text-white/25 hover:text-cs2-orange transition-colors underline">tournament rules</a>.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
