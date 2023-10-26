import Accordion from '@/components/Accordion'
import GeneralGridLayout from '../dashboard/_components/GeneralGridLayout'
import Sidebar from '@/app/dashboard/_components/Sidebar'
import { Gauge, Settings } from 'lucide-react'
import { UrlsType } from '@/utils/types'

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

const Playground = () => {
  return (
    <main className='flex min-h-screen flex-col md:flex-row'>
      <Sidebar urls={urls} />

      <div>
        <GeneralGridLayout>
          <div className='col-span-2 bg-neutral-400'>hi</div>
        </GeneralGridLayout>
        <div className='h-screen'></div>
      </div>
    </main>
  )
}

export default Playground
