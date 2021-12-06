import { useLocalStorage } from '../hooks/useLocalStorage'
import OutlineHeart from '../assets/static/outline-heart.svg'
import HeartFill from '../assets/static/heart-fill.svg'
import '../assets/styles/components/FavoriteButton.css'

const FavoriteButton = ({ id, item }) => {
  const key = `HACKER_NEWS_FAV_${id}`
  const initialValue = false
  const [isFavorite, toggleFavorite] = useLocalStorage(key, initialValue)
 
  return (
    <div className="FavoriteButton">
      <button onClick={() => toggleFavorite(item)}>
        <img src={isFavorite ? HeartFill : OutlineHeart} alt="Favorite icon" title="Add to favorites" />
      </button>
    </div>
  )
}

export default FavoriteButton