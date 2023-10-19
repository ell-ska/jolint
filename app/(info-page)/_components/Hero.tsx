import Button from '@/components/Button'
import heroImg from '@/public/Hero.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='colorful-gradient flex pt-28 min-h-screen items-center justify-between gap-8 text-neutral-900'>
      <div className='pl-20'>
        <h1 className='font-heading text-5xl font-bold'>
          Let&apos;s Create an Inclusive Workspace Together
        </h1>
        <p className='max-w-xl pt-8 leading-7'>
          Gain valuable data insights with our solution that measures inclusion
          and belonging within your organization, enabling you to take action
          for a more inclusive and vibrant work culture while maintaining the
          privacy and integrity of your personal data
        </p>
        <div className='pt-12'>
          <Button variant={'outline'} className='mr-6'>
            <Link href='/inclusion'>Why inclusion?</Link>
          </Button>
          <Button>
            <Link href='/#how-it-works'>How it works</Link>
          </Button>
        </div>
      </div>
      <Image
        className='max-w-xl object-contain'
        src={heroImg}
        alt='jolint image'
      />
    </div>
  )
}

export default Hero
