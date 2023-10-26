'use client'

import { useForm } from '@/hooks/useForm'
import FormButtons from '@/app/consent-form/_components/form/FormButtons'
import Title from '@/app/consent-form/_components/Title'

const ConsentForm = () => {
  const { step } = useForm((state) => ({ step: state.step }))
  const isThankYouPage = step.key === 'thank-you'

  return (
    <main className='min-h-screen px-6 pt-32 md:px-20 md:pt-36'>
      <form>
        {!isThankYouPage && <Title />}
        {step}
        <FormButtons />
      </form>
    </main>
  )
}

export default ConsentForm
