import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await request.json()
  const email: string = body?.email?.trim()
  console.log('Newsletter API hit, email:', email, 'apiKey exists:', !!process.env.RESEND_API_KEY, 'audienceId:', process.env.RESEND_AUDIENCE_ID)

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Unesi ispravnu email adresu.' }, { status: 400 })
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID
  if (!audienceId) {
    return NextResponse.json({ error: 'Server nije konfigurisan.' }, { status: 500 })
  }

  const { data, error } = await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  })

  if (error) {
    console.error('Resend error:', JSON.stringify(error))
    if ('statusCode' in error && (error as { statusCode: number }).statusCode === 409) {
      return NextResponse.json({ error: 'Ova email adresa je već prijavljena.' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Greška pri prijavi. Pokušaj ponovo.', detail: JSON.stringify(error) }, { status: 500 })
  }

  return NextResponse.json({ success: true, id: data?.id })
}
