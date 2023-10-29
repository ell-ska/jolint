'use client'

import { useForm } from '@/hooks/useForm'
import FormButtons from '@/app/consent-form/_components/form/FormButtons'
import Title from '@/app/consent-form/_components/Title'
import { cn } from '@/utils/classnames'

const ConsentForm = () => {
  const { step, steps, stepIndex } = useForm((state) => ({
    step: state.step,
    steps: state.steps,
    stepIndex: state.stepIndex,
  }))
  const isThankYouPage = step.key === 'thank-you'
  const isLastStep = steps.length - 1 <= stepIndex

  return (
    <main className='flex min-h-screen flex-col px-6 pt-32 md:px-20 md:pt-36'>
      <form
        className={cn(
          isLastStep && 'flex grow flex-col items-center justify-center',
        )}
      >
        {!isThankYouPage && <Title />}
        {step}
        <FormButtons />
      </form>
    </main>
  )
}

export default ConsentForm
