import React from 'react'

import Logo from '@/public/Jolint-logo.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <>
      <div className='m-5'>
        <Image className='bg-white' src={Logo} alt='Logo' />
      </div>
      <hr className='text-neutral-400' />
    </>
  )
}
