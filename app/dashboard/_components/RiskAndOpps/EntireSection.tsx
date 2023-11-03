import RiskSection from './RiskSection'
import OpportunitiesSection from './OppSection'

const SectionsContainer = () => {
  return (
    <div className='sections-container col-span-6 md:col-span-4'>
      <RiskSection />
      <OpportunitiesSection />
    </div>
  )
}

export default SectionsContainer
