import { useState, useEffect } from 'react'

export const useGetData = (store = '', countPages = 0) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${store}&page=${countPages}`

  useEffect(() => {  
    getData(url, true)
  }, [store])

  useEffect(() => {
    getData(url, false)
  }, [countPages])

  const getData = async (value, category) => {
    try {
      setLoading(true)
      const response = await fetch(value)
      const responseJson = await response.json()
      const news = responseJson.hits
      if (category) {
        setData([])
        setData(news)
      } else {
        setData((prev) => [...prev, ...news])
      }
      setLoading(false)
    } catch {
      setError(true)
    }
  }

  return { data, error, loading }
}