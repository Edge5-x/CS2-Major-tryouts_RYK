'use client'

import { ReactNode } from 'react'

interface AngularCardProps {
  children: ReactNode
  className?: string
  hoverGlow?: boolean
  cut?: 'sm' | 'md' | 'lg'
  as?: 'div' | 'form'
  onSubmit?: (e: React.FormEvent) => void
}

const cutSizes = {
  sm: 10,
  md: 16,
  lg: 24,
}

export default function AngularCard({
  children,
  className = '',
  hoverGlow = true,
  cut = 'md',
  as: Tag = 'div',
  onSubmit,
}: AngularCardProps) {
  const c = cutSizes[cut]
  const clipPath = `polygon(0 0, calc(100% - ${c}px) 0, 100% ${c}px, 100% 100%, ${c}px 100%, 0 calc(100% - ${c}px))`

  return (
    <Tag
      className={`relative group ${className}`}
      style={{ clipPath }}
      onSubmit={onSubmit}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#161616] border border-white/[0.05] transition-all duration-300" style={{ clipPath }} />
      {/* Hover glow border */}
      {hoverGlow && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath,
            boxShadow: 'inset 0 0 0 1px rgba(235, 107, 9, 0.15)',
          }}
        />
      )}
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Tag>
  )
}
