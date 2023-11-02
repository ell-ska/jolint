import * as Progress from '@radix-ui/react-progress'
import { cn } from '@/utils/classnames'
import Card from '@/components/Card'
import InclusionTrend from '@/app/dashboard/_components/cards/InclusionScore/InclusionTrends'

type InclusionScoreProps = {
  title?: string
  score?: number
  benchmark?: number
  trend?: number
  text?: string
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

const InclusionScore = ({
  title = 'Inclusion score',
  score = 76,
  benchmark = 50,
}: InclusionScoreProps) => {
  return (
    <Card classname='col-span-full lg:col-span-4 h-min flex items-center flex-col lg:flex-row lg:items-start'>
      <div className='flex max-w-[220px] flex-col gap-8 lg:flex-col '>
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
        <div>
          {trendData.map(({ trend, text }) => (
            <div key={trend} className='flex gap-2  first-of-type:pb-4'>
              <InclusionTrend trend={trend} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default InclusionScore
