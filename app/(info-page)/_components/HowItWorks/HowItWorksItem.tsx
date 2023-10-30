import Image from 'next/image'

type HowItWorksItemProps = {
  title: string
  text: string
  image: string
}

const HowItWorksItem = ({ title, text, image }: HowItWorksItemProps) => {
  return (
    <div className='flex flex-col-reverse gap-6 md:flex-row md:items-center md:gap-20'>
      <div className='grid place-items-center md:flex-1'>
        <Image src={image} alt={title} width={400} height={300} />
      </div>
      <div className='md:flex-1'>
        <h4 className='mb-4 text-lg font-bold md:text-2xl'>{title}</h4>
        <p className='leading-loose'>{text}</p>
      </div>
    </div>
  )
}

export default HowItWorksItem
