'use client'

import { create } from 'zustand'

import { formContent } from '@/lib/formContent'
import { ChapterKeys } from '@/utils/types'

type State = {
  steps: JSX.Element[]
  step: JSX.Element
  stepIndex: number
  doneChapters: number
}

type Actions = {
  next: () => void
  back: () => void
  goTo: (step: ChapterKeys) => void
}

const initialState: State = {
  steps: formContent,
  step: formContent[0],
  stepIndex: 0,
  doneChapters: 0,
}

const useForm = create<State & Actions>((set, get) => ({
  ...initialState,
  next: () =>
    set(() => {
      const currentIndex = get().stepIndex
      const isLastStep = get().steps.length - 1 <= currentIndex
      const nextStep = isLastStep ? currentIndex : currentIndex + 1

      const currentDoneChapter = get().step.key?.split('done-')[1]
      const doneChapters =
        currentDoneChapter &&
        (get().doneChapters >= Number(currentDoneChapter)
          ? get().doneChapters
          : Number(currentDoneChapter))

      return {
        stepIndex: nextStep,
        step: get().steps[nextStep],
        doneChapters: doneChapters || get().doneChapters,
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
  goTo: (chosenStep) =>
    set(() => {
      const stepIndex = get().steps.findIndex((step) => step.key === chosenStep)

      return {
        stepIndex,
        step: get().steps[stepIndex],
      }
    }),
}))

export { useForm }
