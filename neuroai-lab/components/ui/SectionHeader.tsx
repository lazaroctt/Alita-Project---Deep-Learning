interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ label, title, description, centered = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <p className="mb-3 section-label">{label}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-slate-500 leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  )
}
