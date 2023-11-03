import Section from '@/app/dashboard/_components/RiskAndOpps/Section'
import { opportunitiesData } from '@/app/dashboard/_components/RiskAndOpps/data/OpportunitiesData'

const OpportunitiesSection = () => {
  return (
    <div className='col-span-4 mt-4'>
      <Section title='Opportunities' items={opportunitiesData} />
    </div>
  )
}

export default OpportunitiesSection
