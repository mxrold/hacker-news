import { useGetData } from '../hooks/useGetData'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Filters from '../components/Filters'
import News from '../components/News'
/* Fake data */
// import { data } from '../initialState'

const Home = () => {
  const key = 'HACKER_NEWS_CATEGORY'
  const initialValue = 'angular'
  const { store, handleAddItem } = useLocalStorage(key, initialValue)
  const { data, error, loading } = useGetData(store)

  const handleCategory = (value) => handleAddItem(value)

  if (error) return <h2>We could not load the information.</h2>

  return (
    <main className="Main container-padding">
      <Filters onClick={handleCategory} category={store} />
      {
      loading 
        ? <h2>Loading...</h2>
        : <News data={data} />
      }
    </main>
  )
}

export default Home

