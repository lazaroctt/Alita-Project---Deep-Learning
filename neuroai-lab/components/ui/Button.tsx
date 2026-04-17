'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  external?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-500',
  outline: 'border border-white/[0.12] text-slate-300 hover:border-white/20 hover:text-white',
  ghost:   'text-slate-400 hover:text-white hover:bg-white/[0.05]',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
}

export default function Button({
  children, variant = 'primary', href, onClick,
  type = 'button', disabled = false, className = '',
  external = false, size = 'md',
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-40 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={base} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
