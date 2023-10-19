import Logo from '@/public/Jolint-logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='border-b border-neutral-400 p-8'>
      <Image src={Logo} alt='Logo' />
    </header>
  )
}

export default Header
