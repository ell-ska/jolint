'use client'

import { formContent } from '@/lib/formContent'
import { create } from 'zustand'

type State = {
  steps: JSX.Element[]
  step: JSX.Element
  stepIndex: number
}

type Actions = {
  next: () => void
  back: () => void
  goTo: (step: number) => void
}

const initialState: State = {
  steps: formContent,
  step: formContent[0],
  stepIndex: 0,
}

const useForm = create<State & Actions>((set, get) => ({
  ...initialState,
  next: () =>
    set(() => {
      const currentIndex = get().stepIndex
      const isLastStep = get().steps.length - 1 <= currentIndex
      const nextStep = isLastStep ? currentIndex : currentIndex + 1

      return {
        stepIndex: nextStep,
        step: get().steps[nextStep],
      }
    }),
  back: () =>
    set(() => {
      const currentIndex = get().stepIndex
      const isFirstStep = currentIndex === 0
      const nextStep = isFirstStep ? currentIndex : currentIndex - 1

      return {
        stepIndex: nextStep,
        step: get().steps[nextStep],
      }
    }),
  goTo: (step) => set({ stepIndex: step, step: get().steps[step] }),
}))

export { useForm }
