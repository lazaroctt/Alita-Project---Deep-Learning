'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/providers/ThemeProvider'

const navLinks = [
  { href: '/',              label: 'Home' },
  { href: '/about',         label: 'About' },
  { href: '/projects',      label: 'Research' },
  { href: '/publications',  label: 'Publications' },
  { href: '/deep-learning', label: 'Deep Learning' },
  { href: '/blog',          label: 'Notes' },
  { href: '/contact',       label: 'Contact' },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b' : 'bg-transparent'
      }`}
      style={scrolled ? {
        backgroundColor: 'var(--nav-bg)',
        borderColor: 'var(--border)',
      } : undefined}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-px text-[15px] font-semibold tracking-tight text-slate-100">
            <span className="text-blue-400">Alita</span>
            &nbsp;Project
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[13px] font-medium transition-colors duration-150 ${
                    isActive(href)
                      ? 'text-slate-100'
                      : 'text-slate-500 hover:text-slate-200'
                  } ${label === 'Deep Learning' ? 'text-blue-400 hover:text-blue-300' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggle}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block h-px w-5 bg-slate-400 transition-transform duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-px w-5 bg-slate-400 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-5 bg-slate-400 transition-transform duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-250 ${menuOpen ? 'max-h-80 pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-0.5 pt-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    isActive(href)
                      ? 'text-slate-100 bg-white/[0.05]'
                      : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.03]'
                  } ${label === 'Deep Learning' ? '!text-blue-400' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
