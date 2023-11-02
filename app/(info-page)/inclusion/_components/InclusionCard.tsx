import Accordion from '@/components/Accordion'
import { ImageCard } from '@/utils/types'
import Image from 'next/image'

const inclusionCard = ({ img, imgTitle, imgText }: ImageCard) => {
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
          <h4 className='pt-6 text-xl font-bold md:pt-4 md:text-2xl'>
            {imgTitle}
          </h4>
        </div>
      }
      content={<p className=''>{imgText}</p>}
    />
  )
}

export default inclusionCard
