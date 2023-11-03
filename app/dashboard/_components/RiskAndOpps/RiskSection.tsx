import Section from '@/app/dashboard/_components/RiskAndOpps/Section'
import { risksData } from '@/app/dashboard/_components/RiskAndOpps/data/RisksData'

const RiskSection = () => {
  return (
    <div className='col-span-4'>
      <Section title='Risks' items={risksData} />
    </div>
  )
}

export default RiskSection
