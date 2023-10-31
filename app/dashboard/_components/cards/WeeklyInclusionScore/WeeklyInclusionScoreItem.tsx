import * as Progress from '@radix-ui/react-progress'
// import { Info } from 'lucide-react'

import { cn } from '@/utils/classnames'
import WeeklyInclusionScoreTrend from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScoreTrend'

type WeeklyInclusionScoreItemProps = {
  name: string
  score: number
  benchmark: number
  trend: number
}

const WeeklyInclusionScoreItem = ({
  name,
  score,
  benchmark,
  trend,
}: WeeklyInclusionScoreItemProps) => {
  return (
    <div className='space-y-1'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <p>{name}</p>
          {/* Whats supposed to happen here? */}
          {/* <Info size={16} className='text-neutral-600' /> */}
        </div>
        <WeeklyInclusionScoreTrend trend={trend} />
      </div>
      <div className='flex items-center gap-2'>
        <Progress.Root className='relative h-2 w-full overflow-hidden rounded-sm bg-neutral-200'>
          <Progress.Indicator
            className={cn(
              'absolute h-full w-full rounded-sm',
              score >= benchmark ? 'bg-green' : 'bg-red',
            )}
            style={{ transform: `translateX(-${100 - score}%)` }}
          />
        </Progress.Root>
        <span className='font-bold'>{score}</span>
      </div>
    </div>
  )
}

export default WeeklyInclusionScoreItem