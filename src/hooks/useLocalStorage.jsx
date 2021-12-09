import { useState } from 'react'

export const useLocalStorage = (key = '', initialValue = '') => {
  const [store, setStore] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })
  const [stateRemoveItem, setStateRemoveItem] = useState(false)

  const toggleFavorite = (item) => {
    window.localStorage.getItem(key) ? handleRemoveItem() : handleAddItem(item)
  }

  const handleRemoveItem = (confirm) => {
    setStateRemoveItem(true)
    if (confirm) {
      window.localStorage.removeItem(key)
      setStore(false)
      setStateRemoveItem(false)
    }
  }

  const handleAddItem = (item) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(item))
      setStore(item)
    } catch {
      window.alert('Could not save the favorite')
    }
  }

  return { store, toggleFavorite, handleAddItem, handleRemoveItem, stateRemoveItem, setStateRemoveItem }
}
