import { NextResponse } from 'next/server';

export async function POST(req) {
  const { recaptchaToken, ...data } = await req.json();

  // Verify reCAPTCHA
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `6LdIcyQqAAAAAFR4IqjLhOmkUX4Sj-ZeWcSW_EjP&response=${recaptchaToken}`,
  });

  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return NextResponse.json({ success: false, error: 'reCAPTCHA verification failed' }, { status: 400 });
  }

  // Proceed with handling the form data
  // Example: send an email, save to database, etc.

  return NextResponse.json({ success: true, data });
}
