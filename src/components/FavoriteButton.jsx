import OutlineHeart from '../assets/static/outline-heart.svg'
import HeartFill from '../assets/static/heart-fill.svg'
import '../assets/styles/components/FavoriteButton.css'

const FavoriteButton = () => {
  return (
    <div className="FavoriteButton">
      <button>
        <img src={OutlineHeart} alt="Favorite icon" title="Add to favorites" />
      </button>
    </div>
  )
}

export default FavoriteButton