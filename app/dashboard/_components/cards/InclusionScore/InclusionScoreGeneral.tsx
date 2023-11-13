import * as Progress from '@radix-ui/react-progress'

import { cn } from '@/utils/classnames'
import Trend from '@/app/dashboard/_components/Trend'

type InclusionScoreProps = {
  currentData: any[]
  benchmark?: number
}

const InclusionScoreGeneral = ({
  currentData,
  benchmark = 50,
}: InclusionScoreProps) => {
  const inclusionScore = currentData
    .filter((data) => data.team === 'company_average')
    .map((data) => data.inclusion_score)

  const score = inclusionScore[inclusionScore.length - 1].toFixed()
  const previousScore = inclusionScore[inclusionScore.length - 2].toFixed()

  const comparedToPrevious = Number((score - previousScore).toFixed())
  const comparedToBenchmark = Number((score - benchmark).toFixed())

  return (
    <div className='flex flex-col gap-6 lg:flex-col'>
      <h3 className='font-heading text-3xl font-bold'>Inclusion score</h3>
      <div className='self-center font-heading text-5xl font-bold'>{score}</div>
      <Progress.Root className='relative h-8 w-full overflow-hidden rounded-md bg-neutral-200'>
        <Progress.Indicator
          className={cn(
            'absolute h-full w-full rounded-md',
            score >= benchmark ? 'bg-green' : 'bg-red',
          )}
          style={{ transform: `translateX(-${100 - score}%)` }}
        />
      </Progress.Root>
      <div className='space-y-4'>
        <Trend
          trend={comparedToPrevious}
          ending='since last month'
          className='gap-2'
        />
        <Trend
          trend={comparedToBenchmark}
          ending={
            Math.sign(comparedToBenchmark) === 1
              ? 'above benchmark'
              : 'below benchmark'
          }
          className='gap-2'
        />
      </div>
    </div>
  )
}

export default InclusionScoreGeneral
