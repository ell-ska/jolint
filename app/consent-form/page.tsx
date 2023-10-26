'use client'

import { useForm } from '@/hooks/useForm'
import FormButtons from '@/app/consent-form/_components/form/FormButtons'

const ConsentForm = () => {
  const { step } = useForm((state) => ({ step: state.step }))

  return (
    <main className='min-h-screen px-6 pt-32 md:px-20 md:pt-36'>
      <form>
        {step}
        <FormButtons />
      </form>
    </main>
  )
}

export default ConsentForm
