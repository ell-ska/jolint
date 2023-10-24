import { useForm } from '@/hooks/useForm'
import Chapter from '@/app/consent-form/_components/chapter/Chapter'
import type { State } from '@/app/consent-form/_components/chapter/Chapter'

type FormOverviewProps = {
  states: [State, State, State, State]
}

const FormOverview = ({ states }: FormOverviewProps) => {
  const { goTo } = useForm((state) => ({ goTo: state.goTo }))

  const amountOfDone = states.filter((state) => state === 'done').length

  return (
    <div className='relative mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
      <Chapter
        title='Introduction'
        desc='Let Jolint introduce themselves to you'
        icon='introduction'
        state={states[0]}
      />
      <Chapter
        title='Purpose'
        desc='The purpose of having Jolint in your company'
        icon='purpose'
        state={states[1]}
      />
      <Chapter
        title='Your rights'
        desc='Your rights with the processing of your personal data'
        icon='rights'
        state={states[2]}
      />
      <Chapter
        title='Consent'
        desc='Sign in to improve inclusion and belonging in your company'
        icon='consent'
        state={states[3]}
      />
      <span className='absolute -bottom-8 right-0'>{amountOfDone}/4</span>
    </div>
  )
}

export default FormOverview
