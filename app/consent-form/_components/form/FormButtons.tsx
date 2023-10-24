'use client'

import Link from 'next/link'

import { useForm } from '@/hooks/useForm'
import { cn } from '@/utils/classnames'
import Button, { buttonVariants } from '@/components/Button'

const FormButtons = () => {
  const { steps, step, stepIndex, next, back } = useForm()
  const isFirstStep = stepIndex === 0
  const isLastStep = steps.length - 1 <= stepIndex
  const isSubmitStep = step.key === 'overview-5-submit'

  return (
    <div className='mb-16 flex gap-4'>
      {!isFirstStep && !isLastStep && (
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
      )}
      {!isLastStep && (
        <Button
          className='flex-1 md:flex-initial'
          variant={isSubmitStep ? 'secondary' : 'primary'}
          onClick={(e) => {
            e.preventDefault()
            next()
          }}
        >
          {isSubmitStep ? 'Submit' : 'Next'}
        </Button>
      )}
      {isLastStep && (
        <Link href='/' className={buttonVariants()}>
          Close
        </Link>
      )}
    </div>
  )
}

export default FormButtons
