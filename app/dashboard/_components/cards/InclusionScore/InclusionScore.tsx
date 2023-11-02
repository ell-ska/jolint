'use client'
import Card from '@/components/Card'
import InclusionScoreTimeline from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreTimeline'

const InclusionScore = () => {
  return (
    <Card classname='col-span-full lg:col-span-4 h-min flex'>
      <InclusionScoreTimeline />
    </Card>
  )
}

export default InclusionScore
