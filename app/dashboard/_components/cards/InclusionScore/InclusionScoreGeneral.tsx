import * as Progress from '@radix-ui/react-progress'

import InclusionTrend from '@/app/dashboard/_components/cards/InclusionScore/InclusionTrends'
import { cn } from '@/utils/classnames'

type InclusionScoreProps = {
  title?: string
  score?: number
  benchmark?: number
}

const trendData = [
  {
    trend: +5,
    text: 'since last month',
  },
  {
    trend: +12,
    text: 'above benchmark',
  },
]

const InclusionScoreGeneral = ({
  title = 'Inclusion score',
  score = 76,
  benchmark = 50,
}: InclusionScoreProps) => {
  return (
    <div className='flex min-w-min flex-col gap-8 lg:flex-col'>
      <h3 className='font-heading text-3xl font-bold'>{title}</h3>
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
      <div>
        {trendData.map(({ trend, text }) => (
          <div key={trend} className='flex gap-2 first-of-type:pb-4'>
            <InclusionTrend trend={trend} />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InclusionScoreGeneral
