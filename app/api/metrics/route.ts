import { NextResponse } from 'next/server'

const baseUrl = 'https://specialdelivery.vercel.app/data'

const GET = async () => {
  try {
    const response = await fetch(baseUrl + '?apiKey=' + process.env.API_KEY)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.log('[METRICS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export { GET }
