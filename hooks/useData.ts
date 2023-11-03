import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

const baseUrl =
  'https://lively-meadow-0dee68d03.4.azurestaticapps.net/data-api/rest/'

const useData = (endpoint: string) => {
  const [data, setData] = useState<AxiosResponse>()

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await axios.get(baseUrl + endpoint)
        setData(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetcher()
  }, [endpoint])

  return data
}

export { useData }
