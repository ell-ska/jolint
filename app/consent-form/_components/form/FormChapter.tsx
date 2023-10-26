type FormChapterProps = {
  title: string
  content: string[]
}

const FormChapter = ({ content, title }: FormChapterProps) => {
  return <div>{title}</div>
}

export default FormChapter
