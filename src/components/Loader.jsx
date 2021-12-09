import { useState, useEffect } from 'react'
import '../assets/styles/components/News.css'
import '../assets/styles/components/Loader.css'

const Loader = ({ items, loading }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const array = []
    for (let i = 0; i < items; i++) {
      array.push(i)
    }

    setCards(array)
  }, [])

  return (
    <>
      {
      loading &&
        <div className='Loader News container-width'>
          {
          cards.map((item, index) => (
            <div className='Loader__item News__item' key={index}>
              <div className='Loader__item--color' />
            </div>
          ))
          }
        </div>
      }
    </>
  )
}

export default Loader
