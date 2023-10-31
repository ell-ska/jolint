import InclusionCard from './InclusionCard'
import { ImageCard } from '@/utils/types'

type InclusionSectionProps = {
  title: string
  imageCards: ImageCard[]
}

const InclusionSection = ({ title, imageCards }: InclusionSectionProps) => {
  return (
    <section className='pb-20 md:pb-28'>
      <h2 className='pb-8 text-center font-heading text-2xl font-bold md:text-left md:text-4xl'>
        {title}
      </h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {imageCards.map((card) => (
          <InclusionCard key={card.imgTitle} {...card} />
        ))}
      </div>
    </section>
  )
}

export default InclusionSection
