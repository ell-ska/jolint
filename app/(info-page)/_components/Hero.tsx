import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import heroImg from '@/public/Hero.png'

const Hero = () => {
  return (
    <div className='flex min-h-[calc(100vh-5rem)] items-center justify-between gap-8 text-neutral-900 md:min-h-[calc(100vh-7rem)]'>
      <div className='colorful-gradient absolute inset-x-0 -z-10 min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-7rem)] ' />
      <div className='lg:max-w-lg xl:max-w-xl'>
        <h1 className='font-heading text-3xl font-bold md:text-5xl'>
          Let&apos;s Create an Inclusive Workspace Together
        </h1>
        <p className='pt-8 text-lg leading-7 md:text-xl'>
          Gain valuable data insights with our solution that measures inclusion
          and belonging within your organization, enabling you to take action
          for a more inclusive and vibrant work culture while maintaining the
          privacy and integrity of your personal data
        </p>
        <div className='flex flex-col gap-4 pt-12 sm:flex-row sm:gap-6'>
          <Button variant='outline'>
            <Link href='/inclusion'>Why inclusion?</Link>
          </Button>
          <Button>
            <Link href='/#how-it-works'>How it works</Link>
          </Button>
        </div>
      </div>
      <Image
        className='absolute right-0 hidden object-contain lg:block lg:max-w-lg xl:max-w-xl'
        src={heroImg}
        alt='jolint image'
      />
    </div>
  )
}

export default Hero
