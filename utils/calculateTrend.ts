type calculateTrendParams = {
  currentEntry: any
  originalData: any[]
  category: string
}

const calculateTrend = ({
  currentEntry,
  originalData,
  category,
}: calculateTrendParams): number | undefined => {
  const previousWeek = originalData.find(
    (data) =>
      data.team === 'company_average' && data.id === currentEntry.id - 1,
  )

  if (!previousWeek) return undefined

  return Number((currentEntry[category] - previousWeek[category]).toFixed())
}

export { calculateTrend }
