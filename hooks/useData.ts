import { useEffect, useState } from 'react'
import axios, { AxiosResponse, isAxiosError } from 'axios'

import { useToaster } from '@/hooks/useToaster'

const useData = () => {
  const [data, setData] = useState<AxiosResponse>()
  const { setToaster, setMessage } = useToaster((state) => ({
    setToaster: state.setToaster,
    setMessage: state.setMessage,
  }))

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await axios.get('/api/metrics')
        setData(response)
      } catch (error) {
        console.log(error)
        if (isAxiosError(error)) {
          setToaster(true)
          setMessage(error.message)
        }
      }
    }

    fetcher()
  }, [setMessage, setToaster])

  return data
}

export { useData }
