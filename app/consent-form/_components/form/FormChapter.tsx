import FormIndicator from '@/app/consent-form/_components/form/FormIndicator'
import FormContent from '@/app/consent-form/_components/form/FormContent'
import type { FormChapterProps } from '@/utils/types'

const FormChapter = ({ content, title }: FormChapterProps) => {
  return (
    <>
      <FormIndicator subchapterTitle={title} />
      <FormContent content={content} title={title} />
    </>
  )
}

export default FormChapter
