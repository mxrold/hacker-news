import { useState, useEffect } from 'react'

export const useViewportWidth = (width) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (window.innerWidth > width) {
      return true
    } else {
      return false
    }
  })

  useEffect(() => {
    const handleResize = () => window.innerWidth > width ? setIsMobile(true) : setIsMobile(false)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return [isMobile, setIsMobile]
}
