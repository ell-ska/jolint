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

export type CardHeaderProps = {
  title: string
  currentMetrics?: {
    metric: string
    circleColor: string
  }[]
  dropdown: DropdownProps
}

export type DropdownProps = {
  options: string[]
  selected: string
  onSelect: (value: string) => void
  align?: 'start' | 'end'
  formater?: (option: string) => string
}

export type ImageCard = { img: string; imgTitle: string; imgText: string }
