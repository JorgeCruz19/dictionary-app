import { useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const search = async (query) => {
    try {
      setIsError(false)
      setIsLoading(true)
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      if (!res.ok) {
        throw new Error('API response was not OK')
      }
      const data = await res.json()
      setData(data)
      if (!data || !data.length) {
        throw new Error('API response was empty or invalid')
      }
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
      setIsError(true)
      setIsLoading(false)
      setData([])
    }
  }

  return { isLoading, isError, data, search }
}

export default useFetch
