import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

type WeeklyInclusionScoreTrendProps = {
  trend: number
}

const WeeklyInclusionScoreTrend = ({
  trend,
}: WeeklyInclusionScoreTrendProps) => {
  if (Math.sign(trend) === 0) return null

  return (
    <div className='flex items-center gap-1'>
      {Math.sign(trend) === 1 ? (
        <ArrowUpCircle size={16} className='text-green' />
      ) : (
        <ArrowDownCircle size={16} className='text-red' />
      )}
      <span>{Math.sign(trend) === 1 ? `+${trend}` : trend}</span>
    </div>
  )
}

export default WeeklyInclusionScoreTrend
