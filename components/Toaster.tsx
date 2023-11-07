import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

import { useToaster } from '@/hooks/useToaster'

const Toaster = () => {
  const { toaster, setToaster, message } = useToaster()

  useEffect(() => {
    const timer = setTimeout(() => {
      setToaster(false)
    }, 3200)

    return () => clearTimeout(timer)
  }, [setToaster])

  if (!toaster) return null

  return (
    <div className='fixed bottom-4 left-4 z-50 flex items-center gap-4 rounded-lg bg-red px-8 py-4 text-neutral-100'>
      <AlertCircle />
      <p>{message}</p>
    </div>
  )
}

export default Toaster
