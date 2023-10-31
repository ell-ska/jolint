import { format, isThisWeek, isThisYear, parseISO } from 'date-fns'

const formatWeek = (week: string) => {
  const date = parseISO(week)

  if (isThisWeek(date)) return 'This week'
  if (isThisYear(date)) return `Week ${format(date, 'I')}`
  return `Week ${format(date, 'I, yyyy')}`
}

export { formatWeek }
