import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Single accent — deep academic blue, used sparingly
        accent: {
          DEFAULT: '#2563eb',
          dim:     '#1e3a8a',
          muted:   '#1d3461',
          subtle:  'rgba(37,99,235,0.08)',
        },
        // All surfaces derived from near-black with a cool tint
        canvas:  '#06080e',
        surface: '#0b0f19',
        overlay: '#10172a',
        line:    'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in':  'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%':   { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body':    '#94a3b8',
            '--tw-prose-headings':'#f1f5f9',
            '--tw-prose-links':   '#60a5fa',
            '--tw-prose-code':    '#93c5fd',
            '--tw-prose-pre-bg':  '#0b0f19',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
