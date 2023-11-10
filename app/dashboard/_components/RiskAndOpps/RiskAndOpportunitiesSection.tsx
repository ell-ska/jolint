import Section from '@/app/dashboard/_components/RiskAndOpps/Section'
import { risksData } from '@/app/dashboard/_components/RiskAndOpps/data/RisksData'
import { opportunitiesData } from '@/app/dashboard/_components/RiskAndOpps/data/OpportunitiesData'

const RiskAndOppsSection = () => {
  return (
    <div className='col-span-6 space-y-4 lg:space-y-8 xl:col-span-4'>
      <Section title='Risks' items={risksData} />
      <Section title='Opportunities' items={opportunitiesData} />
    </div>
  )
}

export default RiskAndOppsSection
