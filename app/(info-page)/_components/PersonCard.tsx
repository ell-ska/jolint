import Image from 'next/image'
import { StaticImageData } from 'next/image'

type PersonType = {
  title: string
  desc: string
  image: string | StaticImageData
}

const PersonCard = ({ title, desc, image }: PersonType) => {
  return (
    <div className='flex flex-col items-center gap-8 md:flex-row'>
      {image && (
        <Image
          className='h-48 w-48'
          src={image}
          alt={title}
          width={192}
          height={192}
        />
      )}
      <div className='font-body text-neutral-900'>
        <h4 className='text-xl font-bold  md:text-2xl'>{title}</h4>
        <p className='max-w-6xl pt-4 text-base leading-loose'>{desc}</p>
      </div>
    </div>
  )
}

export default PersonCard
