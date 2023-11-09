import { UrlsType } from '@/utils/types'
import { Gauge, Settings } from 'lucide-react'
import type { Metadata } from 'next'

import Sidebar from './_components/Sidebar'

export const metadata: Metadata = {
  title: 'Jolint | Dashboard',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const urls: UrlsType = [
    {
      name: 'dashboard',
      href: '/dashboard',
      icon: <Gauge />,
    },
    {
      name: 'settings',
      href: '/dashboard/settings',
      icon: <Settings />,
    },
  ]

  return (
    <main className='flex min-h-screen flex-col md:flex-row'>
      <Sidebar urls={urls} />
      {children}
    </main>
  )
}

export default Layout
