import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Logo from '@/public/Jolint-logo.svg'

const Header = () => {
  return (
    <header className='absolute z-50 flex h-20 w-full items-center justify-between border-b border-neutral-400 bg-neutral-100 px-6 md:h-28 md:px-8'>
      <Link href='/'>
        <Image className='cursor-pointer' src={Logo} alt='Logo' />
      </Link>
      <nav className='flex items-center gap-8'>
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
          <Button variant='secondary'>Consent form</Button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
