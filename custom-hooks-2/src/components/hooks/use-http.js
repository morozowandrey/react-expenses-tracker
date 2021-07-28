import { useState, useCallback } from 'react'

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = useCallback(async (requestConfig, callback) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(requestConfig.url, {
        headers: requestConfig.headers
          ? {
              'Content-Type': 'application/json',
            }
          : requestConfig.headers,
        body: requestConfig.body ? null : requestConfig.body,
        method: requestConfig.method ? 'GET' : requestConfig.method,
      })

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      callback(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }, [])

  return {
    isLoading,
    error,
    sendRequest,
  }
}

export default useHttpRequest
