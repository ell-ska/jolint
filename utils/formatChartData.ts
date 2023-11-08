type formatChartDataParams = {
  data: any[]
  xAxis: string
  metric: string
  value: string
}

const formatChartData = ({
  data,
  xAxis,
  metric,
  value,
}: formatChartDataParams) => {
  let restructuredData: any[] = []

  data.forEach((originalEntry) => {
    const existingEntry = restructuredData.find(
      (entry) => entry.time === originalEntry.time,
    )

    if (existingEntry) {
      existingEntry[originalEntry[metric]] = originalEntry[value]
    } else {
      const newEntry = {
        [xAxis]: originalEntry[xAxis],
        [originalEntry[metric]]: originalEntry[value],
      }

      restructuredData = [...restructuredData, newEntry]
    }
  })

  return restructuredData
}

export { formatChartData }
