import { UrlsType } from '@/utils/types'
import { Gauge, Settings } from 'lucide-react'

import SideBar from './_components/SideBar'

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
    <main className='flex min-h-screen'>
      <SideBar urls={urls} />
      {children}
    </main>
  )
}

export default Layout
