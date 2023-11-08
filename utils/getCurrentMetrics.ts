import { getUnique } from '@/utils/getUnique'
import type { metrics } from '@/utils/types'

const colors = [
  'bg-blue-bright',
  'bg-orange',
  'bg-green',
  'bg-red',
  'bg-blue-light',
]

const getCurrentMetrics = (data: any[], metric: string): metrics => {
  const uniqueMetrics = getUnique(data, metric)
  return uniqueMetrics.map((metric, index) => ({
    metric,
    circleColor: colors[index],
  }))
}

export { getCurrentMetrics }