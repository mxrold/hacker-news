import { useState, useEffect } from 'react'
import '../assets/styles/components/News.css'
import '../assets/styles/components/Loader.css'

const Loader = ({ items }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    let array = []
    for(let i = 0; i < items; i++) {
      array.push(i)
    }

    setCards(array)
  }, [])

  return (
    <div className="Loader News container-width">
      {
        cards.map(item => (
          <div className="Loader__item News__item" key={item.index}>
            <div className="Loader__item--color"></div>
          </div>
        ))
      }
    </div>
  )
}

export default Loader