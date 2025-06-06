'use client'

interface NeonGridProps {
  density?: number
  color?: string
  animated?: boolean
  className?: string
}

export default function NeonGrid({ 
  density = 50, 
  color = '#FF006E', 
  animated = true,
  className = '' 
}: NeonGridProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        width="100%" 
        height="100%" 
        className={animated ? 'animate-pulse' : ''}
      >
        <defs>
          <pattern 
            id="neon-grid" 
            width={density} 
            height={density} 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d={`M ${density} 0 L 0 0 0 ${density}`} 
              fill="none" 
              stroke={color} 
              strokeWidth="1"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neon-grid)" />
      </svg>
    </div>
  )
}