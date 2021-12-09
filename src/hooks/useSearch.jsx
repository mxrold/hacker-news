import { useState, useMemo } from 'react'

export const useSearch = (data) => {
  const [query, setQuery] = useState('')
  const array = [...data]

  const onChange = (value) => {
    const text = value.target.value
    setQuery(text)
  }

  const searchData = useMemo(() =>
    array.filter(item => {
      return item.story_title.toLowerCase().includes(query.toLowerCase())
    }),
  [array, query]
  )

  return { query, onChange, searchData }
}
