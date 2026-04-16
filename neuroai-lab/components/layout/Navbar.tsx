'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about',        label: 'About' },
  { href: '/projects',     label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/blog',         label: 'Notes' },
  { href: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080e]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-px text-[15px] font-semibold tracking-tight text-slate-100">
            <span className="text-blue-400">Alita</span>
            &nbsp;Project
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[13px] font-medium transition-colors duration-150 ${
                    pathname === href
                      ? 'text-slate-100'
                      : 'text-slate-500 hover:text-slate-200'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

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
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-250 ${menuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-0.5 pt-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    pathname === href
                      ? 'text-slate-100 bg-white/[0.05]'
                      : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.03]'
                  }`}
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
