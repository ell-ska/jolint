import type { Metadata } from 'next'
import { Space_Grotesk, Kumbh_Sans } from 'next/font/google'

import { cn } from '@/utils/classnames'
import './globals.css'

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], variable: '--kumbh-sans' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--space-grotesk',
})

export const metadata: Metadata = {
  title: 'Jolint',
  description: 'Creating inclusive work cultures',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={cn(
          spaceGrotesk.variable,
          kumbhSans.variable,
          'flex flex-col font-body text-neutral-900',
        )}
      >
        {children}
      </body>
    </html>
  )
}
