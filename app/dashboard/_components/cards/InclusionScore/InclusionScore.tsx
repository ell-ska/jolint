'use client'
import Card from '@/components/Card'
import InclusionScoreTimeline from './InclusionScoreTimeline'

const InclusionScore = () => {
  return (
    <Card classname='col-span-full lg:col-span-4 h-min flex'>
      <div className='h-64 w-[220px]'>container</div>
      <InclusionScoreTimeline />
    </Card>
  )
}

export default InclusionScore
