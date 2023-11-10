import { cn } from '@/utils/classnames'
import { ArrowUpCircle, ArrowDownCircle, ArrowRightCircle } from 'lucide-react'

type WeeklyInclusionScoreTrendProps = {
  trend: number
  ending?: string
  className?: string
}

const WeeklyInclusionScoreTrend = ({
  trend,
  ending,
  className,
}: WeeklyInclusionScoreTrendProps) => {
  const Icon = () => {
    if (Math.sign(trend) === 1)
      return <ArrowUpCircle size={16} className='text-green' />

    if (Math.sign(trend) === -1)
      return <ArrowDownCircle size={16} className='text-red' />

    return <ArrowRightCircle size={16} className='text-neutral-400' />
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Icon />
      <span>
        {Math.sign(trend) === 1 ? `+${trend}` : trend} {ending}
      </span>
    </div>
  )
}

export default WeeklyInclusionScoreTrend
