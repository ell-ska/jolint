import { useEffect, useState } from 'react'
import axios, { AxiosResponse, isAxiosError } from 'axios'

import { useToaster } from '@/hooks/useToaster'

type endpoints =
  | 'inclusionscore'
  | 'demographic-inclusion'
  | 'demographic-timeline'

const baseUrl = 'https://jolintdb.cyclic.app/'

const useData = (endpoint: endpoints) => {
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
        console.log(error)
        if (isAxiosError(error)) {
          setToaster(true)
          setMessage(error.message)
        }
      }
    }

    fetcher()
    // eslint-disable-next-line
  }, [endpoint])

  return data
}

export { useData }
