'use client'

import { useForm } from '@/hooks/useForm'

const ConsentForm = () => {
  const { step, isFirstStep, isLastStep, next, back } = useForm()

  return (
    <main className='min-h-screen px-6 pt-32 md:px-20 md:pt-36'>
      <form>{step}</form>
    </main>
  )
}

export default ConsentForm
