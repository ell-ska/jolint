'use client'
import Card from '@/components/Card'
import InclusionScoreTopBar from './InclusionScoreTopBar'
import InclusionScoreTimeline from './InclusionScoreTimeline'

import { getDataTeamsAndScores } from '@/utils/getDataTeamsAndScores'
import data from '@/lib/mockData.json'

const InclusionScore = () => {
  return (
    <Card classname='col-span-full lg:col-span-4 h-min flex'>
      <div className='h-64 p-8 w-[220px]'>container</div>
      <div className='p-8'>
        <InclusionScoreTimeline />
      </div>
    </Card>
  )
}

export default InclusionScore
