import React from 'react'
import * as Progress from '@radix-ui/react-progress'
import { cn } from '@/utils/classnames'
import Card from '@/components/Card'
import InclusionTrend from './InclusionTrends'

type InclusionScoreProps = {
  title?: string
  score?: number
  benchmark?: number
  trend?: number
}

const trendData = [
  {
    trend: +5,
  },
  {
    trend: +12,
  },
]

const InclusionScore = ({
  title = 'Inclusion score',
  score = 76,
  benchmark = 50,
}: InclusionScoreProps) => {
  return (
    <Card classname='col-span-full lg:col-span-4 h-min'>
      <div className='flex max-w-[220px] flex-col items-center gap-8 sm:flex-row lg:flex-col'>
        <h3 className='font-heading text-3xl font-bold'>{title}</h3>
        <div className='self-center font-heading text-5xl font-bold'>
          {score}
        </div>
        <Progress.Root className='relative h-8 w-full overflow-hidden rounded-sm bg-neutral-200'>
          <Progress.Indicator
            className={cn(
              'absolute h-full w-full rounded-sm',
              score >= benchmark ? 'bg-green' : 'bg-red',
            )}
            style={{ transform: `translateX(-${100 - score}%)` }}
          />
        </Progress.Root>
        <div className='gap-4'>
          {trendData.map(({ trend }) => (
            <InclusionTrend trend={trend} key={trend} />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default InclusionScore
