'use server'

import { dataResponse } from '@/utils/types'

const baseUrl = process.env.API_BASE_URL

const fetchData = async (endpoint: string): Promise<dataResponse> => {
  try {
    if (!baseUrl) {
      throw new Error('No url found')
    }

    const response = await fetch(baseUrl + endpoint)

    if (!response.ok) {
      throw new Error(response.statusText, { cause: response })
    }

    const data = await response.json()

    if (!data) {
      throw new Error('No data found')
    }

    return { data, error: undefined }
  } catch (error) {
    if (error instanceof Error) {
      const cause = error.cause as Response

      return {
        data: undefined,
        error: { status: cause?.status, message: error.message },
      }
    }

    return {
      data: undefined,
      error: { status: 500, message: 'Internal error' },
    }
  }
}

export { fetchData }
