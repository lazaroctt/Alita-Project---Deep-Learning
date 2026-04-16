import { ReactNode } from 'react'

type BadgeVariant = 'default' | 'accent' | 'muted'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
  onClick?: () => void
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/[0.05] text-slate-400 border border-white/[0.07]',
  accent:  'bg-blue-600/10 text-blue-400 border border-blue-600/20',
  muted:   'bg-white/[0.03] text-slate-600 border border-white/[0.04]',
}

export default function Badge({ children, variant = 'default', className = '', onClick }: BadgeProps) {
  const base = 'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium tracking-wide'
  const interactive = onClick ? 'cursor-pointer hover:opacity-75 transition-opacity' : ''

  return (
    <span className={`${base} ${variantStyles[variant]} ${interactive} ${className}`} onClick={onClick}>
      {children}
    </span>
  )
}
