import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/Jolint-logo.svg'

const Header = () => {
  return (
    <header className='absolute flex w-full border-b border-neutral-400 bg-neutral-100 p-6 md:p-8'>
      <Link href='/'>
        <Image src={Logo} alt='Logo' />
      </Link>
    </header>
  )
}

export default Header
