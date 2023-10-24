'use client'

import Image from 'next/image'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/utils/classnames'
import Button from '@/components/Button'
import Logo from '@/public/Jolint-logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        !isOpen &&
          'absolute w-full border-b border-neutral-400 bg-neutral-100 p-8',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between',
          isOpen && 'absolute inset-0 justify-center bg-neutral-100',
        )}
      >
        {isOpen ? null : (
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
          <Link
            className='hover:underline'
            href='/#how-it-works'
            onClick={closeMenu}
          >
            How it works
          </Link>
          <Link
            className='hover:underline'
            href='/inclusion'
            onClick={closeMenu}
          >
            Inclusion
          </Link>
          <Link className='hover:underline' href='/faq' onClick={closeMenu}>
            FAQ
          </Link>
          <Link className='hover:underline' href='/about' onClick={closeMenu}>
            About us
          </Link>
          <Link href='/consent-form'>
            <Button
              className={cn(isOpen && 'mt-8')}
              variant='secondary'
              onClick={closeMenu}
            >
              Consent form
            </Button>
          </Link>
        </div>
        <button
          onClick={() => handleClick()}
          className='absolute right-8 top-9 z-20 p-1 md:hidden'
        >
          {!isOpen ? <Menu /> : <X />}
        </button>
      </div>
    </header>
  )
}

export default Header
