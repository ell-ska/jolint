import * as Progress from '@radix-ui/react-progress'

import { cn } from '@/utils/classnames'
import Trend from '@/app/dashboard/_components/Trend'
import WeeklyInclusionScoreInfo from '@/app/dashboard/_components/cards/WeeklyInclusionScore/WeeklyInclusionScoreInfo'
import type { WeeklyData } from '@/utils/types'

type WeeklyInclusionScoreItemProps = WeeklyData

const WeeklyInclusionScoreItem = ({
  name,
  score,
  benchmark = 50,
  trend = 0,
  desc,
}: WeeklyInclusionScoreItemProps) => {
  return (
    <div className='space-y-1'>
      <div className='relative flex justify-between'>
        <div className='flex items-center gap-2'>
          <p>{name}</p>
          {desc && <WeeklyInclusionScoreInfo desc={desc} />}
        </div>
        <Trend trend={trend} />
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
