import { useState, useEffect, useRef } from 'react'

export const useInfinityScroll = () => {
  const [show, setShow] = useState(false)
  const [countPages, setCountPages] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        setCountPages(prevState => prevState + 1)
      } else {
        setShow(false)
      }
    })
    observer.observe(ref.current)
  }, [ref])

  return { show, countPages, ref }
}
