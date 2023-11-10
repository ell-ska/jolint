import { calculateTrend } from '@/utils/calculateTrend'
import { unslugify } from '@/utils/slugify'
import type { WeeklyData } from '@/utils/types'

type formatWeeklyDataParams = {
  originalData: any[]
  currentData: any[]
  categories: string[]
  descriptions?: { name: string; desc: string }[]
}

const formatWeeklyData = ({
  originalData,
  currentData,
  categories,
  descriptions,
}: formatWeeklyDataParams) => {
  let restructuredData: WeeklyData[] = []

  const entry = currentData.find((entry) => entry.team === 'company_average')

  categories.forEach((category) => {
    const newEntry = {
      name: unslugify(category),
      score: entry[category].toFixed(),
      benchmark: undefined,
      trend: calculateTrend({ currentEntry: entry, originalData, category }),
      desc: descriptions?.find((desc) => desc.name === category)?.desc,
    }

    restructuredData = [...restructuredData, newEntry]
  })

  return restructuredData
}

export { formatWeeklyData }
