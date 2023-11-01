import { ArrowUpCircle, ArrowDownCircle, ArrowRightCircle } from 'lucide-react'

type WeeklyInclusionScoreTrendProps = {
  trend: number
}

const InclusionTrend = ({ trend }: WeeklyInclusionScoreTrendProps) => {
  const Icon = () => {
    if (Math.sign(trend) === 1)
      return <ArrowUpCircle size={16} className='text-green' />

    if (Math.sign(trend) === -1)
      return <ArrowDownCircle size={16} className='text-red' />

    return <ArrowRightCircle size={16} className='text-neutral-400' />
  }

  return (
    <div className='flex items-center gap-1'>
      <Icon />
      <span>{Math.sign(trend) === 1 ? `+${trend}` : trend}</span>
    </div>
  )
}

export default InclusionTrend
