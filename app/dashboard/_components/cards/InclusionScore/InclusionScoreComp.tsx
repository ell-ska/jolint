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

const InclusionScoreComp = ({
  title = 'Inclusion score',
  score = 76,
  benchmark = 50,
}: InclusionScoreProps) => {
  return (
    <Card classname='col-span-full lg:col-span-4 h-min'>
        <div className='flex flex-col items-start justify-between sm:flex-row lg:flex-col max-w-[220px] gap-8'>
          <h3 className='font-heading text-3xl font-bold'>{title}</h3>
          <div className='text-5xl self-center font-bold font-heading'>{score}</div>
        <Progress.Root className='relative h-8 w-full overflow-hidden rounded-sm bg-neutral-200'>
          <Progress.Indicator
            className={cn(
              'absolute h-full w-full rounded-sm',
              score >= benchmark ? 'bg-green' : 'bg-red',
            )}
            style={{ transform: `translateX(-${100 - score}%)` }}
          />
        </Progress.Root>
        {trendData.map(({trend}) => (
          <InclusionTrend trend={trend} key={trend} />
        ))}
      </div>
    </Card>
  )
}

export default InclusionScoreComp
