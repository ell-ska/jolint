'use client'

import Image from 'next/image'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/classnames'
import Button from '@/components/Button'
import Logo from '@/public/Jolint-logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        'absolute z-50 flex bg-neutral-100',
        !isOpen &&
          'h-20 w-full items-center justify-between border-b border-neutral-400 px-6 md:h-28 md:px-8',
        isOpen && 'inset-0 justify-center',
      )}
    >
      {!isOpen && (
        <Link href='/'>
          <Image className='cursor-pointer' src={Logo} alt='Logo' />
        </Link>
      )}
      <nav
        className={cn(
          'hidden items-center gap-8 md:flex',
          isOpen && 'flex flex-col justify-center',
        )}
      >
        <Link className='hover:underline' href='/#how-it-works'>
          How it works
        </Link>
        <Link className='hover:underline' href='/inclusion'>
          Inclusion
        </Link>
        <Link className='hover:underline' href='/faq'>
          FAQ
        </Link>
        <Link className='hover:underline' href='/about'>
          About us
        </Link>
        <Link href='/consent-form'>
          <Button className={cn(isOpen && 'mt-8')} variant='secondary'>
            Consent form
          </Button>
        </Link>
      </nav>
      <button
        onClick={handleClick}
        className='absolute right-8 top-7 z-20 md:hidden'
      >
        {!isOpen ? <Menu /> : <X />}
      </button>
    </header>
  )
}

export default Header