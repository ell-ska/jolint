import Accordion from '@/components/Accordion'
import { ImageCard } from '@/utils/types'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const InclusionCard = ({ img, imgTitle, imgText }: ImageCard) => {
  return (
    <Accordion
      className='space-y-4 transition hover:scale-[1.02]'
      trigger={
        <div className='flex w-full flex-col'>
          <div className='relative aspect-[3/2]'>
            <Image
              className='rounded-2xl object-cover'
              src={img}
              alt={imgTitle}
              fill
            />
          </div>
          <div className='flex justify-between'>
            <h4 className='pt-6 text-xl font-bold md:pt-4 md:text-2xl'>
              {imgTitle}
            </h4>
            <ChevronDown className='mt-7 shrink-0 group-data-[state=open]:rotate-180 md:mt-5' />
          </div>
        </div>
      }
      content={<p>{imgText}</p>}
    />
  )
}

export default InclusionCard
