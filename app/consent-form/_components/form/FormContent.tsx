import type { FormChapterProps } from '@/utils/types'

const FormContent = ({ content, title }: FormChapterProps) => {
  return (
    <div className='mb-12 mt-8 max-w-3xl'>
      <h2 className='text-xl font-bold md:text-2xl'>{title}</h2>
      <div className='mt-4 space-y-8 md:mt-6'>
        {content.map((text) => (
          <p className='leading-8' key={text}>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default FormContent
