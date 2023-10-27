import FormIndicator from '@/app/consent-form/_components/form/FormIndicator'

type FormChapterProps = {
  title: string
  content: string[]
}

const FormChapter = ({ content, title }: FormChapterProps) => {
  return (
    <div>
      <FormIndicator subchapterTitle={title} />
      {title}
    </div>
  )
}

export default FormChapter
