import { useEffect, useState } from 'react'
import axios, { AxiosResponse, isAxiosError } from 'axios'

import { useToaster } from '@/hooks/useToaster'

const baseUrl =
  'https://lively-meadow-0dee68d03.4.azurestaticapps.net/data-api/rest/'

const useData = (endpoint: string) => {
  const [data, setData] = useState<AxiosResponse>()
  const { setToaster, setMessage } = useToaster((state) => ({
    setToaster: state.setToaster,
    setMessage: state.setMessage,
  }))

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await axios.get(baseUrl + endpoint)
        setData(response)
      } catch (error) {
        if (isAxiosError(error)) {
          setToaster(true)
          setMessage(error.message)
        }

        console.log(error)
      }
    }

    fetcher()
  }, [endpoint, setMessage, setToaster])

  return data
}

export { useData }
