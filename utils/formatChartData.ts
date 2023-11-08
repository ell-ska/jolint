type formatChartDataParams = {
  data: any[]
  xAxis: string
  category: string
  value: string
}

const formatChartData = ({
  data,
  xAxis,
  category,
  value,
}: formatChartDataParams) => {
  let restructuredData: any[] = []

  data.forEach((originalEntry) => {
    const existingEntry = restructuredData.find(
      (entry) => entry[xAxis] === originalEntry[xAxis],
    )

    if (existingEntry) {
      existingEntry[originalEntry[category]] = originalEntry[value]
    } else {
      const newEntry = {
        [xAxis]: originalEntry[xAxis],
        [originalEntry[category]]: originalEntry[value],
      }

      restructuredData = [...restructuredData, newEntry]
    }
  })

  const metrics = Object.keys(restructuredData[0]).filter(
    (metric) => metric !== xAxis,
  )

  return { data: restructuredData, metrics }
}

export { formatChartData }
