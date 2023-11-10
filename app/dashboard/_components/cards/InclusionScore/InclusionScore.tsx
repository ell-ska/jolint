import Card from '@/components/Card'
import InclusionScoreTimeline from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreTimeline'
import InclusionScoreGeneral from './InclusionScoreGeneral'

const InclusionScore = () => {
  return (
    <Card classname='col-span-full lg:col-span-4 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20'>
      <InclusionScoreGeneral />
      <div className='w-full flex-1 overflow-hidden'>
        <InclusionScoreTimeline />
      </div>
    </Card>
  )
}

export default InclusionScore
