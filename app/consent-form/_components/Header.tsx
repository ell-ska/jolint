import Image from 'next/image'

import Logo from '@/public/Jolint-logo.svg'

const Header = () => {
  return (
    <header className='absolute w-full border-b border-neutral-400 bg-neutral-100 p-8'>
      <Image src={Logo} alt='Logo' />
    </header>
  )
}

export default Header
