import Image from 'next/image'
import Link from 'next/link'
import { Globe, ChevronDown } from 'lucide-react'

import Button from '@/components/Button'
import Logo from '@/public/Jolint-logo.svg'

const Header = () => {
  return (
    <header className='border-b border-neutral-400 p-8'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <Image className='cursor-pointer' src={Logo} alt='Logo' />
        </Link>
        <div className='flex items-center gap-8'>
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
          <Link className='hover:underline' href='#'>
            Contact us
          </Link>
          <p className='flex cursor-pointer items-center gap-2 hover:underline'>
            <Globe className='h-4 w-4' /> English
            <ChevronDown className='cursor-pointer' />
          </p>
          <Button variant='secondary'>Sign in</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
