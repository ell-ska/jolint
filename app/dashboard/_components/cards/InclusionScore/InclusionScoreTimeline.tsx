'use client'

import InclusionScoreChart from '@/app/dashboard/_components/cards/InclusionScore/InclusionScoreChart'
import CardHeader from '@/app/dashboard/_components/CardHeader'
import type { metrics } from '@/utils/types'

type InclusionScoreTimelineProps = {
  currentTeam: string
  categories: string[]
  currentMetrics: metrics
  currentData: any[]
  update: (team?: string) => void
}

const InclusionScoreTimeline = ({
  currentTeam,
  categories,
  currentMetrics,
  currentData,
  update,
}: InclusionScoreTimelineProps) => {
  return (
    <div className='flex w-full flex-col gap-8'>
      <CardHeader
        title='Timeline'
        currentMetrics={currentMetrics}
        dropdown={{
          onSelect: (value) => update(value),
          selected: currentTeam,
          options: categories,
          align: 'start',
        }}
      />
      <InclusionScoreChart currentData={currentData} />
    </div>
  )
}

export default InclusionScoreTimeline
