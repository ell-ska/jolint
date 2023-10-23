'use client'

import { useForm } from '@/hooks/useForm'

const ConsentForm = () => {
  const { step, isFirstStep, isLastStep, next, back } = useForm()

  return (
    <main className='min-h-screen px-20 pt-36'>
      <form>{step}</form>
    </main>
  )
}

export default ConsentForm
