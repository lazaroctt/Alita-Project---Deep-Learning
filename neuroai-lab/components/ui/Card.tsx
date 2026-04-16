import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  as?: 'div' | 'article' | 'li'
}

export default function Card({ children, className = '', hover = true, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 ${
        hover ? 'transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.05]' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
