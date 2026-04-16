import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alita-project.vercel.app'),
  title: {
    default: 'Alita Project — Deep Learning for Neuroscience',
    template: '%s | Alita Project',
  },
  description:
    'Research in Artificial Intelligence applied to Computational Neuroscience. Autoencoders, GNN, Transformers for fMRI, EEG and connectomes.',
  keywords: [
    'neuroai', 'deep learning', 'neurociência', 'fMRI', 'EEG', 'BCI',
    'autoencoder', 'GNN', 'transformer', 'conectoma',
  ],
  authors: [{ name: 'Lazaro C. T.' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://neuroai-lab.vercel.app',
    siteName: 'Alita Project',
    title: 'Alita Project — Deep Learning for Neuroscience',
    description:
      'Research in AI applied to neuroimaging, EEG and connectomes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeuroAI Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alita Project — Deep Learning for Neuroscience',
    description: 'Research in AI applied to neuroimaging, EEG and connectomes.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
