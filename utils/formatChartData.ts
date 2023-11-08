type formatChartDataParams = {
  data: any[]
  xAxis: string
  category: string
  value: string
  id: string
}

const formatChartData = ({
  data,
  xAxis,
  category,
  value,
  id,
}: formatChartDataParams) => {
  let restructuredData: any[] = []

  data.forEach((originalEntry) => {
    const existingEntry = restructuredData.find(
      (entry) => entry.time === originalEntry.time,
    )

    if (existingEntry) {
      existingEntry[originalEntry[category]] = originalEntry[value]
    } else {
      const newEntry = {
        [xAxis]: originalEntry[xAxis],
        [originalEntry[category]]: originalEntry[value],
        id: originalEntry[id],
      }

      restructuredData = [...restructuredData, newEntry]
    }
  })

  return restructuredData
}

export { formatChartData }
