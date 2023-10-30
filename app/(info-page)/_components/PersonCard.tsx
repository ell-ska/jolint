import Image from 'next/image'

type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
  priority?: string
}

type PersonType = {
  title: string
  desc: string
  image: string | StaticImageData
}

const PersonCard = ({ title, desc, image }: PersonType) => {
  return (
    <div className='flex flex-col items-center gap-8 pt-12 md:flex-row md:pt-16'>
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
        <h4 className='text-xl font-bold leading-8 md:text-2xl md:leading-loose'>
          {title}
        </h4>
        <p className='max-w-6xl pt-4 text-base md:leading-loose'>{desc}</p>
      </div>
    </div>
  )
}

export default PersonCard
