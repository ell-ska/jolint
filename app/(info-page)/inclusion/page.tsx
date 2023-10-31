import TitleSectionInclusion from '@/app/(info-page)/_components/TitleSectionInclusion'
import InclusionSection from './_components/InclusionSection'
import { inclusionContent } from '@/lib/inclusionContent'

const Inclusion = () => {
  return (
    <section className='min-h-[calc(100vh-5rem)] pt-20 md:min-h-[calc(100vh-7rem)] md:pt-28'>
      <div className='colorfull-gradient-inclusion absolute inset-0 -z-10' />
      <TitleSectionInclusion />
      {inclusionContent.map(({ title, imageCards }) => (
        <InclusionSection key={title} title={title} imageCards={imageCards} />
      ))}
    </section>
  )
}

export default Inclusion
