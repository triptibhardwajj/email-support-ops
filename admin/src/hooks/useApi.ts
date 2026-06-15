'use client'

import { useEffect, useState } from 'react'
import { fetchApi, ApiResponse } from '@/lib/api'

interface UseApiOptions {
  skip?: boolean
}

export function useApi<T>(
  url: string,
  options?: UseApiOptions
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (options?.skip) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      setLoading(true)
      const response = await fetchApi<T>(url)

      if (response.success && response.data) {
        setData(response.data)
        setError(null)
      } else {
        setError(response.error?.message || 'Failed to fetch data')
      }
      setLoading(false)
    }

    fetchData()
  }, [url, options?.skip])

  return { data, loading, error }
}
