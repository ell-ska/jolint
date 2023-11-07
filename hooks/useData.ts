import { useEffect, useState } from 'react'

import { useToaster } from '@/hooks/useToaster'
import { fetchData } from '@/lib/fetchData'
import type { dataResponse, endpoints } from '@/utils/types'

const useData = (endpoint: endpoints) => {
  const [data, setData] = useState<dataResponse | undefined>()
  const [isLoading, setIsLoading] = useState(true)
  const { setToaster, setMessage } = useToaster((state) => ({
    setToaster: state.setToaster,
    setMessage: state.setMessage,
  }))

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true)

      const { data, error } = await fetchData(endpoint)

      if (data) {
        setData({ data, error })
      }

      if (error) {
        setToaster(true)
        setMessage(error.message)
      }

      setIsLoading(false)
    }

    fetcher()
  }, [endpoint, setMessage, setToaster])

  return { data: data?.data, error: data?.error, isLoading }
}

export { useData }
