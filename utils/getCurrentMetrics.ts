import { getUnique } from '@/utils/getUnique'
import { extractHexColors } from '@/utils/getColors'
import { colors } from '@/tailwind.config'
import type { metrics } from '@/utils/types'

const getCurrentMetrics = (data: any[], metric: string): metrics => {
  const uniqueMetrics = getUnique(data, metric)
  const hexColors = extractHexColors(colors)

  return uniqueMetrics.map((metric, index) => ({
    metric,
    circleColor: hexColors[index],
  }))
}

export { getCurrentMetrics }
