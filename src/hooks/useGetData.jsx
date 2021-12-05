import { useState, useEffect } from 'react'

export const useGetData = (category = '') => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${category}&page=0`

  useEffect(() => {
    const getData = async (value) => {
      try {
        setLoading(true)
        const response = await fetch(value)
        const responseJson = await response.json()
        const news = responseJson.hits
        setData(news)
        setLoading(false)
      } catch {
        setError(true)
      }
    }

    getData(url)
  }, [category])

  return { data, error, loading }
}