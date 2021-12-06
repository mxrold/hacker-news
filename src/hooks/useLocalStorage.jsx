import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const toggleFavorite = (item) => {
    window.localStorage.getItem(key) ? handleRemoveFavorite() : handleAddFavorite(item)
  }

  const handleRemoveFavorite = () => {
    const alert = window.confirm('Do you want to delete this favorite?')
    if (alert) {
      window.localStorage.removeItem(key)
      setIsFavorite(false)
    }
  }

  const handleAddFavorite = (item) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(item))
      setIsFavorite(item)
    } catch {
      window.alert('Could not save the favorite')
    }
  }

  return [isFavorite, toggleFavorite]
}