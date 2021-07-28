import { useState, useCallback } from 'react'

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = useCallback(async (requestConfig, callback) => {
    setIsLoading(true)
    setError(null)
    try {
      console.log(requestConfig)
      const response = await fetch(requestConfig.url, {
        headers: requestConfig.headers
          ? requestConfig.headers
          : {
              'Content-Type': 'application/json',
            },
        body: requestConfig.body ? requestConfig.body : null,
        method: requestConfig.method ? requestConfig.method : 'GET',
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
