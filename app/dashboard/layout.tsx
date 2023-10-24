import { UrlsType } from '@/utils/types'
import { Gauge, Settings } from 'lucide-react'

import Sidebar from './_components/Sidebar'

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
    <main className='flex flex-col md:flex-row min-h-screen'>
      <Sidebar urls={urls} />
      {children}
    </main>
  )
}

export default Layout
