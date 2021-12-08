import { useGetData } from '../hooks/useGetData'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useInfinityScroll } from '../hooks/useInfinityScroll'
import Filters from '../components/Filters'
import News from '../components/News'
import '../assets/styles/pages/Home.css'
/* Fake data */
// import { data } from '../initialState'

const Home = () => {
  const key = 'HACKER_NEWS_CATEGORY'
  const initialValue = 'angular'
  const { store, handleAddItem } = useLocalStorage(key, initialValue)
  const { count, ref } = useInfinityScroll()
  const { data, error, loading } = useGetData(store, count)

  const handleCategory = (value) => handleAddItem(value)

  if (error) return <h2>We could not load the information.</h2>

  return (
    <main className="Main container-padding">
      <Filters onClick={handleCategory} category={store} />
      <News data={data} />
      {loading && <h2>Loading...</h2>}
      <div className="Observer" ref={ref}></div>
    </main>
  )
}

export default Home

