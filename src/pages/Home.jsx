import { useState } from 'react'
import { useGetData } from '../hooks/useGetData'
import Filters from '../components/Filters'
import News from '../components/News'
import { data } from '../initialState'

const Home = () => {
  const [category, setCategory] = useState('angular')
  const { data, error, loading } = useGetData(category)

  const handleCategory = (value) => {
    setCategory(value)
  }

  if (error) return <h2>We could not load the information.</h2>

  return (
    <main className="Main container-padding">
      <Filters onClick={handleCategory} />
      {
      loading 
        ? <h2>Loading...</h2>
        : <News data={data} />
      }
    </main>
  )
}

export default Home

