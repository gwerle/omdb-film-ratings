import { useState, useEffect } from 'react'
// Hook que recebe um valor e um delay em que tal valor seja retornado. Usado para realizar chamadas REST em onChange com algum delay
export default function useDebounce (value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    let handler
    if (value.length > 0) {
      handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
    } else {
      setDebouncedValue(value)
    }

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
