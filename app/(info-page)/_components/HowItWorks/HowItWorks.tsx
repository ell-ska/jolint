import { howItWorksContent } from '@/lib/howItWorksContent'
import HowItWorksItem from '@/app/(info-page)/_components/HowItWorks/HowItWorksItem'

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='mt-20'>
      <h3 className='mb-12 text-center font-heading text-2xl font-bold md:mb-16 md:text-4xl'>
        How it works
      </h3>
      <div className='flex flex-col gap-16 md:gap-28'>
        {howItWorksContent.map((item, index) => (
          <HowItWorksItem
            key={item.title}
            {...item}
            firstItem={index === 0}
            lastItem={index === howItWorksContent.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
