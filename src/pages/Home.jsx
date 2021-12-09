import { useGetData } from '../hooks/useGetData'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useInfinityScroll } from '../hooks/useInfinityScroll'
import { useSearch } from '../hooks/useSearch'
import Filters from '../components/Filters'
import News from '../components/News'
import ButtonHome from '../components/ButtonHome'
import Loader from '../components/Loader'
import LoadingError from '../components/LoadingError'
import '../assets/styles/pages/Home.css'
/* Fake data */
// import { data } from '../initialState'

const Home = () => {
  const key = 'HACKER_NEWS_CATEGORY'
  const initialValue = 'angular'
  const idPath = 'home'
  const { store, handleAddItem } = useLocalStorage(key, initialValue)
  const { countPages, ref } = useInfinityScroll()
  const { data, error, loading } = useGetData(store, countPages)
  const { query, onChange, searchData } = useSearch(data)

  const handleCategory = (value) => handleAddItem(value)

  const handleInputValue = (text) => onChange(text)

  return (
    <main id={idPath} className="Main container-padding">
      <Filters 
        onClick={handleCategory} 
        onChange={handleInputValue} 
        query={query} 
        category={store} 
        loading={loading}
      />
      {countPages > 1 && <ButtonHome path={idPath} />}
      <News data={searchData} />
      {error && <LoadingError />}
      {loading && <Loader items={10} />}
      <div className="Observer" ref={ref}></div>
    </main>
  )
}

export default Home
