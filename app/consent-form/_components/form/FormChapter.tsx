import FormIndicator from '@/app/consent-form/_components/form/FormIndicator'
import FormContent from '@/app/consent-form/_components/form/FormContent'
import type { FormChapterProps } from '@/utils/types'

const FormChapter = ({ content, title }: FormChapterProps) => {
  return (
    <div>
      <FormIndicator subchapterTitle={title} />
      <FormContent content={content} title={title} />
    </div>
  )
}

export default FormChapter
