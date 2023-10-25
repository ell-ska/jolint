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
        !isOpen &&
          'absolute z-[9999] w-full border-b border-neutral-400 bg-neutral-100 p-8',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between',
          isOpen && 'absolute z-[9999] inset-0 justify-center bg-neutral-100',
        )}
      >
        {!isOpen && (
          <Link href='/'>
            <Image className='cursor-pointer' src={Logo} alt='Logo' />
          </Link>
        )}

        <div
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
        </div>
        <button
          onClick={handleClick}
          className='absolute right-8 top-9 z-20 p-1 md:hidden'
        >
          {!isOpen ? <Menu /> : <X />}
        </button>
      </div>
    </header>
  )
}

export default Header
