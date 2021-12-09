import { useLocalStorage } from '../hooks/useLocalStorage'
import Modal from './Modal'
import ModalFavorites from './ModalFavorites'
import OutlineHeart from '../assets/static/outline-heart.svg'
import HeartFill from '../assets/static/heart-fill.svg'
import '../assets/styles/components/FavoriteButton.css'

const FavoriteButton = ({ id, item }) => {
  const key = `HACKER_NEWS_FAV_${id}`
  const initialValue = false
  const { store, toggleFavorite, handleRemoveItem, stateRemoveItem, setStateRemoveItem } = useLocalStorage(key, initialValue)

  return (
    <>
      <div className='FavoriteButton'>
        <button onClick={() => toggleFavorite(item)}>
          <img src={store ? HeartFill : OutlineHeart} alt='Favorite icon' title='Add to favorites' />
        </button>
      </div>
      {
      stateRemoveItem &&
        <Modal>
          <ModalFavorites
            stateRemoveItem={stateRemoveItem}
            setStateRemoveItem={setStateRemoveItem}
            handleRemoveItem={handleRemoveItem}
          />
        </Modal>
      }
    </>
  )
}

export default FavoriteButton
