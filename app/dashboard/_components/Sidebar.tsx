'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/classnames'
import { UserCircle2, X, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { UrlsType } from '@/utils/types'
import { useLockScroll } from '@/hooks/useLockScroll'

type SidebarProps = {
  urls: UrlsType
}

const Sidebar = ({ urls }: SidebarProps) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  useLockScroll(open)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header className='h-[56px] bg-neutral-900 md:hidden'>
        <button
          onClick={() => handleClick()}
          className='absolute right-4 top-4 z-20 md:hidden'
        >
          {!open ? <Menu color='#FFFFFF' /> : <X color='#FFFFFF' />}
        </button>
      </header>

      <aside
        className={cn(
          'absolute top-0 z-10 flex min-h-screen w-full items-center justify-center bg-neutral-900 px-8 py-20 capitalize text-neutral-100 md:relative md:flex md:min-h-full md:max-w-[14rem]',
          !open && 'hidden',
        )}
      >
        <div className='flex flex-col items-center justify-center gap-y-28 md:fixed md:top-0 md:h-screen md:justify-start md:pt-20'>
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
        </div>
      </aside>
    </>
  )
}

export default Sidebar
