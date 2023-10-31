import { useForm } from '@/hooks/useForm'
import { cn } from '@/utils/classnames'
import { chapters } from '@/lib/formContent'

type FormIndicatorProps = {
  subchapterTitle: string
}

const FormIndicator = ({ subchapterTitle }: FormIndicatorProps) => {
  const { step } = useForm((state) => ({ step: state.step }))
  const currentChapter = Number(step.key?.split('chapter-')[1].charAt(0))
  const subchapter = currentChapter ? chapters[currentChapter - 1] : 0

  return (
    <div className='mb-8 mt-12 flex gap-2 md:mt-20'>
      {subchapter &&
        subchapter.map(({ title }) => (
          <div
            key={title}
            className={cn(
              'h-4 w-4 rounded-full border-2 border-blue-bright',
              title === subchapterTitle && 'bg-blue-bright',
            )}
          />
        ))}
    </div>
  )
}

export default FormIndicator
