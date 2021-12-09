import News from '../components/News'
import { useGetDataLocalStorage } from '../hooks/useGetDataLocalStorage'
/* Fake data */
// import { data } from '../initialState'

const Favorites = () => {
  const KEY_FAVS = 'HACKER_NEWS_FAV'
  const [listFavorites] = useGetDataLocalStorage(KEY_FAVS)

  return (
    <main className='Main container-padding'>
      {
      listFavorites.length === 0
        ? <h2>There is no favorites yet 🙈</h2>
        : <News data={listFavorites} />
      }
    </main>
  )
}

export default Favorites
