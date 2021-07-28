import { useState, useEffect } from 'react'

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      forwards
        ? setCounter((prevCounter) => prevCounter + 1)
        : setCounter((prevCounter) => prevCounter - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [forwards])

  return counter
}

export default useCounter
