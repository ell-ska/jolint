'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import TimelineDot from '@/app/(info-page)/_components/HowItWorks/TimelineDot'
import Timeline from '@/app/(info-page)/_components/HowItWorks/Timeline'

type HowItWorksItemProps = {
  title: string
  text: string
  image: string
  firstItem: boolean
  lastItem: boolean
}

const HowItWorksItem = ({
  title,
  text,
  image,
  firstItem,
  lastItem,
}: HowItWorksItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [itemHeight, setItemHeight] = useState(0)

  useEffect(() => {
    const updateSize = () => setItemHeight(ref.current?.clientHeight || 0)

    setItemHeight(ref.current?.clientHeight || 0)
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [ref])

  return (
    <div
      ref={ref}
      className='relative flex flex-col-reverse gap-6 md:flex-row md:items-center md:gap-12 lg:gap-20'
    >
      <div className='relative h-72 max-w-full md:flex-1'>
        <Image src={image} alt={title} fill className='h-auto w-auto' />
      </div>
      <TimelineDot />
      <Timeline
        itemHeight={itemHeight}
        firstItem={firstItem}
        lastItem={lastItem}
      />
      <div className='md:flex-1'>
        <h4 className='mb-4 text-lg font-bold md:text-2xl'>{title}</h4>
        <p className='leading-loose'>{text}</p>
      </div>
    </div>
  )
}

export default HowItWorksItem
