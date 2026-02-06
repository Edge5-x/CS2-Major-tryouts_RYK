'use client'

interface DiagonalDividerProps {
  direction?: 'left' | 'right'
  fillTop?: string
  fillBottom?: string
  height?: number
  accent?: 'orange' | 'white'
  className?: string
}

export default function DiagonalDivider({
  direction = 'right',
  fillTop = '#0C0C0C',
  fillBottom = '#141414',
  height = 90,
  accent = 'orange',
  className = '',
}: DiagonalDividerProps) {
  const points =
    direction === 'right'
      ? '0,0 100,0 100,100 0,40'
      : '0,0 100,0 100,40 0,100'

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height, marginTop: -1, marginBottom: -1 }}>
      {/* Top fill */}
      <div className="absolute inset-0" style={{ backgroundColor: fillTop }} />
      {/* Bottom polygon */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points={direction === 'right' ? '0,40 100,100 0,100' : '100,40 100,100 0,100'}
          fill={fillBottom}
        />
      </svg>
      {/* Accent line along the diagonal */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1={direction === 'right' ? '0' : '100'}
          y1="40"
          x2={direction === 'right' ? '100' : '0'}
          y2="100"
          stroke={accent === 'white' ? '#ffffff' : '#EB6B09'}
          strokeWidth="0.4"
          strokeOpacity={accent === 'white' ? '0.15' : '0.6'}
        />
      </svg>
    </div>
  )
}
