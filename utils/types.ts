import { ChangeEvent } from 'react'

export type UrlsType = {
  name: string
  href: string
  icon: React.ReactNode
}[]

export type FormChapterProps = {
  title: string
  content: string[]
}

export type ChapterKeys =
  | 'overview-1'
  | 'chapter-1.1'
  | 'chapter-1.2-done-1'
  | 'overview-2'
  | 'chapter-2.1-done-2'
  | 'overview-3'
  | 'chapter-3.1'
  | 'chapter-3.2'
  | 'chapter-3.3-done-3'
  | 'overview-4'
  | 'chapter-4.1'
  | 'chapter-4.2'
  | 'chapter-4.3-sign-done-4'
  | 'overview-5-submit'
  | 'thank-you'

export type ImageCard = { img: string; imgTitle: string; imgText: string }

export type metrics = {
  metric: string
  circleColor: string
}[]

export type CardHeaderProps = {
  title: string
  currentMetrics?: metrics
  dropdown: DropdownProps
}

export type DropdownProps = {
  options: string[]
  selected: string
  onSelect: (value: string) => void
  align?: 'start' | 'end'
  formater?: (option: string) => string
}

export type InputFieldType = {
  htmlFor: string
  id: string
  labelValue: string
  name: string
  type: string
  handleForm: (e: ChangeEvent<HTMLInputElement>) => void
}

export type HtmlInputField = InputFieldType[]

export type endpoints =
  | 'inclusionscore'
  | 'demographic-inclusion'
  | 'demographic-timeline'

export type dataResponse = {
  data?: any
  error?: {
    status?: number
    message: string
  }
}

export type AggregatedDataEntry = {
  month: string
  [team: string]: number | string | null
  benchmark: number
}
export type WeeklyData = {
  name: string
  score: number
  benchmark?: number
  trend?: number
  desc?: string
}
