import { unslugify } from '@/utils/slugify'

type formatChartDataParams = {
  data: any[]
  xAxis: string
  category: string
  value: string
  benchmark?: number
}

const formatChartData = ({
  data,
  xAxis,
  category,
  value,
  benchmark,
}: formatChartDataParams) => {
  let restructuredData: any[] = []

  data.forEach((originalEntry) => {
    const existingEntry = restructuredData.find(
      (entry) => entry[xAxis] === originalEntry[xAxis],
    )

    if (existingEntry) {
      existingEntry[originalEntry[category]] = originalEntry[value].toFixed(1)
    } else {
      const unslugifiedCategory = unslugify(originalEntry[category])

      const newEntry = {
        [xAxis]: originalEntry[xAxis],
        [unslugifiedCategory]: originalEntry[value].toFixed(1),
        benchmark: benchmark || undefined,
      }
      restructuredData = [...restructuredData, newEntry]
    }
  })

  const metrics = Object.keys(restructuredData[0])
    .filter((metric) => metric !== xAxis)
    .filter((metric) => metric !== 'benchmark')

  return { data: restructuredData, metrics }
}

export { formatChartData }
