import { useState } from 'react'

const useForm = (steps: React.ReactNode[]) => {
  const [stepIndex, setStepIndex] = useState(0)

  const next = () => {
    setStepIndex((prev) => (steps.length - 1 < prev ? prev : prev + 1))
  }

  const back = () => {
    setStepIndex((prev) => (prev === 0 ? prev : prev - 1))
  }

  const goTo = (step: number) => {
    setStepIndex(step)
  }

  return {
    steps,
    step: steps[stepIndex],
    stepIndex,
    isFirstStep: stepIndex === 0,
    isLastStep: stepIndex === steps.length - 1,
    next,
    back,
    goTo,
  }
}

export { useForm }
