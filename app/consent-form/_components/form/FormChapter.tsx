type FormChapterProps = {
  title: string
  content: string[]
}

const FormChapter = ({ content, title }: FormChapterProps) => {
  return (
    <div className='mb-12 mt-8 max-w-3xl'>
      <h2 className='text-xl font-bold md:text-2xl'>{title}</h2>
      <div className='mt-6 space-y-8'>
        {content.map((text) => (
          <p className='leading-8' key={text}>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default FormChapter
