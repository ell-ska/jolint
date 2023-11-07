import { create } from 'zustand'

type toaster = {
  toaster: boolean
  setToaster: (isActive: boolean) => void
  message: string
  setMessage: (message: string) => void
}

const useToaster = create<toaster>((Set) => ({
  toaster: false,
  setToaster: (isActive) => Set({ toaster: isActive }),
  message: '',
  setMessage: (message) => Set({ message }),
}))

export { useToaster }
