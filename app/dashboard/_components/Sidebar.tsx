'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/utils/classnames'
import { UserCircle2, X, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { UrlsType } from '@/utils/types'

type SidebarProps = {
  urls: UrlsType
}

const Sidebar = ({ urls }: SidebarProps) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <button
        onClick={() => handleClick()}
        className='absolute right-8 top-8 z-20 rounded-full bg-neutral-900 p-4 md:hidden'
      >
        {!open ? <Menu color='#FFFFFF' /> : <X color='#FFFFFF' />}
      </button>
      <aside
        className={cn(
          'absolute top-0 z-10 flex min-h-screen w-full flex-col justify-center items-center gap-y-28 bg-neutral-900 px-8 py-20 capitalize text-neutral-100 md:relative md:left-0 md:flex md:max-w-[14rem]',
          !open && 'hidden',
        )}
      >
        <div className='flex flex-col items-center gap-y-4'>
          <UserCircle2 size={64} />
          <h3 className='text-center font-bold'>Welcome, Anna</h3>
          <h4>Team HR</h4>
        </div>
        <nav className='flex flex-col justify-center gap-6 text-neutral-600'>
          {urls.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-2',
                pathname === item.href && 'font-bold text-neutral-100',
              )}
            >
              {item.icon}
              <p>{item.name}</p>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
