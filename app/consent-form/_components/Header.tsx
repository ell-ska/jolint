import Logo from '@/public/Jolint-logo.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='border-b border-neutral-400 p-5 '>
      <Image src={Logo} alt='Logo' />
    </header>
  )
}
