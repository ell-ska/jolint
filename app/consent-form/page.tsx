'use client'

import { useForm } from '@/hooks/useForm'
import { cn } from '@/utils/classnames'
import Button from '@/components/Button'

const ConsentForm = () => {
  const { step, stepIndex, isFirstStep, isLastStep, next, back } = useForm()

  return (
    <main className='min-h-screen px-6 pt-32 md:px-20 md:pt-36'>
      <form>
        {step}
        <div className={cn('mb-16 flex gap-4')}>
          <Button
            variant='outline'
            className='flex-1 md:flex-initial'
            onClick={(e) => {
              e.preventDefault()
              back()
            }}
          >
            Back
          </Button>
          <Button
            className='flex-1 md:flex-initial'
            onClick={(e) => {
              e.preventDefault()
              next()
            }}
          >
            Next
          </Button>
        </div>
      </form>
    </main>
  )
}

export default ConsentForm
