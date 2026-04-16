'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const inputClass = "w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-600/50 focus:border-blue-600/30 transition-colors"

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-wide max-w-lg">
          <div className="mb-10">
            <p className="section-label mb-2">Get in touch</p>
            <h1 className="text-4xl font-bold text-slate-100">Contact</h1>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              For collaborations, dataset access requests, or questions about our publications.
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-10 text-center">
              <div className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-100 mb-2">Message sent</h2>
              <p className="text-slate-500 text-sm mb-6">We will reply within two business days.</p>
              <Button onClick={() => setStatus('idle')} variant="outline" size="sm">Send another message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[12px] font-medium text-slate-500 mb-1.5">
                    Name <span className="text-slate-700">*</span>
                  </label>
                  <input id="name" type="text" placeholder="Your name"
                    {...register('name', { required: 'Name is required' })} className={inputClass} />
                  {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[12px] font-medium text-slate-500 mb-1.5">
                    Email <span className="text-slate-700">*</span>
                  </label>
                  <input id="email" type="email" placeholder="you@institution.edu"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                    })} className={inputClass} />
                  {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[12px] font-medium text-slate-500 mb-1.5">
                  Subject <span className="text-slate-700">*</span>
                </label>
                <input id="subject" type="text" placeholder="Collaboration, dataset access, paper inquiry..."
                  {...register('subject', { required: 'Subject is required' })} className={inputClass} />
                {errors.subject && <p className="mt-1 text-[11px] text-red-500">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-[12px] font-medium text-slate-500 mb-1.5">
                  Message <span className="text-slate-700">*</span>
                </label>
                <textarea id="message" rows={6} placeholder="Describe your inquiry..."
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 20, message: 'Minimum 20 characters' },
                  })} className={`${inputClass} resize-none`} />
                {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message.message}</p>}
              </div>

              {status === 'error' && (
                <p className="text-[13px] text-red-500 bg-red-500/5 border border-red-500/10 rounded-xl px-4 py-3">
                  Failed to send. Please try again or email us directly.
                </p>
              )}

              <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full">
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
