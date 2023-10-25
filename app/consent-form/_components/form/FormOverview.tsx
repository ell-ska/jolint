import { useForm } from '@/hooks/useForm'
import Chapter from '@/app/consent-form/_components/chapter/Chapter'
import type { State } from '@/app/consent-form/_components/chapter/Chapter'

const getState = (chapter: number, doneChapters: number): State => {
  if (chapter === 1) return doneChapters >= chapter ? 'done' : 'unlocked'

  return doneChapters >= chapter
    ? 'done'
    : doneChapters + 1 === chapter
    ? 'unlocked'
    : 'locked'
}

const FormOverview = () => {
  const { goTo, doneChapters } = useForm((state) => ({
    goTo: state.goTo,
    doneChapters: state.doneChapters,
  }))

  return (
    <div className='relative mb-16 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
      <Chapter
        title='Introduction'
        desc='Let Jolint introduce themselves to you'
        icon='introduction'
        state={getState(1, doneChapters)}
        onClick={() => goTo(1)}
      />
      <Chapter
        title='Purpose'
        desc='The purpose of having Jolint in your company'
        icon='purpose'
        state={getState(2, doneChapters)}
        onClick={() => goTo(4)}
      />
      <Chapter
        title='Your rights'
        desc='Your rights with the processing of your personal data'
        icon='rights'
        state={getState(3, doneChapters)}
        onClick={() => goTo(6)}
      />
      <Chapter
        title='Consent'
        desc='Sign in to improve inclusion and belonging in your company'
        icon='consent'
        state={getState(4, doneChapters)}
        onClick={() => goTo(10)}
      />
      <span className='absolute -bottom-8 right-0'>{doneChapters}/4</span>
    </div>
  )
}

export default FormOverview
