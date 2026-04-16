import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(req: NextRequest) {
  const body: ContactPayload = await req.json()
  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 })
  }

  // In production, use Resend:
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({ from: '...', to: '...', subject, html: ... })

  console.log('[Contact Form]', { name, email, subject, message })

  return NextResponse.json({ ok: true }, { status: 200 })
}
