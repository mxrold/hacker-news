import { useState, useEffect } from 'react'

export const useGetDataLocalStorage = (keyFav) => {
  const [listFavorites, setListFavorites] = useState([])

  useEffect(() => {
    const data = []

    for(let key in window.localStorage) {
      const values = JSON.parse(window.localStorage.getItem(key))
      key.includes(keyFav) ? data.push(values) : []
    }

    setListFavorites(data)
  }, [listFavorites])

  return [listFavorites]
}