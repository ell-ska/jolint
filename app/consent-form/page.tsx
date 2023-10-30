'use client'

import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

import { useForm } from '@/hooks/useForm'
import { cn } from '@/utils/classnames'
import Title from '@/app/consent-form/_components/Title'
import FormButtons from '@/app/consent-form/_components/form/FormButtons'
import type { ChapterKeys } from '@/utils/types'

const ConsentForm = () => {
  const { step, steps, stepIndex, goTo } = useForm((state) => ({
    step: state.step,
    steps: state.steps,
    stepIndex: state.stepIndex,
    goTo: state.goTo,
  }))

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    goTo(steps[stepIndex].key as ChapterKeys)

    // i only want this to run on first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isThankYouPage = step.key === 'thank-you'
  const isLastStep = steps?.length - 1 <= stepIndex

  return (
    <main className='flex min-h-screen flex-col px-6 pt-32 md:px-20 md:pt-36'>
      {isMounted ? (
        <form
          className={cn(
            isLastStep && 'flex grow flex-col items-center justify-center',
          )}
        >
          {!isThankYouPage && <Title />}
          {step}
          <FormButtons />
        </form>
      ) : (
        <div className='grid grow place-items-center text-blue-bright'>
          <Loader2 size={32} className='animate-spin' />
        </div>
      )}
    </main>
  )
}

export default ConsentForm
