// EntireSection.tsx or SectionsContainer.tsx
import Section from '@/app/dashboard/_components/RiskAndOpps/Section'
import { risksData } from '@/app/dashboard/_components/RiskAndOpps/data/RisksData'
import { opportunitiesData } from '@/app/dashboard/_components/RiskAndOpps/data/OpportunitiesData'

const EntireSection = () => {
  return (
    <div className='col-span-6 md:col-span-6 lg:col-span-4'>
      <Section title='Risks' items={risksData} />
      <div className='mt-8'>
        <Section title='Opportunities' items={opportunitiesData} />
      </div>
    </div>
  )
}

export default EntireSection
