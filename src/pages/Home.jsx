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
    <main id={idPath} className='Main container-padding'>
      <Filters
        onClick={handleCategory}
        onChange={handleInputValue}
        query={query}
        category={store}
        loading={loading}
      />
      <ButtonHome path={idPath} countPages={countPages} />
      <News data={searchData} />
      <LoadingError error={error} />
      <Loader items={10} loading={loading} />
      <div className='Observer' ref={ref} />
    </main>
  )
}

export default Home
